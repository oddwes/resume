import "./App.css";
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Resume from "./Resume";

function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <Resume ref={componentRef}/>
  )
}

export default App;
