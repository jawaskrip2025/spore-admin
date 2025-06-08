import { createChainSchema } from "@/modules/chain/schema"

export type TFormChain = z.infer<typeof createChainSchema>

export type TChain = {
  id: number
  name: string
}
