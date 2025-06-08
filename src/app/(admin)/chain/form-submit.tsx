import { FormDialog } from "@/components/forms/form-dlialog"
import { FormInput } from "@/components/forms/form-input"
import { useCreateChain, useUpdateChain } from "@/modules/chain/hooks/useChain"
import { createChainSchema } from "@/modules/chain/schema"
import { TFormChain } from "@/types/chain"
import { useState } from "react"


export default function FormSubmit(props?: TFormChain) {
  const { mutate: createData, isPending:creating } = useCreateChain();
  const { mutate: updateData, isPending:updating } = useUpdateChain();
  const [dialog, setDialog] = useState<boolean>(false)

  const handleSubmit = (values: TFormChain) => {
    if (props.id) {
      updateData({ id: props.id, ...values }, {
        onSuccess: () => {
          setDialog(false)
        }
      })
    } else {
      createData(values, {
        onSuccess: () => {
          setDialog(false)
        }
      });

    }
  }

  return (
    <FormDialog<TFormChain>
      title="Form Chain"
      schema={createChainSchema}
      defaultValues={{
        name:"",
        ...props
      }}
      onSubmit={handleSubmit}
      open={dialog}
      setOpen={() => setDialog(!dialog)}
      isPending={creating || updating}
      formType={props.id ? "EDIT" : "CREATE"}
    >
      {(form) => (
        <>
          <FormInput
            label="Name"
            name="name"
            placeholder="name"
            control={form.control}
          />
        </>
      )}
    </FormDialog>
  )
}

