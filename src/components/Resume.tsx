import { forwardRef } from 'react'
import { Education } from './Educations'
import { Technologies } from './Technologies'
import { Work } from './Work'
import { Header } from './Header'

export const Resume = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <div id='divToPrint' ref={ref} className="w-[1000px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
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
      </div>
      <br />
    </div>
  )
})

export default Resume 