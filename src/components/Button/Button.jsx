import React from "react";
//import html2pdf from 'html2pdf.js';
//import { useReactToPrint } from "react-to-print";


const SaveAsPDFButton = React.forwardRef(({ contentRef,text,onClick }, ref) => {

  return (
    <button
      ref={ref}
      onClick={onClick}
      className="flex-auto w-64 bg-yellow-950 font-bold text-stone-50 py-4 rounded-lg  hover:text-yellow-400 hover:bg-yellow-700"
    >
      {text}
    </button>
  );
});

export default SaveAsPDFButton;