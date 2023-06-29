import NextAuth from "next-auth/next";
import prisma from '../../../libs/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ,
        }),

        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {
                // check to see if email and password is there
                if(!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }
                // check to see if user exists
                const user = await prisma.Register.findUnique({
                    where: {
                        email: credentials.email
                    }
                });
                // if no user was found 
                if (!user || !user?.hashedPassword) {
                    throw new Error('Email not found')
                }
                // check to see if password matches
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                // if password does not match
                if (!passwordMatch) {
                    throw new Error('Incorrect password or Email ')
                }
                return user;
            },
        }),  
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: 'https://first-kingtech-deploy.vercel.app/signin',
        signOut: 'https://first-kingtech-deploy.vercel.app',
        // error: '/auth/error', // Error code passed in query string as ?error=
        // verifyRequest: '/auth/verify-request', // (used for check email message)
        // newUser: '/auth/new-user' // New users will b  
    },
    debug: process.env.NODE_ENV === "development",
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}