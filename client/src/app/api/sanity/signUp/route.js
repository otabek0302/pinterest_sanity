import { signUpHandler } from "next-auth-sanity";
import { client } from "@/utils/sanity";

export const POST = signUpHandler(client);
