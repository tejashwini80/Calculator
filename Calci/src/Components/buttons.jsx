import styles from "./BtnContainer.module.css";
import Input from "./InputBox,";
import { useState } from "react";
const Button = ({ClickHandler}) => {
  const btnNames = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    "+",
    "-",
    "*",
    "%",
    "x",
    "="
  ];
 
 
  return (
      <div className={styles.btnContainer}> 
        {btnNames.map(btns=>{
          return<button onClick={()=>{ClickHandler(btns)}} className={styles.btn}>{btns}</button>
        })}
      </div>
  )
      }
export default Button;
