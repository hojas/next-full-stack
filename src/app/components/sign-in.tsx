import { NavigationMenuLink, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { auth, signIn } from '@/lib/auth'

export async function SignIn() {
  const session = await auth()

  async function login() {
    'use server'

    await signIn()
  }

  if (!session?.user) {
    return (
      <NavigationMenuLink className={`${navigationMenuTriggerStyle()} cursor-pointer`} onClick={login}>
        Sign In
      </NavigationMenuLink>
    )
  }

  return (
    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
      {session.user.email}
    </NavigationMenuLink>
  )
}
