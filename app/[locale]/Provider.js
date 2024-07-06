"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react'
import LanguageChanger from '@/components/LanguageChanger'

const Provider = ({children}) => {
  return (
    <SessionProvider>
<LanguageChanger/>
        {children}
    </SessionProvider>
  )
}

export default Provider