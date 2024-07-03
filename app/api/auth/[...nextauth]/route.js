import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        try {
          const res = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
              expiresInMins: 30, // optional, defaults to 60
            })
          });

          if (res.ok) {
            const user = await res.json();
            return user;
          } else {
            console.error("Fetch request failed with status:", res.status);
            return null;
          }
        } catch (error) {
          console.error("An error occurred:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
    error: '/auth/error'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id,
        username: token.username,
        email: token.email,
        firstName: token.firstName,
        lastName: token.lastName,
        gender: token.gender,
        image: token.image,
        token: token.token,
        refreshToken: token.refreshToken
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST };