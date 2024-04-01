import styles from "./InputBox.module.css";
const Input2 = (props) => {
  
  return (
    <div className={styles.ip}>
    <span className={styles.h} type="numbers">{props.text} </span>
    </div>
  );
};
export default Input2;


