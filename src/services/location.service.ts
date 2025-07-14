import { supabase } from '../lib/supabase';

export interface Departamento {
  id_depar: number;
  nombre_depa: string;
}

export interface Ciudad {
  id_ciudad: number;
  nombre_ciu: string;
  id_depar: number;
}

export interface CiudadWithDepartamento extends Ciudad {
  departamentos?: Departamento;
}

export class LocationService {
  // Obtener todos los departamentos
  static async getDepartamentos(): Promise<Departamento[]> {
    try {
      console.log('Fetching departamentos...');
      
      const { data, error } = await supabase
        .from('departamentos')
        .select('id_depar, nombre_depa')
        .order('nombre_depa');

      if (error) {
        console.error('Error fetching departamentos:', error);
        throw error;
      }
      
      console.log('Departamentos fetched:', data);
      return data || [];
    } catch (error) {
      console.error('Error obteniendo departamentos:', error);
      return [];
    }
  }

  // Obtener ciudades por departamento
  static async getCiudadesByDepartamento(departamentoId: number): Promise<Ciudad[]> {
    try {
      console.log('Fetching ciudades for departamento:', departamentoId);
      
      const { data, error } = await supabase
        .from('ciudad')
        .select('id_ciudad, nombre_ciu, id_depar')
        .eq('id_depar', departamentoId)
        .order('nombre_ciu');

      if (error) {
        console.error('Error fetching ciudades:', error);
        throw error;
      }
      
      console.log('Ciudades fetched:', data);
      return data || [];
    } catch (error) {
      console.error('Error obteniendo ciudades:', error);
      return [];
    }
  }
}