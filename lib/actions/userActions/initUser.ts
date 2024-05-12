'use server';
import prisma from '@/prisma/prismaClient';
import { currentUser } from '@clerk/nextjs/server';
import { User } from '@prisma/client';

export const initUser = async (): Promise<User | null> => {
  const user = await currentUser();

  /* check if user is logged*/
  if (!user) return null;
  /* ---------------------------------------------------- */

  /* check if user exists in db */
  const existingUser = await prisma.user.findFirst({
    where: {
      id: user.id,
    },
  });
  if (existingUser) return existingUser;
  /* ---------------------------------------------------- */

  /* create new user */
  const email = user.emailAddresses[0].emailAddress;
  const newUser = {
    id: user.id,
    username: user.username ? user.username : user.fullName ? user.fullName : email,
    email,
    imageURL: user.imageUrl,
    createdAt: new Date(),
    updatedAt: new Date(),
    isWorking: false,
  };

  const createdUser = await prisma.user.create({
    data: newUser,
  });
  /* ---------------------------------------------------- */

  return createdUser;
};
