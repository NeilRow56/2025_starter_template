import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function DashboardPage() {
  return (
    <div className='flex items-center justify-center'>
      <main className='mt-24 flex flex-col space-y-12'>
        <Button asChild>
          <Link href='/'>Home</Link>
        </Button>
      </main>
    </div>
  )
}
