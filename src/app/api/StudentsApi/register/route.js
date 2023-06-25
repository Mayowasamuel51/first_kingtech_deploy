connect();
import mongoose from 'mongoose'
import { NextResponse } from 'next/server';
import Register from '@/app/Models/RegisterStudent';
import bcrypt from 'bcrypt'
async function connect() {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('databae connected............'))
        .catch((err) => console.log(err))
}
export async function GET() {
    await connect();
    const register = await Register.find()  // try and get the lastest one for the contact ........
    if (!register) {
        return NextResponse.json({ data: 'error.....', status: 404 })
    }
    return NextResponse.json({ data: register, status: 200 })

}
connect();
export async function POST(req) {
    await connect()
    const { username, email, password , price} = await req.json();
    if (!username || !email || !password) {
        return NextResponse.json({ data: 'missing fields', status: 400 })
    }
    const register_exist = await Register.findOne({ email });
    if (register_exist) {
        return NextResponse.json({ data: 'user existed' })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const register = await Register.create({
        username: username,
        email: email,
        price:price,
        password: hashPassword
    })
    console.log(username, email, hashPassword)
    return NextResponse.json({ data: 'data created', status: 200, data: register })
}
connect();
