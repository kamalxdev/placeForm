import { NextRequest, NextResponse } from "next/server";
import RESPONSES from "@/models/responses";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (body.user) {
      var response = await RESPONSES.create({
        responded_user: body.user,
        response: body.response,
        quiz: body.formid,
        for: "quiz",
        name: body.name,
      });
    } else {
      var response = await RESPONSES.create({
        response: body.response,
        quiz: body.formid,
        for: "quiz",
        name: body.name,
      });
    }

    if (!response) {
      return NextResponse.json(
        { msg: "Quiz not found", status: 400 },
        { status: 200 }
      );
    }
    return NextResponse.json(
      { msg: "Quiz Submitted succesfully", status: 200 },
      { status: 200 }
    );
  } catch (error) {
    console.log("PostFormFieldData error -------->", error);
    return NextResponse.json({ msg: error, status: 400 }, { status: 200 });
  }
}
