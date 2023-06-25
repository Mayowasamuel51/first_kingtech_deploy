/// this api the admin will send messages to the dashboard ..........................
connect();
import mongoose from 'mongoose'
import { NextResponse } from 'next/server';
import Message from '@/app/Models/Message';


async function connect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('databae connected............'))
        .catch((err) => console.log(err))
}


export async function GET() {
    await connect();
    const messages = await Message.find()  // try and get the lastest one for the contact ........
    if (!messages) {
        return NextResponse.json({ data: 'error.....', status: 404 })
    }
    return NextResponse.json({ data: messages, status: 200 })

}


export async function POST(req) {
    await connect()
    const { message } = await req.json()
    const create_message = await Message.create({
        message:message
    });
    console.log(create_message)
    return NextResponse.json(create_message)
}

