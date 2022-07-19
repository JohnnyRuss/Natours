import styles from './story.module.scss';
import { HeadingTertiary } from '../../Layout';

function Story({ story }) {
  return (
    <div className={styles.story}>
      <figure className={styles.storyFigure}>
        <img src={story.img} alt='person on a tour' className={styles.storyImage} />
        <figcaption className={styles.caption}>{story.userName}</figcaption>
      </figure>
      <div className={styles.text}>
        <HeadingTertiary content={story.title} />
        <p>{story.story}</p>
      </div>
    </div>
  );
}

export default Story;
