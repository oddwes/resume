import { forwardRef, useContext } from 'react'
import { ModernLayout } from './ModernLayout'
import { VariantContext } from '../contexts/Variant'
import { OldLayout } from './OldLayout'

export const Resume = forwardRef<HTMLDivElement>((_, ref) => {
  const variant = useContext(VariantContext)

  return (
    <div >
      <div id='divToPrint' ref={ref} className="w-[1000px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {variant === 'cool' && <ModernLayout />}
        {(variant === 'regular' || variant === 'blockchain') && <OldLayout />}
      </div>
      <br />
    </div>
  )
})

export default Resume 