import styles from './components/popUp.module.scss';

import PopUpMedia from './components/PopUpMedia';
import PopUpContent from './components/PopUpContent';

function PopUp({ onClosePopUp }) {
  return (
    <div className={styles.popup} id='popup' onClick={onClosePopUp}>
      <div className={`popup-content ${styles.content}`}>
        <PopUpMedia />
        <PopUpContent />
      </div>
    </div>
  );
}

export default PopUp;
