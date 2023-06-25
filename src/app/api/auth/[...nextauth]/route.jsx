import NextAuth from "next-auth/next";
import prisma from '../../../libs/prismadb'
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import bcrypt from 'bcrypt'
import Listing from "@/app/Models/Users";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                username: { label: "Username", type: "text", placeholder: "John Smith" },
            },
            async authorize(credentials) {
                if (!credentials.email || !credentials.password) {
                    throw new Error('Please enter an email and password')
                }
                const user = await Listing.findOne({ email: credentials.email }).select('password')
                // if (!user) {
                //     throw new Error('invalid users')
                // }
                // const passwordMatch = await bcrypt.compare(credentials.password, user.password)
                if (await bcrypt.compare(credentials.password, user.password) && user) {
                    // throw new Error('Incorrect password')
                    return user;
                } else {
                    throw new Error('Incorrect password  and invaid  details')
                }
                // return user;
            },
        }),
    ],
    secret: process.env.SECRET,
    session: {
        strategy: "jwt",
    },
    debug: process.env.NODE_ENV === "development",
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }