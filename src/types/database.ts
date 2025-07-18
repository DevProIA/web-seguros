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
      ciudad: {
        Row: {
          id_ciudad: number
          id_depar: number | null
          nombre: string
        }
        Insert: {
          id_ciudad?: number
          id_depar?: number | null
          nombre: string
        }
        Update: {
          id_ciudad?: number
          id_depar?: number | null
          nombre?: string
        }
        Relationships: [
          {
            foreignKeyName: "ciudad_id_depar_fkey"
            columns: ["id_depar"]
            isOneToOne: false
            referencedRelation: "departamentos"
            referencedColumns: ["id_depar"]
          },
        ]
      }
      cotizaciones: {
        Row: {
          detalles: string | null
          fecha_solicitud: string | null
          id: number
          id_estado: number | null
          seguro_id: number | null
          user_id: number | null
        }
        Insert: {
          detalles?: string | null
          fecha_solicitud?: string | null
          id?: number
          id_estado?: number | null
          seguro_id?: number | null
          user_id?: number | null
        }
        Update: {
          detalles?: string | null
          fecha_solicitud?: string | null
          id?: number
          id_estado?: number | null
          seguro_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "cotizaciones_id_estado_fkey"
            columns: ["id_estado"]
            isOneToOne: false
            referencedRelation: "estado_cotizacion"
            referencedColumns: ["id"]
          },
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
      departamentos: {
        Row: {
          id_depar: number
          nombre: string
        }
        Insert: {
          id_depar?: number
          nombre: string
        }
        Update: {
          id_depar?: number
          nombre?: string
        }
        Relationships: []
      }
      estado_cotizacion: {
        Row: {
          estado: string
          id: number
        }
        Insert: {
          estado: string
          id?: number
        }
        Update: {
          estado?: string
          id?: number
        }
        Relationships: []
      }
      estado_poliza: {
        Row: {
          estado: string
          id: number
        }
        Insert: {
          estado: string
          id?: number
        }
        Update: {
          estado?: string
          id?: number
        }
        Relationships: []
      }
      mensajes: {
        Row: {
          fecha_envio: string | null
          id: number
          mensaje: string
          receptor_id_user: number | null
          remitente_id_user: number | null
        }
        Insert: {
          fecha_envio?: string | null
          id?: number
          mensaje: string
          receptor_id_user?: number | null
          remitente_id_user?: number | null
        }
        Update: {
          fecha_envio?: string | null
          id?: number
          mensaje?: string
          receptor_id_user?: number | null
          remitente_id_user?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "mensajes_receptor_id_user_fkey"
            columns: ["receptor_id_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mensajes_remitente_id_user_fkey"
            columns: ["remitente_id_user"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pagos: {
        Row: {
          enviado_whatsapp: boolean | null
          fecha_pago: string | null
          id: number
          monto: number
          poliza_id: number | null
          soporte_url: string | null
          user_id: number | null
        }
        Insert: {
          enviado_whatsapp?: boolean | null
          fecha_pago?: string | null
          id?: number
          monto: number
          poliza_id?: number | null
          soporte_url?: string | null
          user_id?: number | null
        }
        Update: {
          enviado_whatsapp?: boolean | null
          fecha_pago?: string | null
          id?: number
          monto?: number
          poliza_id?: number | null
          soporte_url?: string | null
          user_id?: number | null
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
          fecha_fin: string
          fecha_inicio: string
          id: number
          id_estado: number | null
          seguro_id: number | null
          user_id: number | null
        }
        Insert: {
          fecha_fin: string
          fecha_inicio: string
          id?: number
          id_estado?: number | null
          seguro_id?: number | null
          user_id?: number | null
        }
        Update: {
          fecha_fin?: string
          fecha_inicio?: string
          id?: number
          id_estado?: number | null
          seguro_id?: number | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "polizas_id_estado_fkey"
            columns: ["id_estado"]
            isOneToOne: false
            referencedRelation: "estado_poliza"
            referencedColumns: ["id"]
          },
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
          estado_id: number
          fecha_envio: string | null
          fecha_respuesta: string | null
          id: number
          id_tipo: number
          mensaje: string
          respuesta: string | null
          user_id: number | null
        }
        Insert: {
          estado_id: number
          fecha_envio?: string | null
          fecha_respuesta?: string | null
          id?: number
          id_tipo: number
          mensaje: string
          respuesta?: string | null
          user_id?: number | null
        }
        Update: {
          estado_id?: number
          fecha_envio?: string | null
          fecha_respuesta?: string | null
          id?: number
          id_tipo?: number
          mensaje?: string
          respuesta?: string | null
          user_id?: number | null
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
          apellido: string | null
          barrio: string | null
          direccion: string | null
          fecha_registro: string | null
          id: number
          id_auth: string | null
          id_ciudad: number | null
          nombre: string
          rol_id: number
          telefono: number | null
        }
        Insert: {
          apellido?: string | null
          barrio?: string | null
          direccion?: string | null
          fecha_registro?: string | null
          id?: number
          id_auth?: string | null
          id_ciudad?: number | null
          nombre: string
          rol_id?: number
          telefono?: number | null
        }
        Update: {
          apellido?: string | null
          barrio?: string | null
          direccion?: string | null
          fecha_registro?: string | null
          id?: number
          id_auth?: string | null
          id_ciudad?: number | null
          nombre?: string
          rol_id?: number
          telefono?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_ciudad_fkey"
            columns: ["id_ciudad"]
            isOneToOne: false
            referencedRelation: "ciudad"
            referencedColumns: ["id_ciudad"]
          },
          {
            foreignKeyName: "users_rol_id_fkey"
            columns: ["rol_id"]
            isOneToOne: false
            referencedRelation: "roles"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          id: number
          nombre_rol: string
        }
        Insert: {
          id?: number
          nombre_rol: string
        }
        Update: {
          id?: number
          nombre_rol?: string
        }
        Relationships: []
      }
      seguros: {
        Row: {
          activo: boolean | null
          descripcion: string | null
          id: number
          nombre: string
          precio_base: number
        }
        Insert: {
          activo?: boolean | null
          descripcion?: string | null
          id?: number
          nombre: string
          precio_base: number
        }
        Update: {
          activo?: boolean | null
          descripcion?: string | null
          id?: number
          nombre?: string
          precio_base?: number
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
