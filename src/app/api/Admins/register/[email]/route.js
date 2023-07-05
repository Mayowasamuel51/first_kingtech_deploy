import { NextResponse } from "next/server"
import prisma  from '../../../../libs/prismadb.jsx'


export async function PUT(req) {
    const { phone ,email   } = await req.json()
    // check if email exist
    // if it does update or add phone number done 
    const userEmail = await prisma.User.findUnique({
        where: {
            email:email
        }
    })
    if (!userEmail) {
        return NextResponse.json({ data: 'email not found', status:404})
    }
    const update = await prisma.User.update({
        where: {
            email:email
        },
        data: {
            phone
        }
    })
    return NextResponse.json({ data: 'added',update, status:200 })
}