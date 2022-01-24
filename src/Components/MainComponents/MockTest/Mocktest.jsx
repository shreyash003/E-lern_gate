import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Collapse } from '@mui/material';

const Mocktest=() =>{

    
    const [mathOpen,setMathOpen]=useState(false)
    const [naOpen,setNaOpen]=useState(false)
    const [acOpen,setAcOpen]=useState(false)
    const [edcOpen,setEdcOpen]=useState(false)
    const sub=[
        {name:"Maths",
        state:mathOpen,
        setState:setMathOpen},
        {name:"Network Analysis Signals And System",
        state:naOpen,
        setState:setNaOpen},
        {name:"Analog Circuits",
        state:acOpen,
        setState:setAcOpen},
        {name:"Electronic Devices and Circuits",
        state:edcOpen,
        setState:setEdcOpen}
    ]


    const closeAll=(e)=>{
        setMathOpen(false)
        setNaOpen(false)
        setAcOpen(false)
        setEdcOpen(false)
        console.log(e.target.parentElement.id,e.target.id)

    }

return(
    <>
     <main role='main' className='MockTestMainDiv'>
            <section className='testSelectBar'>
                <div className='testSelectForm'>    
                        <div className='testSelectFormTitle'>
                            <p>Select Your Test</p>
                        </div>
                        <div className='testSelectGroup'>
                            {sub.map((val,ind)=>{
                                return(
                                    <section key={ind} className='subSelect'>
                            <div className='subSelectButton'>
                                <Button  onClick={()=>{val.setState(!val.state)}} endIcon={<ArrowDropDownIcon/>} variant="contained" > {val.name}</Button>
                            </div>
                            <Collapse  in={val.state} timeout="auto" unmountOnExit>
                                <div id={`${val.name}`} className='subCollapseDiv'>
                                    <Button id='easy' onClick={closeAll}>Easy</Button>
                                    <Button id='medium'  onClick={closeAll}>Medium</Button>
                                    <Button id='hard'  onClick={closeAll} >Hard</Button>
                                </div>
                            </Collapse>
                            </section>
                                )
                            })}
                           
                            
                        </div>
                </div>
            </section>
     </main>
    </>)
}
export default Mocktest