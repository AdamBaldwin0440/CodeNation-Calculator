import React from 'react';
import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';


  const Calculator = () => {
    const NumberKeys = [1,2,3,4,5,6,7,8,9,0];
    const FuncKeys = ["+", "-", "*", "/", "="]
    const [currentOp, setCurrentOp] = useState("")


    let clickNumbers = (Val) =>{
      Val === "=" ?
      setCurrentOp(evaluate (currentOp))
      :
      setCurrentOp(currentOp + Val)
    }

    let clearOps = () => {
    setCurrentOp(" ")
    }

    return (
      <div className='App'>
        <div className='CalculatorWrap'>
          
          <div className='leftKeys'>
            <p id='Display'>{currentOp}</p> 
            <button id = "Clear" onClick={clearOps}> Clear </button>
            <div className='numbers'>
              {NumberKeys.map((Val, index) => {
                return <>
                <button id='IndivNums' onClick={() => {clickNumbers(Val)}} key={index} > {Val} </button>
                </>
                
              })
              }
            </div>
          </div>
          
          <div className='rightKeys'></div>
              <div className='Operations'>
              {FuncKeys.map((Val, index) => {
                return <button id="IndividualFuncKeys" onClick={() => {clickNumbers(Val)}} key={index}>  {Val}</button>
              })}
               
              </div>
              
        </div>
      </div>
      
    );
  }

export default Calculator;