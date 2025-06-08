import { TChain } from "@/types/chain";
import { ColumnDef } from "@tanstack/react-table";
import { ConfirmDelete } from "../confirm-delete";
import FormSubmit from "../form-submit";


export const columns: ColumnDef<TChain>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end gap-1">
          <FormSubmit {...row.original} />
          <ConfirmDelete id={row.original.id} />
        </div>
      )
    }
  }
]

