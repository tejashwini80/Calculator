import styles from "./BtnContainer.module.css";

const BtnContainer = (props) => {
  
  return (
    <button className={styles.btn}>{props.btn}</button>
   
  );
};
export default BtnContainer;
