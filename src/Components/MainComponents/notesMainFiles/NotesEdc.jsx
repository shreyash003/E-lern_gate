import React from 'react'
import pdfImg from "../../../images/pdf.png"
import pdfData from "../../../dataFiles/pdfData/EDCpdf.json"

const NotesEdc=() =>{
return(
    <>
        {pdfData.map((val)=>{
            return(
                <div className='notesSubDiv'>
                <div className='notesSubName'>
                        <p >Electronic Devices</p>
                </div>
                        {val.topic.map((value,index)=>{
                            return(
                                <div className='notesTopicDiv'>
                        <section className='notestopicIconDiv'> 
                                <img alt='pdf' src={pdfImg}></img>
                        </section>
                        <section className='notesTopicTitle'>
                                <a target='_blank' rel='noreferrer noopener' href={`${val.path[index]}`}>{value}</a>
                        </section>
                </div>
                            )
                        })}
                       
                    
              
      </div>    
            )
        })}
      
    </>)
}
export default NotesEdc;