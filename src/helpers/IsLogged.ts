import { NextRequest } from "next/server";
import jwt from "jsonwebtoken"
import User from "@/models/user";
export async function isLog(token: string)
{
    const data = jwt.verify(token,process.env.TOKEN_SECRET!);
    const user = await User.findOne({_id:data.id||0})
    if(!user){
        return false;
    }
    return true;

}