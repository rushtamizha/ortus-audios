import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Check against your .env variables
        if (
          credentials.username === process.env.ADMIN_USERNAME &&
          credentials.password === process.env.ADMIN_PASSWORD
        ) {
          return { id: "1", name: "Admin", email: "admin@ortusaudios.com" };
        }
        return null; // Login failed
      }
    })
  ],
  pages: {
    signIn: "/admin/login", // Custom login page
  },
  secret: process.env.NEXTAUTH_SECRET,
};