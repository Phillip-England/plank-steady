import { FormLogin } from "@/components/forms/FormLogin";
import { cookies } from "next/dist/client/components/headers";
import { redirect } from "next/navigation";


export default function Home() {

  const sessionToken = cookies().get("session-token")
  // console.log(sessionToken)
  // if (sessionToken != undefined) {
  //   redirect('/cfa')
  // }

  return (
    <main className="">
      <FormLogin/>
    </main>
  )
}
