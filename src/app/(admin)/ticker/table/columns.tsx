"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ColumnDef } from "@tanstack/react-table";
import { FaDiscord, FaGlobe, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TTicker } from "@/types/ticker";
import { cutEndString } from "@/lib/string";
import FormSubmit from "../form-submit";
import { ConfirmDelete } from "../confirm-delete";

export const columns: ColumnDef<TTicker>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "socials",
    header: "Socials",
    cell: ({ row }) => {
      return (
        <div className="flex gap-1">
          {row.original.telegram ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={row.original.telegram}
              className="w-6 h-6 rounded-full flex items-center justify-center bg-black text-white"
            >
              <FaXTwitter />
            </a>
          ) : (
            "-"
          )}
          {row.original.x ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={row.original.x}
              className="w-6 h-6 rounded-full flex items-center justify-center bg-black text-white"
            >
              <FaTelegramPlane />
            </a>
          ) : (
            "-"
          )}
          {row.original.dc ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={row.original.dc}
              className="w-6 h-6 rounded-full flex items-center justify-center bg-black text-white"
            >
              <FaDiscord />
            </a>
          ) : (
            "-"
          )}
          {row.original.web ? (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={row.original.web}
              className="w-6 h-6 rounded-full flex items-center justify-center bg-black text-white"
            >
              <FaGlobe />
            </a>
          ) : (
            "-"
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "apiPrice",
    header: "Api Price",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="line-clamp-1">
                {row.original.apiPrice ? cutEndString(row.original.apiPrice, 20) : "-"}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="break-all w-[200px]">{row.original.apiPrice}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "apiBalance",
    header: "Api Balance",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="line-clamp-1">
                {row.original.apiBalance ? cutEndString(row.original.apiBalance, 20) : "-"}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="break-all w-[200px]">{row.original.apiBalance}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "link_wallet",
    header: "Link Wallet",
    cell: ({ row }) => {
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <p className="line-clamp-1">
                {row.original.link_wallet ? cutEndString(row.original.link_wallet, 20) : "-"}
              </p>
            </TooltipTrigger>
            <TooltipContent>
              <p className="break-all w-[200px]">{row.original.link_wallet}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex justify-end gap-2">
          <FormSubmit
            id={row.original.id}
            name={row.original.name}
            x={row.original.x}
            telegram={row.original.telegram}
            web={row.original.web}
            dc={row.original.dc}
            api_balance={row.original.apiBalance}
            api_price={row.original.apiPrice}
            link_wallet={row.original.link_wallet}
          />
          <ConfirmDelete id={row.original.id} />
        </div>
      );
    },
  },
];