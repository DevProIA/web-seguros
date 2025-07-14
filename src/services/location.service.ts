import { supabase } from '../lib/supabase';
import type { Database } from '../types/database';






type Departamento = Database['public']['Tables']['departamentos']['Row'];
type Ciudad = Database['public']['Tables']['ciudad']['Row'];


export interface CiudadWithDepartamento extends Ciudad {
  departamentos?: Departamento;
}

export class LocationService {
  // Obtener todos los departamentos
  static async getDepartamentos(): Promise<Departamento[]> {
    try {
      const { data, error } = await supabase
        .from('departamentos')
        .select('id_depar, nombre_depa')
        .order('nombre_depa');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error obteniendo departamentos:', error);
      return [];
    }
  }

  // Obtener ciudades por departamento
  static async getCiudadesByDepartamento(departamentoId: number): Promise<Ciudad[]> {
    try {
      const { data, error } = await supabase
        .from('ciudad')
        .select('id_ciudad, nombre_ciu, id_depar')
        .eq('id_depar', departamentoId)
        .order('nombre_ciu');

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error obteniendo ciudades:', error);
      return [];
    }
  }

  // Crear nueva dirección
  
}