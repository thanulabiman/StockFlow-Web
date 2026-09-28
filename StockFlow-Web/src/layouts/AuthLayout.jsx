import React from 'react'

function AuthLayout({children}) {
  return (
    <div className='bg-muted/50 min-h-screen flex items-center justify-center'>
      {children}
    </div>
  )
}

export default AuthLayout
