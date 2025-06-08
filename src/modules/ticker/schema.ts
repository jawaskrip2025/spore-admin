import { z } from "zod";

export const createTickerSchema = z.object({
  id: z.coerce.number().optional(),
  name: z.string().min(2),
  x: z.string().optional(),
  telegram: z.string().optional(),
  web: z.string().optional(),
  dc: z.string().optional(),
  api_price: z.string().optional(),
  api_balance: z.string().optional(),
  link_wallet: z.string().optional(),
})