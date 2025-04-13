import CommonForm from '@/components/common/CommonForm'
import { loginFormControl } from '@/config'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const initialStates = {
  email: '',
  password: '',  
}

export default function Login() {
  const [formData, setFormData] = useState(initialStates) 

  const onSubmit = () => {
    
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-xl font-bold tracking-tight text-foreground">
          Log in to Your Account
        </h1>
        <p className="mt-2">Don't Have an Account ?
          <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/register'> Sign up </Link>
        </p>
      </div>
      <CommonForm
      formControl={loginFormControl}
      buttonText={'Log in'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit} />
    </div>
  )
}


// import React from 'react'

// export default function Login() {
//   return (
//     <div>
//       <h1>login page</h1>
//     </div>
//   )
// }
