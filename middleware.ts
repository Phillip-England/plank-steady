import { NextRequest, NextResponse } from "next/server"
import { getUser } from "./lib/getUser";

export async function middleware(request: NextRequest) {

  const sessionToken = request.cookies.get('session-token')

  if (sessionToken == undefined) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const userResponse = await getUser(sessionToken.value)

  if (userResponse.status != 200) {
    return NextResponse.redirect(new URL('/', request.url))
  }

}


export const config = {
	matcher: "/location",
}

