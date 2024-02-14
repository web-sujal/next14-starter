import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectDb } from "./utils";
import { User } from "./models";
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider == "github") {
        connectDb();

        try {
          const user = await User.findOne({ email: profile.email });

          if (!user) {
            await User.create({
              username: profile.login,
              email: profile.email,
              img: profile.avatar_url,
            });
          }
        } catch (err) {
          console.error(err);
          return false;
        }
      }
      return true;
    },
  },
});
