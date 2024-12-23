import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser'
import { Button } from './ui/button'

const Header = async () => {
  const user = await checkUser()

  return (
    <nav className='flex h-[60px] w-full bg-slate-100'>
      <div className='mx-auto flex w-full max-w-[900px] items-center justify-between'>
        <div>
          <h2 className='text-2xl font-bold text-green-600'>Expense Tracker</h2>
        </div>

        <div>
          <SignedOut>
            <Button asChild>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default Header
