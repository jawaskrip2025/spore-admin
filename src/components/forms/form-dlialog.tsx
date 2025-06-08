import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Form } from "@/components/ui/form"
import { cn } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderIcon, Pencil } from "lucide-react"
import { ReactNode } from "react"
import { DefaultValues, FieldValues, useForm, UseFormReturn } from "react-hook-form"
import { ZodType } from "zod"

interface FormDialogProps<T extends FieldValues> {
  title: string
  triggerLabel?: string
  children: (form: UseFormReturn<T>) => ReactNode
  onSubmit: (values: T) => void
  
  schema: ZodType<T>
  defaultValues: DefaultValues<T>
  submitLabel?: string
  cancelLabel?: string
  open: boolean
  setOpen?: () => void
  isPending?: boolean
  formType: "EDIT" | "CREATE",
  className?:string
}

export function FormDialog<T extends FieldValues>({
  title,
  triggerLabel = "Add New",
  children,
  onSubmit,
  schema,
  defaultValues,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  open,
  setOpen,
  isPending,
  formType = "CREATE",
  className,
}: FormDialogProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues,
  })

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {formType === "CREATE" ? (
          <Button>{triggerLabel}</Button>
        ) : (
            <Button size={"icon-sm"}>
              <Pencil />
            </Button>
        )}
      </DialogTrigger>
      <DialogContent className={cn('max-w-md',className)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {children(form)}
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline" type="button">
                  {cancelLabel}
                </Button>
              </DialogClose>
              <Button disabled={isPending} type="submit">
                {isPending  && <LoaderIcon className="animate-spin" />}
                {submitLabel}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
