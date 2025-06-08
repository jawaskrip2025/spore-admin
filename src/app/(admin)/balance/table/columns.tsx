"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cutString, DollarNumber } from "@/lib/string";
import { TBalance } from "@/types/balance";
import { ColumnDef } from "@tanstack/react-table";
import FormSubmit from "../form-submit";
import { ConfirmDelete } from "../confirm-delete";

export const columns: ColumnDef<TBalance>[] = [
  {
    accessorKey: "chain",
    header: "Chain",
    cell: ({ row }) => <p>{row.original.chain.name}</p>,
  },
  {
    accessorKey: "ticker",
    header: "Ticker",
    cell: ({ row }) => <p>{row.original.ticker.name}</p>,
  },
  {
    accessorKey: "wallet",
    header: "Wallet",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="line-clamp-1">
                {cutString(row.original.wallet, 6)}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p>{row.original.wallet}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "balance",
    header: "Balance",
    cell: ({ row }) => <p>{DollarNumber(+row.original.balance)}</p>,
  },
  {
    accessorKey: "price",
    header: "Price [USD]",
    cell: ({ row }) => <p>$ {DollarNumber(+row.original.price)}</p>,
  },
  {
    accessorKey: "subTotal",
    header: "Total [USD]",
    cell: ({ row }) => (
      <p>$ {DollarNumber(+row.original.price * +row.original.balance)}</p>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2">
          <FormSubmit
            id={row.original.id}
            wallet={row.original.wallet}
            balance={+row.original.balance}
            price={+row.original.price}
            ticker_id={row.original.tickerId}
            chain_id={row.original.chainId}
            sub_total={+row.original.subTotal}            
          />
          <ConfirmDelete id={row.original.id} />
        </div>
      );
    },
  },
];