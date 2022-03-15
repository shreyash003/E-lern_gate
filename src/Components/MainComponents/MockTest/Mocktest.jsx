import React, { useState } from 'react'
import Button from '@mui/material/Button'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Collapse } from '@mui/material';
import "./Mocktest.css"
import aceasy from '../../../dataFiles/mocktest/AC_mock/Aceasy';
import acmedium from '../../../dataFiles/mocktest/AC_mock/Acmedium';
import achard from '../../../dataFiles/mocktest/AC_mock/Achard';
import edceasy from '../../../dataFiles/mocktest/edc_mocktest/Edceasy';
import edcmedium from '../../../dataFiles/mocktest/edc_mocktest/Edcmedium';
import edchard from '../../../dataFiles/mocktest/edc_mocktest/Edchard';
import matheasy from '../../../dataFiles/mocktest/mathmocktest/MathEasyMocktest';
import mathmedium from '../../../dataFiles/mocktest/mathmocktest/MathMediumMock';
import mathhard from '../../../dataFiles/mocktest/mathmocktest/MathMocktestHard';
import naeasy from '../../../dataFiles/mocktest/NA_SSmocktest/NA_SSEasyMocktest';
import namedium from '../../../dataFiles/mocktest/NA_SSmocktest/na_ssmedium_mock';
import nahard from '../../../dataFiles/mocktest/NA_SSmocktest/NA_SSHardMocktes';

const Mocktest=() =>{

    
    const [mathOpen,setMathOpen]=useState(false)
    const [naOpen,setNaOpen]=useState(false)
    const [acOpen,setAcOpen]=useState(false)
    const [edcOpen,setEdcOpen]=useState(false)
    const [startText, setStartTest]=useState(1)
    const [currentArray, setCurrentArray]=useState();
    const [currentQuestionNumber, setCurrentQuestionNumber]=useState(0); 
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
        console.log(e.target.parentElement.id)
        console.log(e.target.id)
        if(e.target.parentElement.id === "Maths") {
            if(e.target.id === "easy") {
                console.log(matheasy)
                setCurrentArray(matheasy);
            }
            if(e.target.id === "medium") {
                setCurrentArray(mathmedium);
            }
            if(e.target.id === "hard") {
                setCurrentArray(mathhard);
            }
        }
        if(e.target.parentElement.id.split(" ")[0] === "Network") {
            if(e.target.id === "easy") {
                console.log(naeasy)
                setCurrentArray(naeasy);
            }
            if(e.target.id === "medium") {
                setCurrentArray(namedium);
            }
            if(e.target.id === "hard") {
                setCurrentArray(nahard);
            }
        }
        if(e.target.parentElement.id.split(" ")[0] === "Analog") {
            if(e.target.id === "easy") {
                setCurrentArray(aceasy);
            }
            if(e.target.id === "medium") {
                setCurrentArray(acmedium);
            }
            if(e.target.id === "hard") {
                setCurrentArray(achard);
            }
        }
        if(e.target.parentElement.id.split(" ")[0] === "Electronic") {
            if(e.target.id === "easy") {
                setCurrentArray(edceasy);
            }
            if(e.target.id === "medium") {
                setCurrentArray(edcmedium);
            }
            if(e.target.id === "hard") {
                setCurrentArray(edchard);
            }
        }
        setStartTest(startText+1)

    }

