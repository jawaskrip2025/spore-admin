import { z } from "zod";

export const createBalanceSchema = z.object({
  id: z.coerce.number().optional(),
  ticker_id: z.coerce.number(),
  chain_id: z.coerce.number(),
  wallet: z.string().min(1),
  balance: z.coerce.number(),
  price: z.coerce.number(),
  sub_total: z.coerce.number(),
})
