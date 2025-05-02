export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          aircraft_type: string | null
          booking_type: string
          created_at: string
          date: string | null
          destination: string | null
          doctor_required: boolean | null
          email: string
          full_name: string
          id: string
          medical_info: string | null
          organization: string | null
          origin: string | null
          paramedic_required: boolean | null
          passengers: number | null
          patient_condition: string | null
          phone: string
          pickup_location: string | null
          reference_number: string
          special_requests: string | null
          status: string | null
          stretcher_needed: boolean | null
          trip_type: string | null
          urgency: string | null
        }
        Insert: {
          aircraft_type?: string | null
          booking_type: string
          created_at?: string
          date?: string | null
          destination?: string | null
          doctor_required?: boolean | null
          email: string
          full_name: string
          id?: string
          medical_info?: string | null
          organization?: string | null
          origin?: string | null
          paramedic_required?: boolean | null
          passengers?: number | null
          patient_condition?: string | null
          phone: string
          pickup_location?: string | null
          reference_number: string
          special_requests?: string | null
          status?: string | null
          stretcher_needed?: boolean | null
          trip_type?: string | null
          urgency?: string | null
        }
        Update: {
          aircraft_type?: string | null
          booking_type?: string
          created_at?: string
          date?: string | null
          destination?: string | null
          doctor_required?: boolean | null
          email?: string
          full_name?: string
          id?: string
          medical_info?: string | null
          organization?: string | null
          origin?: string | null
          paramedic_required?: boolean | null
          passengers?: number | null
          patient_condition?: string | null
          phone?: string
          pickup_location?: string | null
          reference_number?: string
          special_requests?: string | null
          status?: string | null
          stretcher_needed?: boolean | null
          trip_type?: string | null
          urgency?: string | null
        }
        Relationships: []
      }
      cloud_seeding_quotes: {
        Row: {
          additional_info: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          land_size: string
          organization: string
          phone: string
          reference_number: string
          region: string
          status: string | null
          target_period: string
          title: string
        }
        Insert: {
          additional_info?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          land_size: string
          organization: string
          phone: string
          reference_number: string
          region: string
          status?: string | null
          target_period: string
          title: string
        }
        Update: {
          additional_info?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          land_size?: string
          organization?: string
          phone?: string
          reference_number?: string
          region?: string
          status?: string | null
          target_period?: string
          title?: string
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
