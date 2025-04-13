import CommonForm from '@/components/common/CommonForm'
import { registerFormControl } from '@/config'
import { registerUser } from '@/store/Auth-Slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

const initialStates = {
  username: '',
  email: '',
  password: '',  
}

export default function Register() {
  const [formData, setFormData] = useState(initialStates) 
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = (event) => {
    event.preventDefault();
    // dispatch(registerUser(formData)).then((data) => {
    //   if (data?.payload?.success) {
    //     navigate('/auth/login')
    //   }
    // })
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Create New Account
        </h1>
        <p className="mt-2">Already Have an Account ?
          <Link className="font-medium ml-2 text-primary hover:underline" to='/auth/login'> Login </Link>
        </p>
      </div>
      <CommonForm
      formControl={registerFormControl}
      buttonText={'Sign up'}
      formData={formData}
      setFormData={setFormData}
      onSubmit={onSubmit} 
      />
    </div>
  )
}


