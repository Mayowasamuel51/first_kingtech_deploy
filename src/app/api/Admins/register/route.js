import prisma from '../../../libs/prismadb.jsx'
import { NextResponse } from 'next/server';

export async function GET() {
    const data = await prisma.User.findMany({
    orderBy: {id: 'desc'} 
    }) // this code will get the lastest 
    return NextResponse.json({ data: data, status: 200 })
}
