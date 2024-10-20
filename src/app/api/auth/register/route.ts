import { NextRequest, NextResponse } from "next/server";
import vine, { errors } from "@vinejs/vine";
import { registerSchema } from "@/app/validate/userSchema";
import ErrorReporter from "@/app/validate/errorReporter";
import bcrypt from "bcryptjs";
import User from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    var body = await req.json();

    if (!body) {
      return NextResponse.json(
        { msg: "Please enter all fields", status: 400 },
        { status: 200 }
      );
    } 

      // validating data from  register schema, vine js

      const validator = vine.compile(registerSchema);
      validator.errorReporter = () => new ErrorReporter();
      const output = await validator.validate(body);

      // checking if user already exists
      const userExists = await User.findOne({ email: output.email });
      if (userExists) {
        return NextResponse.json(
          { msg: "User already exists", status: 400 },
          { status: 200 }
        );
      }

      // hashing password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(output.password, salt);
      await User.create({ ...body, password: hashedPassword });
      
  } catch (error) {
    if (error instanceof errors.E_VALIDATION_ERROR) {
      return NextResponse.json(
        { msg: error.messages, status: 400 },
        { status: 200 }
      );
    }
    console.log("PostRegiterData error -------->", error);
  }
  return NextResponse.json(
    { msg: "User created successfully. Please Login ", status: 200 },
    { status: 200 }
  );
}
