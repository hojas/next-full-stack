import { auth } from '@/lib/auth'

export async function UserAvatar() {
  const session = await auth()

  if (!session?.user)
    return null

  return (
    <div>
      {session.user.email}
    </div>
  )
}
