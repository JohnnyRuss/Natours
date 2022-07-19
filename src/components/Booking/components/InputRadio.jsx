import styles from './inputRadio.module.scss';

function InputRadio({ id, caption }) {
  return (
    <div className={styles.radioGroup}>
      <input type='radio' name='groupSize' value='' id={id} className={styles.radioInput} />
      <label htmlFor={id} className={styles.radioLabel}>
        <span className={styles.radioBTN}></span>
        {caption}
      </label>
    </div>
  );
}

export default InputRadio;
