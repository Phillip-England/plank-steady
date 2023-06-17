import { FormCreateLocation } from "@/components/forms/FormCreateLocation";
import { Location } from "@/components/resources/Location";
import { NewUserModel } from "@/lib/User/UserModel";
import { getLocations } from "@/lib/getLocations";
import { getUser } from "@/lib/getUser";
import { cookies } from "next/dist/client/components/headers";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";

export default async function Home() {

  // loading in our user
  const sessionToken = cookies().get('session-token') as RequestCookie
  const userResponse = await getUser(sessionToken.value)
  const userModel = await NewUserModel(userResponse)

  // loading in our user locations
  const locationResponse = await getLocations(sessionToken.value)
  const locationJson = await locationResponse.json()
  const locations = locationJson.data

  // setting the limits on how many show per page


  return (
    <main className="">
      <FormCreateLocation sessionToken={sessionToken.value} userId={userModel._id} />
      <div className="p-4">
        <h2 className="mb-2">Select a Location</h2>
        <ul>
          {locations.map((location: any) => {
            return <Location _id={location.Id} name={location.Name} number={location.Number} /> 
          })}
          {/* <Location _id="33222222222" name="Chick-fil-A Midtown" number="03253" /> */}
        </ul>
      </div>
    </main>
  );
}
