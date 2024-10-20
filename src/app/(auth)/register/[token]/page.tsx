

import { verifyJWTtoken } from "@/controllers/registerJWTtoken";

import User from "@/models/user";
import { redirect } from 'next/navigation'


type iUser = {
  user:{
    name: string;
    email: string;
    loginWith: string;
  }
};

export default async function RegisterWithToken({ params }: { params: { token: string } }) {
  const token= params.token;

  if (token) {
    const user= verifyJWTtoken(token) as iUser;
    if(user){
      const userData = {
        name: user.user.name,
        email: user.user.email,
        loginWith: user.user.loginWith,
      }
      try {
        var registeredUser =await User.create(userData);
      } catch (error) {
        console.log("RegisterWithToken error------>", error);
      }
      if(registeredUser){
        return redirect(`/login?msg=Registered Successfully. Please Login with ${user.user.loginWith}`);
      }
    }
  }
  return redirect(`/register`)
}
