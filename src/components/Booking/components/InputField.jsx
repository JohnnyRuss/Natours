import styles from './inputField.module.scss';

function InputField({ type, placeholder, id }) {
  return (
    <div className={styles.formGroup}>
      <input type={type} placeholder={placeholder} id={id} className={styles.formInput} required />
      <label htmlFor={id} className={styles.formLabel}>
        full name
      </label>
    </div>
  );
}

export default InputField;
