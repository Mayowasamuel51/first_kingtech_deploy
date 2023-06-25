import mongoose from 'mongoose'
import Contacts from '@/app/Models/ContactUser';
import { NextResponse } from 'next/server';


async function connect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>console.log('databae connected............')).catch((err)=>console.log(err))
}
connect();
export async function GET() {
    await connect();
    const all_contact = await Contacts.find()  // try and get the lastest one for the contact ........
    // if (!all_contact) {
    //     return NextResponse.json({ data:'error.....', status:404})
    // }
    return NextResponse.json({ data: all_contact, status:200})

}
connect();

export async function POST(req) {
    await connect()
    const { name, phone, email, message } = await req.json();
    if (!name || !phone) {
        return NextResponse.json({data:'missing fields', status:404})
    }
        const contact = await Contacts.create({
            name,
            phone,
            email,
            message
        })
        return NextResponse.json({data:'data created', status:200, res:contact})

}