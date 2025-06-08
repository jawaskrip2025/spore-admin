import { FormDialog } from "@/components/forms/form-dlialog"
import { FormInput } from "@/components/forms/form-input"
import { FormSelect } from "@/components/forms/form-select"
import {
  useCreateBalance,
  useUpdateBalance
} from "@/modules/balance/hooks/useBalalnce"
import { createBalanceSchema } from "@/modules/balance/schema"
import { useChainList } from "@/modules/chain/hooks/useChain"
import { useTickerList } from "@/modules/ticker/hooks/useChain"
import { TFormBalance } from "@/types/balance"
import { useState } from "react"

export default function FormSubmit(props?: TFormBalance) {
  const { mutate: createData, isPending: creating } = useCreateBalance();
  const { mutate: updateData, isPending: updating } = useUpdateBalance();
  const { data: chains } = useChainList()
  const { data: tickers } = useTickerList()
  const [dialog, setDialog] = useState<boolean>(false)

  const handleSubmit = (values: TFormBalance) => {
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
    <FormDialog<TFormBalance>
      className="max-w-4xl"
      title="Form Balance"
      schema={createBalanceSchema}
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
            <FormSelect
              name="chain_id"
              label="Select Chain"
              placeholder="Choose a chain"
              control={form.control}
              options={chains || []}
              groupLabel="Chains"
            />
            <FormSelect
              name="ticker_id"
              label="Select ticker"
              placeholder="Choose a ticker"
              control={form.control}
              options={tickers || []}
              groupLabel="Ticker"
            />
            <FormInput
              label="Balance"
              name="balance"
              placeholder="Balance"
              control={form.control}
            />
            <FormInput
              label="Price"
              name="price"
              placeholder="price"
              control={form.control}
            />
          </div>
          <FormInput
            label="Wallet"
            name="wallet"
            placeholder="wallet"
            control={form.control}
          />
        </>
      )}
    </FormDialog>
  )
}