return(
    <>
     <main role='main' className='MockTestMainDiv'>
            {startText === 1 ? <><section className='testSelectBar'>
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
            {/* <span>
                <div className="card question-card">
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                        <p>Best of luck. 👍</p>
                        </blockquote>
                    </div>
                </div>
            </span> */}
            </> : 
            startText === 2 ? <section className="question-container" >
                <div className="card text-center question-card" >
                    <div className="card-header">
                        {currentArray && currentArray.questions.length > 0 && <h5 className='float-start' >
                            Total Questions: {currentArray.questions.length}
                        </h5>}
                        <h5 className='float-end' >
                            Correct: {`${currentArray.questions.slice(0, currentQuestionNumber).filter((arr)=>arr.answer===arr.selection).length} / ${currentArray.questions.length}`}
                        </h5>
                        <h4>
                            {currentArray && currentArray.name}
                        </h4>
                    </div>
                    <div className="card-body">
                        {typeof currentQuestionNumber === 'number' && currentArray && currentArray.questions.length > 0 && <img style={{ maxHeight: "35vh", maxWidth: "100vh" }} src={currentArray.questions[currentQuestionNumber].question} alt="Question" />}
                    </div>
                    <div className='card-footer' >
                        <div className="form-check">
                            <input className="form-check-input float-none v-align" type="radio" name="flexRadioDefault" id="flexRadioDefault1" 
                                onClick={()=>{
                                    let obj = {...currentArray};
                                    obj.questions[currentQuestionNumber].selection = "a";
                                    setCurrentArray(obj);
                                    console.log(obj)
                                    if(currentArray.questions.length-1 > currentQuestionNumber) {
                                        setTimeout(()=>{setCurrentQuestionNumber(currentQuestionNumber+1)}, 1000)
                                    } else {
                                        setTimeout(()=>{setStartTest(startText+1)}, 1000)
                                    }
                                }}
                                checked={currentArray.questions[currentQuestionNumber].selection && currentArray.questions[currentQuestionNumber].selection === "a" ? true : false}
                            />
                            <label className="form-check-label card-title fs-5 left-margin" htmlFor="flexRadioDefault1">
                                Option A
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input float-none v-align" type="radio" name="flexRadioDefault" id="flexRadioDefault2" 
                                onClick={()=>{
                                    let obj = {...currentArray};
                                    obj.questions[currentQuestionNumber].selection = "b";
                                    setCurrentArray(obj);
                                    if(currentArray.questions.length-1 > currentQuestionNumber) {
                                        setTimeout(()=>{setCurrentQuestionNumber(currentQuestionNumber+1)}, 1000)
                                    } else {
                                        setTimeout(()=>{setStartTest(startText+1)}, 1000)
                                    }
                                }}
                                checked={currentArray.questions[currentQuestionNumber].selection && currentArray.questions[currentQuestionNumber].selection === "b" ? true : false}
                            />
                            <label className="form-check-label card-title fs-5 left-margin" htmlFor="flexRadioDefault2">
                                Option B
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input float-none v-align" type="radio" name="flexRadioDefault" id="flexRadioDefault3" 
                                onClick={()=>{
                                    let obj = {...currentArray};
                                    obj.questions[currentQuestionNumber].selection = "c";
                                    setCurrentArray(obj);
                                    if(currentArray.questions.length-1 > currentQuestionNumber) {
                                        setTimeout(()=>{setCurrentQuestionNumber(currentQuestionNumber+1)}, 1000)
                                    } else {
                                        setTimeout(()=>{setStartTest(startText+1)}, 1000)
                                    }
                                }}
                                checked={currentArray.questions[currentQuestionNumber].selection && currentArray.questions[currentQuestionNumber].selection === "c" ? true : false}
                            />
                            <label className="form-check-label card-title fs-5 left-margin" htmlFor="flexRadioDefault3">
                                Option C
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input float-none v-align" type="radio" name="flexRadioDefault" id="flexRadioDefault4" 
                                onClick={()=>{
                                    let obj = {...currentArray};
                                    obj.questions[currentQuestionNumber].selection = "d";
                                    setCurrentArray(obj);
                                    if(currentArray.questions.length-1 > currentQuestionNumber) {
                                        setTimeout(()=>{setCurrentQuestionNumber(currentQuestionNumber+1)}, 1000)
                                    } else {
                                        setTimeout(()=>{setStartTest(startText+1)}, 1000)
                                    }
                                }}
                                checked={currentArray.questions[currentQuestionNumber].selection && currentArray.questions[currentQuestionNumber].selection === "d" ? true : false}
                            />
                            <label className="form-check-label card-title fs-5 left-margin" htmlFor="flexRadioDefault4">
                                Option D
                            </label>
                        </div>
                    </div>
                </div>
            </section> :
            <section className="question-container" >
                <div className="card question-card">
                    <h5 className="card-header">Test Finished</h5>
                    <div className="card-body">
                        <h5 className="card-title">{currentArray.name}</h5>
                        <h6 className="card-text">Total Questions: {currentArray.questions.length}</h6>
                        <h6 className="card-text">Correct Questions: {currentArray.questions.filter((arr)=>arr.answer===arr.selection).length}</h6>
                        <input type="button" className="btn btn-primary" 
                            onClick={()=>{
                                setMathOpen(false)
                                setNaOpen(false)
                                setAcOpen(false)
                                setEdcOpen(false)
                                setStartTest(1)
                                setCurrentArray();
                                setCurrentQuestionNumber(0);
                            }}
                            value="Restart Test"
                        />
                    </div>
                </div>
            </section>}
     </main>
    </>)
}
export default Mocktest