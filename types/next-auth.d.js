const NextAuth = require("next-auth");

module.exports = NextAuth({
  // Other configuration options...

  callbacks: {
    async session(session, user) {
      // Modify the session object to include user-specific data
      session.user = {
        id: user.id,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        gender: user.gender,
        image: user.image,
        token: user.token,
        refreshToken:user.refreshToken

      };
      return session;
    },
  },
});