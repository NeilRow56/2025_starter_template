import { currentUser } from '@clerk/nextjs/server'
import db from './db'

export const checkUser = async () => {
  const user = await currentUser()

  // Check for current logged in clerk user
  if (!user) {
    return null
  }

  // Check if the user is already in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerkUserId: user.id
    }
  })

  // If user is in database, return user
  if (loggedInUser) {
    return loggedInUser
  }

  // If not in database, create new user
  const newUser = await db.user.create({
    data: {
      clerkUserId: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
      avatarUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress
    }
  })

  return newUser
}
