import { createBalanceSchema } from "@/modules/balance/schema"
import { z } from "zod"
import { TChain } from "./chain"
import { TTicker } from "./ticker"
export type TFormBalance = z.infer<typeof createBalanceSchema>

export type TBalance = {
  id: number
  tickerId: number
  wallet: string
  chainId: number
  balance: string
  price: string
  subTotal: string
  chain: TChain
  ticker: TTicker
  link_ref: string
}