import { forwardRef } from 'react'
import { ModernLayout } from './ModernLayout'

export const Resume = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div>
      <div id='divToPrint' ref={ref} className="w-[1000px] h-[1414px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <ModernLayout />
      </div>
      <br />
    </div>
  )
})

export default Resume 
