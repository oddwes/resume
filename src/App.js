import "./App.css";
import React, { useRef }  from 'react';
import Resume from "./Resume";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function App() {
  const componentRef = useRef()
  const printDocument = () => {
    var doc = new jsPDF("p", "mm", "a4");
    var width = doc.internal.pageSize.getWidth();
    var height = doc.internal.pageSize.getHeight();

    const input = document.getElementById('divToPrint');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save("download.pdf");
      })
    ;
  }

  return (
    <>
      <button className="rounded-button" onClick={printDocument}>Print to PDF</button>
      <br />
      <Resume ref={componentRef}/>
    </>
  )
}

export default App;
