import { SignIn } from '@/app/components/SignIn'
import { UserAvatar } from '@/app/components/UserAvatar'
import { auth } from '@/lib/auth'

export default async function Home() {
  const session = await auth()

  return (
    <div>
      {
        session?.user
          ? <UserAvatar />
          : <SignIn />
      }
    </div>
  )
}
