import styles from './featuteBox.module.scss';
import { HeadingTertiary } from '../../Layout';

function FeatuteBox({ data }) {
  return (
    <div className={`col-1-of-4 ${styles.featureBoxContainer}`}>
      <div className={styles.featureBox}>
        <i className={`${data.icon} ${styles.featureBoxIcon}`}></i>
        <HeadingTertiary content={data.title} className={styles.spaceHeadingTertiary} />
        <p className={styles.featureBoxText}>{data.text}</p>
      </div>
    </div>
  );
}

export default FeatuteBox;
