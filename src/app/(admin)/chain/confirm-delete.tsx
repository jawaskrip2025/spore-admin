'use client'
import { FormDelete } from "@/components/forms/form-delete"
import { useDeleteChain } from "@/modules/chain/hooks/useChain"

export function ConfirmDelete({ id }: { id: number }) {
  const { mutate, isPending } = useDeleteChain()
  return (
    <FormDelete
      onConfirm={() => mutate(id)}
      isLoading={isPending}
      title="Delete Chain?"
      description="This will permanently delete this chain from the system."
    />
  )
}