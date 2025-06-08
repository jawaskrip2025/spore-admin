'use client'
import { FormDelete } from "@/components/forms/form-delete"
import { useDeleteTicker } from "@/modules/ticker/hooks/useChain"

export function ConfirmDelete({ id }: { id: number }) {
  const { mutate, isPending } = useDeleteTicker()
  return (
    <FormDelete
      onConfirm={() => mutate(id)}
      isLoading={isPending}
      title="Delete Data?"
      description="This will permanently delete this data from the system."
    />
  )
}