import { Button } from '@/components/ui/button'
import {
  RegisterLink,
  LoginLink,
  LogoutLink
} from '@kinde-oss/kinde-auth-nextjs/components'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import Link from 'next/link'

export default async function Home() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  return (
    <div className='flex items-center justify-center'>
      <main className='mt-24 flex flex-col space-y-12'>
        <div className=''>
          <h1 className='text-2xl font-bold tracking-tight sm:text-3xl md:text-5xl'>
            Welcolme to the Home Page
          </h1>
          <p className='text-center text-xl text-blue-500'>
            logged in: {user.given_name}
          </p>
        </div>
        <div className='flex h-96 w-full items-center justify-center gap-8'>
          {user ? (
            <div className='mt-10'>
              <LogoutLink className=''>
                <Button variant='destructive'>Logout</Button>
              </LogoutLink>
              <Button asChild className='ml-5'>
                <Link href='/dashboard'>Dashboard</Link>
              </Button>
            </div>
          ) : (
            <div className='mt-10'>
              <LoginLink postLoginRedirectURL='/guestbook'>
                <Button className='mr-5'>Sign in</Button>
              </LoginLink>

              <RegisterLink>
                <Button variant='outline' className='bg-slate-200'>
                  Sign up
                </Button>
              </RegisterLink>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
