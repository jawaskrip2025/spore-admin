import { FormDialog } from "@/components/forms/form-dlialog"
import { FormInput } from "@/components/forms/form-input"
import { useCreateTicker, useUpdateTicker } from "@/modules/ticker/hooks/useChain"
import { createTickerSchema } from "@/modules/ticker/schema"
import { TFormTicker } from "@/types/ticker"
import { useState } from "react"


export default function FormSubmit(props?: TFormTicker) {
  const { mutate: createData, isPending: creating } = useCreateTicker();
  const { mutate: updateData, isPending: updating } = useUpdateTicker();
  const [dialog, setDialog] = useState<boolean>(false)

  const handleSubmit = (values: TFormTicker) => {
    if (props?.id) {
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
    <FormDialog<TFormTicker>
      className="max-w-4xl"
      title="Form Ticker"
      schema={createTickerSchema}
      defaultValues={{
        ...props,
      }}
      onSubmit={handleSubmit}
      open={dialog}
      setOpen={() => setDialog(!dialog)}
      isPending={creating || updating}
      formType={props?.id ? "EDIT" : "CREATE"}
    >
      {(form) => (
        <>
          <div className="grid grid-cols-2 gap-3">
            <FormInput
              label="Name"
              name="name"
              placeholder="name"
              control={form.control}
            />
            <FormInput
              label="X Url"
              name="x"
              placeholder="x url"
              control={form.control}
            />
            <FormInput
              label="Telegram Url"
              name="telegram"
              placeholder="telegram url"
              control={form.control}
            />
            <FormInput
              label="Web Url"
              name="web"
              placeholder="web url"
              control={form.control}
            />
            <FormInput
              label="Discord Url"
              name="dc"
              placeholder="discord"
              control={form.control}
            />
            <FormInput
              label="Api Price Url"
              name="api_price"
              placeholder="api_price url"
              control={form.control}
            />
            <FormInput
              label="Api Balance Url"
              name="api_balance"
              placeholder="api balance url"
              control={form.control}
            />
            <FormInput
              label="Link Wallet"
              name="link_wallet"
              placeholder="link_wallet"
              control={form.control}
            />
          </div>
        </>
      )}
    </FormDialog>
  )
}

