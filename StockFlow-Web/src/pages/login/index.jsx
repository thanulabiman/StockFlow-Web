import React, { use } from 'react'

import AuthLayout from '../../layouts/AuthLayout'

import { useState } from 'react'

import { Home } from 'lucide-react'

import { useNavigate } from 'react-router-dom'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleChange(event) {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));

  }

  function handleSubmit(event) {
    alert(JSON.stringify(form))
  }

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className='text-center h-16'>
          <Home onClick={() => navigate("/")} className='hover:cursor-pointer mt-auto size-5' />
          <CardTitle className='text-2xl font-semibold'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className='mt-6'>
          <form onSubmit={(handleSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  onChange={(handleChange)}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" name="password" onChange={(handleChange)} required />
              </div>
            </div>
            <Button type="submit" className="w-full bg-[#0735de] hover:bg-[#032aa1] mt-6">
              Login
            </Button>
          </form>
        </CardContent>

      </Card>
    </AuthLayout>
  )
}

export default Login
