import React,{useState} from "react";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Collapse } from "@mui/material";
import NotesMath from "./notesMainFiles/NotesMath";
import NotesNa from "./notesMainFiles/NotesNa";

const Notes = () => {
  const [subColl, setSubColl] = useState(false);

    const openSubColl = () => {
        setSubColl(!subColl);
        console.log("open");
      };
  return (
    <>
      <main role="main" className="notesMainDiv">
            <section className="notesSubBar">
                    <div className="notesSubLinkContainer">
                            <a href="#mathNotes">Maths</a>
                            <a href="#naNotes">Network Analysis Signals and System</a>
                            <a href="#a">Analog Circuits</a>
                            <a href="#a">Electronic Devices</a>
                    </div>
                    <section className="notesSubButton">
                             <Button
                               sx={{color:"#f5f6fa", borderRadius: 4 ,ml:2 }}
                               endIcon={<ArrowDropDownIcon />}
                               onClick={openSubColl}
                              >
                               Subjects
                             </Button>
                    </section>
            </section>
        <section className="notesSubCollapse">
                <Collapse in={subColl} timeout="auto" unmountOnExit>
                         <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Home</Button>
                         <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Video Lec</Button>
                         <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>Notes</Button>
                         <Button  sx={{display:'block',color:"black",mb:2,width:"100%",textAlign:"left",height:"3rem"}}>MockTest</Button>
                </Collapse>
        </section>



        <section className='notesContentContainer'>
                <div className="notesContentTitle">
                        <p id="mathNotes">Lets Get Started...</p>
                </div>
                <div className="notesContentLinksDiv">
                        <NotesMath/>
                        <NotesNa/>
                </div>
        </section>
      </main>
    </>
  );
};
export default Notes;
