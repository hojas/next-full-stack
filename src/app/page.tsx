import { SignIn } from '@/app/components/SignIn'
import { UserAvatar } from '@/app/components/UserAvatar'
import { Button } from '@/components/ui/button'
import { auth } from '@/lib/auth'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      <Button>Home</Button>
      {
        session?.user
          ? <UserAvatar />
          : <SignIn />
      }
    </div>
  )
}
