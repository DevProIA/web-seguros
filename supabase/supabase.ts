export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      cotizaciones: {
        Row: {
          created_at: string | null
          detalles: string | null
          estado: string | null
          fecha_solicitud: string | null
          id: number
          seguro_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          detalles?: string | null
          estado?: string | null
          fecha_solicitud?: string | null
          id?: number
          seguro_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          detalles?: string | null
          estado?: string | null
          fecha_solicitud?: string | null
          id?: number
          seguro_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cotizaciones_seguro_id_fkey"
            columns: ["seguro_id"]
            isOneToOne: false
            referencedRelation: "seguros"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cotizaciones_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pagos: {
        Row: {
          created_at: string | null
          estado: string | null
          fecha_pago: string | null
          id: number
          metodo_pago: string | null
          monto: number
          poliza_id: number | null
          referencia: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          estado?: string | null
          fecha_pago?: string | null
          id?: number
          metodo_pago?: string | null
          monto: number
          poliza_id?: number | null
          referencia?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          estado?: string | null
          fecha_pago?: string | null
          id?: number
          metodo_pago?: string | null
          monto?: number
          poliza_id?: number | null
          referencia?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pagos_poliza_id_fkey"
            columns: ["poliza_id"]
            isOneToOne: false
            referencedRelation: "polizas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pagos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      polizas: {
        Row: {
          created_at: string | null
          estado: string | null
          fecha_fin: string | null
          fecha_inicio: string
          id: number
          monto: number | null
          numero_poliza: string
          seguro_id: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          estado?: string | null
          fecha_fin?: string | null
          fecha_inicio: string
          id?: number
          monto?: number | null
          numero_poliza: string
          seguro_id?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          estado?: string | null
          fecha_fin?: string | null
          fecha_inicio?: string
          id?: number
          monto?: number | null
          numero_poliza?: string
          seguro_id?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "polizas_seguro_id_fkey"
            columns: ["seguro_id"]
            isOneToOne: false
            referencedRelation: "seguros"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "polizas_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pqrs: {
        Row: {
          created_at: string | null
          estado: string | null
          fecha_envio: string | null
          fecha_respuesta: string | null
          id: number
          mensaje: string
          respuesta: string | null
          tipo: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          estado?: string | null
          fecha_envio?: string | null
          fecha_respuesta?: string | null
          id?: number
          mensaje: string
          respuesta?: string | null
          tipo: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          estado?: string | null
          fecha_envio?: string | null
          fecha_respuesta?: string | null
          id?: number
          mensaje?: string
          respuesta?: string | null
          tipo?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pqrs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          apellido: string
          barrio: string | null
          ciudad: string | null
          created_at: string | null
          departamento: string | null
          direccion: string | null
          email: string
          estado: string | null
          fecha_registro: string | null
          id: string
          nombre: string
          rol: string | null
          telefono: string | null
          updated_at: string | null
        }
        Insert: {
          apellido: string
          barrio?: string | null
          ciudad?: string | null
          created_at?: string | null
          departamento?: string | null
          direccion?: string | null
          email: string
          estado?: string | null
          fecha_registro?: string | null
          id: string
          nombre: string
          rol?: string | null
          telefono?: string | null
          updated_at?: string | null
        }
        Update: {
          apellido?: string
          barrio?: string | null
          ciudad?: string | null
          created_at?: string | null
          departamento?: string | null
          direccion?: string | null
          email?: string
          estado?: string | null
          fecha_registro?: string | null
          id?: string
          nombre?: string
          rol?: string | null
          telefono?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      seguros: {
        Row: {
          activo: boolean | null
          created_at: string | null
          descripcion: string | null
          id: number
          precio_base: number | null
          tipo_seguro: string
        }
        Insert: {
          activo?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          id?: number
          precio_base?: number | null
          tipo_seguro: string
        }
        Update: {
          activo?: boolean | null
          created_at?: string | null
          descripcion?: string | null
          id?: number
          precio_base?: number | null
          tipo_seguro?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
