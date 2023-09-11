import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    LinkedInProvider({
      clientId: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
      
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),

    // ...add more providers here
  ],

  callbacks: {
    async jwt({ user ,token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.id = user?.id
        token.accessToken = account
      }
      return token
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.id
      session.accessToken = token.accessToken

      return session
    }
  }
};
export default NextAuth(authOptions);
