import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import db from "../../../../libs/db";
import { isPasswordCorrect } from "../../../../util/encrypt";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials): Promise<User | null> {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const userFound = await db.users.findFirst({
          where: {
            email,
          },
        });
        if (!userFound) {
          throw new Error("Este correo no se encuentra registrado");
        }
        const isPasswordCorrectResult = await isPasswordCorrect(
          userFound.password,
          userFound.salt,
          password
        );
        if (!isPasswordCorrectResult) {
          throw new Error("Contraseña incorrecta");
        }
        return {
          id: userFound.id.toString(),
          email: userFound.email,
          name: userFound.firstName + " " + userFound.lastName,
        };
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
