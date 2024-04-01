import styles from "./InputBox.module.css";

const Input = ({ OnChangeHandler }) => {
 
  return (
    <input
      id="ip"
      onKeyDown={OnChangeHandler}
      className={styles.input}
      type="text"
      readOnly
    >
      </input>
  );
};
export default Input;
