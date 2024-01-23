export { default } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'
import FORM from "./models/form";
// export async function middleware(request: NextRequest,event:NextFetchEvent) {
//     const path= request.nextUrl.pathname;
//     if(path.startsWith("/dashboard/form/") ){
//         event.waitUntil(
//             FORM.findById(path.split("/")[3]).then((form)=>{
//                 if(form.state ==="Pending"){
//                     console.log("form found",form);
                    
//                     return NextResponse.next()
//                 }else{
//                     return NextResponse.redirect("/dashboard")
//                 }
//             }).catch((err)=>{
//                 return NextResponse.redirect("/dashboard")
//             })
//         )
//     }
// }
export const config = { matcher: ["/dashboard/:path*",'/v5/:path*'] }

