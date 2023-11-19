import User from "@/models/user";
import connect from "@/db/db.config";
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"
import { NextRequest, NextResponse } from "next/server";

connect()
export async function POST(request:NextRequest)
{
    try{
        const requestBody = await request.json()
        const {email,password} = requestBody
        const user = await User.findOne({email})
        if(user){
            const verifacation =  bcryptjs.compare(password,user.password)
            if(verifacation)
            {
                const tokenData = {
                    id:user.id,
                    email:user.email
                }
                const token = jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1h"})
                const response = NextResponse.json({message:"logged with success",status:201})
                response.cookies.set("auth_token",token,{httpOnly:true})
                return response

           
            }
            return NextResponse.json({message:"incorrect Password",status:400})
            
        }
        return NextResponse.json({message:"No Account with this email",status:400})

    }catch(error:any)
    {
        return NextResponse.json({ message:error.message, status: 500 })
        
    }
}