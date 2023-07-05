import prisma from '../../../libs/prismadb.jsx'
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.contactus.findMany({
    orderBy: {id: 'desc'} 
    }) // this code will get the lastest 
    return NextResponse.json({ data: data, status: 200 })
}
export async function POST(req) {
    const { name, phone, email, message } = await req.json();
    if (!name || !phone) {
        return NextResponse.json({ data: 'missing fields', status: 404 })
    }
    console.log(name, phone, message, email)
    const newnumber = parseInt(phone)
    const contact = await prisma.contactus.create({
        data: {
            name,
            phone: newnumber,
            email,
            message
        }
    })
    return NextResponse.json({ data: 'data created', status: 200, res: contact })

}