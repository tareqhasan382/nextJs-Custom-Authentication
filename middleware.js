export { default } from "next-auth/middleware";

export const config = { matcher: ["/profile"] };
// export { auth as middleware } from "./app/api/auth/[...nextauth]";
