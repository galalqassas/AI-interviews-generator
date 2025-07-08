import React, { ReactNode } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const RootLayuot = ({children}: {children: ReactNode}) => {
  return (
    <div className='root-layout'>
      <nav>
        <Link href='/' className="flex items-center gap-2 text-lg font-bold">
          <Image src="/logo.svg" alt="logo" height={32} width={38}/>
          <h2 className='text-primary-100'>Interview Prep</h2>
        </Link>
      </nav>
      {children}
    </div>
  )
}

export default RootLayuot