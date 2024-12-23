import { Button } from '@/components/ui/button'
import { SignedOut } from '@clerk/nextjs'

import Link from 'next/link'

export default async function Home() {
  return (
    <div className='flex items-center justify-center'>
      <main className='mt-24 flex flex-col space-y-12'>
        <div className=''>
          <h1 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl'>
            Welcolme to the Home Page
          </h1>
          <p className='text-center text-xl text-blue-500'>
            {/* logged in: {user.given_name} */}
          </p>
        </div>
        <div className='flex h-96 w-full items-center justify-center gap-8'>
          <div className='mt-10 flex items-center gap-8'>
            <SignedOut></SignedOut>
            <Button className='bg-blue-700'>
              <Link href='/dashboard'>Dashboard</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
