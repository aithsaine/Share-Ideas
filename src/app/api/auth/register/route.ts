import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server"
import connect from '@/db/db.config';
connect()
export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json();
        const { first_name, last_name, email, password } = reqBody;
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const user =await User.findOne({email});
        if (user) {
            return NextResponse.json({ message: "email already userd with other account", status: 400 })
        }

            const newUser = new User({ first_name, last_name, email, password: hashedPassword })
            const save = await newUser.save();
            if (save)
            return NextResponse.json({ message: "user created successfully", status: 201 })
        

    } catch (error: any) {
        return NextResponse.json({ error, status: 500 })
    }


}