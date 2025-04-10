import { Education } from "./Educations"
import { Header } from "./Header"
import { Technologies } from "./Technologies"
import { Work } from "./Work"

export const OldLayout = () => {
  return (
    <>
      <div className="bg-[#30353F] text-white p-4">
        <Header />
      </div>
      <div className="p-6 space-y-2">
        <Work />
        <br />
        <Education />
        <br />
        <Technologies />
      </div>
    </>
  )
}