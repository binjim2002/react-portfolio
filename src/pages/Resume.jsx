import React, {useState} from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../Assets/Resume-Jimmy-Kazadi.pdf'
import Banner from '../components/Banner';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`



const Resume = () => {
    const [totalPages, setTotalPages] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    function loadDoc({totalPages}){
        setTotalPages(totalPages);
    }
    return (
        <div>
            <Banner text= "My work experience"/> 
            <Document onLoadSuccess={loadDoc}  file={pdf}>
                <Page pageNumber={currentPage}/>
            </Document>
            
        </div>
    );
};

export default Resume;