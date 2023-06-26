/// this api the admin will send messages to the dashboard ..........................
import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb.jsx';




export async function GET() {
    const messages = await prisma.broadcast.findMany()// try and get the lastest one for the contact ........
    // if (!messages) {
    //     return NextResponse.json({ data: 'error.....', status: 404 })
    // }
    return NextResponse.json({ data: messages, status: 200 })

}


export async function POST(req) {
    const { message } = await req.json()
    
    console.log(message)
    const admin_messages = await prisma.broadcast.create({
        data: {
            message
        }
    })
    return NextResponse.json(admin_messages)
}

