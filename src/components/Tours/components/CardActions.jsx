import styles from './cardActions.module.scss';
import { LinkBTN } from '../../Layout';

function CardActions({ tour }) {
  return (
    <div className={styles.cardActionsBox}>
      <div className={styles.priceBox}>
        <p className={styles.priceOnly}>only</p>
        <p className={styles.priceValue}>${tour.price}</p>
      </div>
      <LinkBTN content='book now !' path='#popup' />
    </div>
  );
}

export default CardActions;
