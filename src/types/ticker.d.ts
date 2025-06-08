import { createTickerSchema } from "@/modules/ticker/schema"
import { z } from "zod"

export type TFormTicker = z.infer<typeof createTickerSchema>

export type TTicker = {
  id: number
  name: string
  x?: string
  telegram?: string
  web?: string
  dc?: string
  apiPrice?: string
  apiBalance?: string
  link_wallet?: string
}