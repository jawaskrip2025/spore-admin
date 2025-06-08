import { z } from "zod";

export const createChainSchema = z.object({
  name: z.string().min(2)
})