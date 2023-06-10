import { FormCreateLocation } from "@/components/forms/FormCreateLocation";
import { Location } from "@/components/resources/Location";
import { NewUserModel } from "@/lib/User/UserModel";
import { getUser } from "@/lib/getUser";
import { cookies, } from "next/dist/client/components/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default async function Home() {

  // loading in our user
  const sessionToken = cookies().get('session-token') as RequestCookie
  const userResponse = await getUser(sessionToken.value)
  const userModel = await NewUserModel(userResponse)

  // loading in our user locations
  const req = await fetch("http://localhost:8080/locations", {
    
  })

  return (
    <main className="">
      <FormCreateLocation sessionToken={sessionToken.value} userId={userModel._id} />
      <div className="p-4">
        <h2>Select a Location</h2>
        <ul>
          {/* mock location */}
          <Location _id="0333333333" name="Chick-fil-A Highway 22" number="03444" />
          <Location _id="33222222222" name="Chick-fil-A Midtown" number="03253" />
        </ul>
      </div>
    </main>
  );
}
