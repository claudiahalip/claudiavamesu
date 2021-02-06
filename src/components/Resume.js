import React, {Component} from 'react'
import resume from '../images/resume.png'
import {PDFDownloadLink} from '@react-pdf/renderer'
import {  Document, Page,  pdfjs } from 'react-pdf';
import file from '../images/resume.pdf';


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



class Resume extends Component {
    render (){
        return(
            <div>
               
               {/* <a href = "https://docs.google.com/document/d/1RVAdvHZDqCUlD1AsmmaC7uitJXe-ZJDLJFBB68IfIis" target="_blank">
               <img className = "resume" src={resume}></img>
               </a> */}

               
                <a href="https://docs.google.com/document/d/1RVAdvHZDqCUlD1AsmmaC7uitJXe-ZJDLJFBB68IfIis" style={{ textDecoration: 'none' }} target="_blank">
               <Document file={file}
                   options={{workerSrc: "pdf.worker.js"}}>
                   <Page pageNumber={1}/>
               </Document>
               </a>

               <PDFDownloadLink  >
                    Download pdf
               </PDFDownloadLink>
               
               
            
            </div>
               
        )
    }
}

export default Resume