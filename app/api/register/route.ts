import { NextRequest, NextResponse } from "next/server";
import prisma from "../../libs/prismadb"
import bcrypt from "bcrypt"

export async function POST(request: NextRequest ) {
        const body = await request.json();

        const {email, name, password} = body;

        const hashedPassword = await bcrypt.hash(password,12);

        try {
            const user = await prisma.user.create({
                data: {
                 email: email,
                 name: name,
                 hashedPassword: hashedPassword
                },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    createdAt: true
                }
             })

             return NextResponse.json(user,{status:201})
        } catch (error) {
            console.log("Error creating user:", error);
            return NextResponse.json(
               { error: "Something went wrong" },
               {status: 500}
            )
        }
}