import { loginSchema } from "@/modules/auth/schema";
import { z } from "zod";

export type TFormLogin = z.infer<typeof loginSchema>
export type TResponseProfile = {
  id: number
  email: string
  name: string | null,
  role_id: number
  role: string
}
export type TResponseLogin = {
  token: string
  user: TResponseProfile
}