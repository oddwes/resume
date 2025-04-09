import { Variant, VariantContext } from './components/Variant'
import { useRef, useState } from 'react'
import Resume from './components/Resume'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const App: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  const printDocument = async (): Promise<void> => {
    const input = document.getElementById('divToPrint')
    if (!input) return

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false
    })

    const imgWidth = 210 // A4 width in mm
    const pageHeight = 297 // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width

    // Calculate number of pages needed
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pagesNeeded = Math.ceil(imgHeight / pageHeight)

    // Add pages as needed
    for (let i = 0; i < pagesNeeded; i++) {
      if (i > 0) pdf.addPage()
      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        -(i * pageHeight), // Offset for each page
        imgWidth,
        imgHeight
      )
    }
    pdf.save('resume.pdf')
  }

  const [variant, setVariant] = useState<string>('regular')

  return (
    <VariantContext.Provider value={variant}>
      <div className="p-4">
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