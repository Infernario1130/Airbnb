import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "../libs/prismadb";
import { SafeUser } from "../types";

export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
   try {
    const session =  await getSession()
        
        if (!session?.user?.email) {
            return null
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string
            }
        })

        if (!currentUser) {
            return null
        }

        return {
            id: currentUser.id.toString(),
            name: currentUser.name,
            email: currentUser.email,
            image: currentUser.image,
            favoriteIds: currentUser.favoriteIds,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified: currentUser.emailVerified ? currentUser.emailVerified.toISOString() : null
        } as SafeUser;
        

   } catch(error) {
                return null
             }
}