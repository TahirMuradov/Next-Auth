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
    //karlFashionApi
        try {
          process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
          const res = await fetch('https://localhost:7036/api/Auth/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              'EmailOrUsername': credentials.username,
              'Password': credentials.password,
             
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
      console.log(token)
      // const role=
    // await  fetch('https://dummyjson.com/auth/me', {
    //     method: 'GET',
    //     headers: {
    //       'Authorization': `Bearer ${token.token}`, 
    //     }, 
    //   })
    //   .then(res => res.json());
      session.user.data = {
        // id: token.id,
        // username: token.username,
        // email: token.email,
        // firstName: token.firstName,
        // lastName: token.lastName,
        // gender: token.gender,
        // image: token.image,
        // role:token.role,
        token: token.data.accessToken,
        refreshToken: token.data.refreshToken,
        
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});


export { handler as GET, handler as POST };