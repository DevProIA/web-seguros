import { supabase } from '../lib/supabase';

export interface UserProfile {
  id_users?: number;
  id?: string; // Auth ID de Supabase
  nombre: string;
  apellido: string | null;
  direction?: string | null;
  barrio?: string | null;
  id_rol?: number | null;
  fecha_registro?: string | null;
  id_estado_user?: number | null;
  email?: string | null;
  telefono?: number | null;
  id_ciudad?: number | null;
  role?: {
    id_rol: number;
    roles: string;
  } | null;
  ciudad?: {
    id_ciudad: number;
    nombre_ciu: string;
    departamento?: {
      id_depar: number;
      nombre_depa: string;
    } | null;
  } | null;
}

export class AuthService {
  static async signUp(
    email: string,
    password: string,
    userData: {
      nombre: string;
      apellido?: string;
      direccion?: string;
      barrio?: string;
      ciudadId?: number;
      telefono?: number;
      email?: string;
    }
  ) {
    try {
      console.log('Starting signup process...');
      
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            nombre: userData.nombre,
            apellido: userData.apellido || '',
          },
        },
      });

      if (authError) {
        console.error('Auth signup error:', authError);
        throw authError;
      }

      if (authData.user) {
        console.log('User created, creating profile...');
        
        // Crear perfil en la tabla users
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .insert({
            id: authData.user.id,
            nombre: userData.nombre,
            apellido: userData.apellido || null,
            direction: userData.direccion || null,
            barrio: userData.barrio || null,
            id_ciudad: userData.ciudadId || null,
            telefono: userData.telefono || null,
            id_rol: 1, // Usuario por defecto
            email: userData.email || authData.user.email,
            fecha_registro: new Date().toISOString(),
            id_estado_user: 1, // Activo por defecto
          })
          .select()
          .single();

        if (profileError) {
          console.error('Profile creation error:', profileError);
          throw profileError;
        }

        console.log('Profile created successfully:', profileData);
        return { user: authData.user, profile: profileData };
      }

      return { user: null, profile: null };
    } catch (error) {
      console.error('Error en registro:', error);
      throw error;
    }
  }

  static async signIn(email: string, password: string) {
    try {
      console.log('Attempting login with:', email);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error('Supabase auth error:', error);
        throw error;
      }

      console.log('Auth successful, user:', data.user?.id);

      if (data.user) {
        const profile = await this.getUserProfile(data.user.id);
        console.log('Profile loaded:', profile);
        return { user: data.user, profile };
      }

      return { user: null, profile: null };
    } catch (error) {
      console.error('Error en login:', error);
      throw error;
    }
  }

  static async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error en logout:', error);
      throw error;
    }
  }

  static async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const profile = await this.getUserProfile(user.id);
        return { user, profile };
      }
      return { user: null, profile: null };
    } catch (error) {
      console.error('Error obteniendo usuario actual:', error);
      return { user: null, profile: null };
    }
  }

  static async getUserProfile(authId: string): Promise<UserProfile | null> {
    try {
      console.log('Getting profile for user:', authId);
      
      // Primero intentar obtener solo el perfil básico
      const { data: basicProfile, error: basicError } = await supabase
        .from('users')
        .select('*')
        .eq('id', authId)
        .single();

      if (basicError) {
        console.error('Basic profile fetch error:', basicError);
        if (basicError.code === 'PGRST116') {
          console.log('User not found in users table');
          return null;
        }
        throw basicError;
      }

      console.log('Basic profile data:', basicProfile);

      // Intentar obtener el rol
      let roleData = null;
      if (basicProfile.id_rol) {
        try {
          const { data: role, error: roleError } = await supabase
            .from('roles')
            .select('id_rol, roles')
            .eq('id_rol', basicProfile.id_rol)
            .single();
          
          if (!roleError) {
            roleData = role;
          }
        } catch (roleError) {
          console.warn('Could not fetch role:', roleError);
        }
      }

      // Intentar obtener la ciudad y departamento
      let ciudadData = null;
      if (basicProfile.id_ciudad) {
        try {
          const { data: ciudad, error: ciudadError } = await supabase
            .from('ciudad')
            .select('id_ciudad, nombre_ciu, id_depar')
            .eq('id_ciudad', basicProfile.id_ciudad)
            .single();
          
          if (!ciudadError && ciudad) {
            ciudadData = {
              id_ciudad: ciudad.id_ciudad,
              nombre_ciu: ciudad.nombre_ciu,
              departamento: null
            };

            // Intentar obtener el departamento
            if (ciudad.id_depar) {
              try {
                const { data: depto, error: deptoError } = await supabase
                  .from('departamentos')
                  .select('id_depar, nombre_depa')
                  .eq('id_depar', ciudad.id_depar)
                  .single();
                
                if (!deptoError && depto) {
                  ciudadData.departamento = {
                    id_depar: depto.id_depar,
                    nombre_depa: depto.nombre_depa
                  };
                }
              } catch (deptoError) {
                console.warn('Could not fetch departamento:', deptoError);
              }
            }
          }
        } catch (ciudadError) {
          console.warn('Could not fetch ciudad:', ciudadError);
        }
      }

      const profile: UserProfile = {
        id_users: basicProfile.id_users,
        id: basicProfile.id,
        nombre: basicProfile.nombre,
        apellido: basicProfile.apellido,
        direction: basicProfile.direction,
        barrio: basicProfile.barrio,
        fecha_registro: basicProfile.fecha_registro,
        id_rol: basicProfile.id_rol,
        id_ciudad: basicProfile.id_ciudad,
        telefono: basicProfile.telefono,
        email: basicProfile.email,
        id_estado_user: basicProfile.id_estado_user,
        role: roleData,
        ciudad: ciudadData
      };

      console.log('Final processed profile:', profile);
      return profile;

    } catch (error) {
      console.error('Error obteniendo perfil:', error);
      return null;
    }
  }

  static async updateProfile(userId: string, updates: Partial<UserProfile>) {
    try {
      console.log('Updating profile for user:', userId, 'with updates:', updates);
      
      const { data, error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId)
        .select()
        .single();

      if (error) {
        console.error('Profile update error:', error);
        throw error;
      }
      
      console.log('Profile updated successfully:', data);
      return data;
    } catch (error) {
      console.error('Error actualizando perfil:', error);
      throw error;
    }
  }

  static hasRole(profile: UserProfile | null, requiredRole: string): boolean {
    if (!profile || !profile.role) return false;
    return profile.role.roles.toLowerCase() === requiredRole.toLowerCase();
  }

  static isAdmin(profile: UserProfile | null): boolean {
    return this.hasRole(profile, 'admin');
  }

  static isSeller(profile: UserProfile | null): boolean {
    return this.hasRole(profile, 'vendedor');
  }
}