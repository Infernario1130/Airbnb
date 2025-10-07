import { NextRequest,NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: NextRequest) {
    
    const user = await getCurrentUser();
    if (!user) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
    
    const body = await req.json();

    const {category,location,guestCount,roomCount,bathroomCount,imageSrc,price,title,description} = body

    try {
        const listings = await prisma.listing.create({
            data: {
                userId: user.id,category,locationValue:location.value,guestCount,roomCount,bathroomCount,price: parseInt(price, 10),imageSrc,title,description
            }
        })
        return NextResponse.json(listings,{status:201})
    } catch (error) {
        console.log("Error creating user:", error);
            return NextResponse.json(
               { error: "Something went wrong" },
               {status: 500})
    }
}