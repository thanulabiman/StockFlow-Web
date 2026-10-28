import { SignIn } from "@clerk/react";
import AuthLayout from "@/layouts/AuthLayout";
import AuthBrand from "../com/AuthBrand";

import React from 'react'

function Login() {
  return (
    <AuthLayout>
      <div className="w-full max-w-md px-4 py-6">
        <AuthBrand />
        <div className="flex justify-center">
          <SignIn routing="path" path="/login" />
        </div>
      </div>
      
    </AuthLayout>
  )
}

export default Login
