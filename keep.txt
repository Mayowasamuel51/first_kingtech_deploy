import mongoose from 'mongoose'
// import Contacts from '@/app/Models/ContactUser';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/app/mongodb';

async function connect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log('databae connected............')).catch((err)=>console.log(err))
}
// connect();
export async function GET() {
    // await connect();
    const  db  = await connectToDatabase();
    const data = await db.collection('contactus').find().toArray()
    console.log(data)
    return NextResponse.json({ data: data, status:200})

}
// connect();

export async function POST(req) {
    // await connect()
    const db = await connectToDatabase();
    const { name, phone, email, message } = await req.json();
    if (!name || !phone) {
        return NextResponse.json({data:'missing fields', status:404})
    }
        const contact = await  db.collection('contactus').insertOne({
            name,
            phone,
            email,
            message
        })
        return NextResponse.json({data:'data created', status:200, res:contact})

}