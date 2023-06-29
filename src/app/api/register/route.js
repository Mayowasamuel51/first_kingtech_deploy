/// this api the admin will send messages to the dashboard ..........................
import { NextResponse } from 'next/server';
import prisma from '../../libs/prismadb.jsx'
import bcrypt from 'bcrypt'

export async function POST(req) {
    const { username, email, hashPassword, price, AskQuestion, comments } = await req.json();
    if (!username || !email || !hashPassword) {
        return NextResponse.json({ data: 'missing input fields', status: 404 })
    }
    const register_exist = await prisma.Register.findUnique({
        where: {
            email
        }
    });
    if (register_exist) {
        return NextResponse.json({ data: 'This email has been registered' })
    }
    const hashPasswor = await bcrypt.hash(hashPassword, 10);
    const register = await prisma.Register.create({
        data: {
            username: username,
            email: email,
            price: price,
            hashedPassword: hashPasswor,
            AskQuestion: AskQuestion,
            comments: comments
        }
    })
    console.log(username, email, hashPassword)
    return NextResponse.json({ data: 'data created', status: 200, data: register })
}























// import bcrypt from 'bcrypt'
// async function connect() {
//     mongoose.connect(process.env.DATABASE_URL, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//     }).then(() => console.log('databae connected............'))
//         .catch((err) => console.log(err))
// }
// export async function GET() {
//     await connect();
//     const register = await Register.find()  // try and get the lastest one for the contact ........
//     if (!register) {
//         return NextResponse.json({ data: 'error.....', status: 404 })
//     }
//     return NextResponse.json({ data: register, status: 200 })

// }
// connect();