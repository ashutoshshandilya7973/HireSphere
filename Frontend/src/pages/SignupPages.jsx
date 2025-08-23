import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton, useSignUp, useUser } from '@clerk/clerk-react'

const SignupPages = () => {
  const {user}=useUser();
  console.log(user)
  return (
    <header>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}

export default SignupPages
