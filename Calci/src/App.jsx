import { useState } from 'react';
import Input from './Components/InputBox,';
import styles from "./App.module.css";
import Button from './Components/buttons';
import Input2 from './Components/Input2';

function App() {
  let [text, setText] = useState();

  const OnChangeHandler=(event)=>{
    setText(1);
  }

  let ClickHandler=(event)=>{
    setText(1);
  }

  return(
    <>
     <div className={styles.Calculator} >
     <Input OnChangeHandler={OnChangeHandler}/>
     <Input2 text={text}></Input2>
    <Button  ClickHandler={(event)=>ClickHandler(event)} />
     </div>
    </>
  );
}

export default App;
