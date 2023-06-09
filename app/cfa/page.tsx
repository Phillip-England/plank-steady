import { FormCreateLocation } from "@/components/forms/FormCreateLocation";
import { Location } from "@/components/resources/Location";

export default async function Home() {

  return (
    <main className="">
      <FormCreateLocation />
      <div className="p-4">
        <h2>Select a Location</h2>
        <ul>
          {/* mock location */}
          <Location _id="0333333333" name="Chick-fil-A Utica" number="03444" />
          <Location _id="33222222222" name="Chick-fil-A Southroads" number="03253" />
        </ul>
      </div>
    </main>
  );
}
