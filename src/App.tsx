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

    const inputRect = input.getBoundingClientRect()
    const links: { href: string; left: number; top: number; width: number; height: number }[] = []
    input.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((a) => {
      const r = a.getBoundingClientRect()
      links.push({
        href: a.href,
        left: r.left - inputRect.left,
        top: r.top - inputRect.top,
        width: r.width,
        height: r.height
      })
    })

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
      logging: false,
      height: input.clientHeight,
      windowHeight: input.clientHeight
    })

    const imgWidth = 210
    const pageHeight = 297
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

    const scaleX = imgWidth / input.clientWidth
    const scaleY = imgHeight / input.clientHeight
    links.forEach(({ href, left, top, width, height }) => {
      const pdfX = left * scaleX
      const pdfY = top * scaleY
      const pdfW = width * scaleX
      const pdfH = height * scaleY
      const pageIndex = Math.floor(pdfY / pageHeight)
      if (pageIndex >= 0 && pageIndex < pagesNeeded) {
        pdf.setPage(pageIndex + 1)
        pdf.link(pdfX, pdfY - pageIndex * pageHeight, pdfW, pdfH, { url: href })
      }
    })

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