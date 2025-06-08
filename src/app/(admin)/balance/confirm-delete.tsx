'use client'
import { FormDelete } from "@/components/forms/form-delete"
import { useDeleteBalance } from "@/modules/balance/hooks/useBalalnce"

export function ConfirmDelete({ id }: { id: number }) {
  const { mutate, isPending } = useDeleteBalance()
  return (
    <FormDelete
      onConfirm={() => mutate(id)}
      isLoading={isPending}
      title="Delete Data?"
      description="This will permanently delete this data from the system."
    />
  )
}