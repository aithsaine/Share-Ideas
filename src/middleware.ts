import next from "next";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request:NextRequest)
{
    const token = request.cookies.get("auth_token")|| "";
    const path = request.nextUrl.pathname
   const GestRoutes = path=="/login"|| path=="/register"
    if(token && GestRoutes){
        return NextResponse.redirect(new URL("/",request.nextUrl))

    }

}

export const config = [
    "/",
    "/login",
    "register",
]