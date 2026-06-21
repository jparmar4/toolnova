import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            allowDangerousEmailAccountLinking: true,
        }),
    ],
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            // Log for debugging — will show in Hostinger runtime logs
            console.log("NextAuth signIn callback:", {
                userId: user?.id,
                email: user?.email,
                provider: account?.provider,
            });
            return true;
        },
        async session({ session, token }) {
            if (session.user && token.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/login',
    },
    debug: process.env.NODE_ENV === "development",
};
