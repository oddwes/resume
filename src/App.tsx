import { Variant, VariantContext } from './contexts/Variant'
import { useRef, useState } from 'react'
import Resume from './components/Resume'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const App = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  const printDocument = async (): Promise<void> => {
    const input = document.getElementById('divToPrint')
    if (!input) return

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      height: input.clientHeight,
      windowHeight: input.clientHeight
    })

    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    const pdf = new jsPDF('p', 'mm', 'a4')
    const pagesNeeded = Math.ceil(imgHeight / pageHeight)

    for (let i = 0; i < pagesNeeded; i++) {
      if (i > 0) pdf.addPage()
      const position = i === 0 ? 0 : -i * pageHeight
      pdf.addImage(
        canvas.toDataURL('image/png', 1.0),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight
      )
    }
    pdf.save('resume.pdf')
  }

  const [variant, setVariant] = useState<string>('cool')

  return (
    <VariantContext.Provider value={variant}>
      <div className="p-4 bg-gray-100">
        <div className="flex justify-between">
          <Variant setVariant={setVariant} />
          <button className="rounded-button" onClick={printDocument}>Print to PDF</button>
        </div>
        <br />
        <Resume ref={componentRef} />
      </div>
    </VariantContext.Provider>
  )
}

export default App