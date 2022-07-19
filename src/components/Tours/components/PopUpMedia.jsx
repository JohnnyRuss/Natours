import styles from './popUpMedia.module.scss';

function PopUpMedia() {
  return (
    <div className={styles.popupLeft}>
      <img src='/assets/nat-8.jpg' alt='tour' className={styles.popupImage} />
      <img src='/assets/nat-9.jpg' alt='tour' className={styles.popupImage} />
    </div>
  );
}

export default PopUpMedia;
