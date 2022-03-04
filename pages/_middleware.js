import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
    //? token will exist if user is logged in 
    const token = await getToken({ req, secret: process.env.JWT_SECRET });

    //? allow the request if the followinf is true`
}