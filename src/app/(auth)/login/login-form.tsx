'use client'
import { FormInput } from '@/components/forms/form-input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import { useAuth } from '@/modules/auth/hooks/useAuth'
import { loginSchema } from '@/modules/auth/schema'
import { TFormLogin } from '@/types/auth'
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import { Suspense, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function LoginForm() {
  const { login, loading } = useAuth()
  const [showPassword, setShowPassword] = useState(false)

  const form = useForm<TFormLogin>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password:""
    }
  })

  function onSubmit(values: TFormLogin) {
    login(values)
  }
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <div className="p-6 md:p-8">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center text-center md:text-start md:items-start">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-sm text-balance text-muted-foreground">
                      Login to your Spore Admin account
                    </p>
                  </div>
                  <FormInput
                    control={form.control}
                    name='email'
                    label='Email'
                    placeholder='user@email.com'
                    type='email'
                  />
                  <div>
                    <FormInput
                      control={form.control}
                      name='password'
                      label='Password'
                      placeholder='password'
                      type={showPassword ? "text" : "password"}
                    />
                    <div className="flex justify-end mt-1">
                      <button onClick={() => setShowPassword(!showPassword)} type='button' className='text-xs font-bold text-end ml-auto'>
                        {showPassword ? "Hide" : "Show"} Password
                      </button>
                    </div>
                  </div>
                  <Button disabled={loading} type="submit" className="w-full">
                    {loading && <Loader2 className="animate-spin" />}
                    Login
                  </Button>
                </div>
              </div>
              <div className="relative hidden bg-muted md:block">
                <Image
                  fill
                  src="/images/spore.png"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </form>
      </Form>
    </Suspense>
  )
}
