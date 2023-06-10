import { NextRequest, NextResponse } from "next/server"
import { getUser } from "./lib/getUser";
import { cookies } from "next/dist/client/components/headers";

export async function middleware(request: NextRequest) {

// middleware for /cfa
  const sessionToken = request.cookies.get('session-token')
  if (sessionToken == undefined) {
    return NextResponse.redirect(new URL('/', request.url))
  }
  const userRequest = await getUser(sessionToken.value)
  if (userRequest.status != 200) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}


export const config = {
	matcher: "/cfa",
}

