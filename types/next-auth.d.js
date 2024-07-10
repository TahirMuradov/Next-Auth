const NextAuth = require("next-auth");

module.exports = NextAuth({
  // Other configuration options...

  callbacks: {
    async session(session, user) {
      // Modify the session object to include user-specific data
      session.user = {
        id: token.id,
        username: token.username,
        email: token.email,
        firstName: token.firstName,
        lastName: token.lastName,
        gender: token.gender,
        image: token.image,
        role:token.role,
        token: token.data.accessToken,
        refreshToken: token.data.refreshToken
      };
      return session;
    },
  },
}); 