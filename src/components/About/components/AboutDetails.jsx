import styles from './aboutDetails.module.scss';
import { HeadingTertiary, SecondaryLinkedBTN } from '../../Layout';

function AboutDetails() {
  return (
    <div className={`col-1-of-2 ${styles.aboutInfoDetails}`}>
      <HeadingTertiary
        content="you're going to fall in love with nature"
        className={styles.spaceHeadingTertiary}
      />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, temporibus deserunt nobis
        ab voluptate repellat cum optio praesentium cupiditate odit, corrupti excepturi tempora quam
        inventore magnam suscipit possimus maiores reprehenderit?
      </p>
      <HeadingTertiary
        content='live adventures like you never have before'
        className={styles.spaceHeadingTertiary}
      />
      <p className={styles.paragraph}>
        Repellendus iusto incidunt praesentium ad, quisquam totam voluptate aut excepturi, nobis qui
        consequuntur maxime animi ratione recusandae rem. Eum, eveniet ratione. Quisquam illo vitae
        ut dolorum soluta!
      </p>
      <SecondaryLinkedBTN path='/#features' content='learn more' className={styles.moreBTN} />
    </div>
  );
}

export default AboutDetails;
