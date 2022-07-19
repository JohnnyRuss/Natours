import styles from './components/stories.module.scss';
import Video from './components/Video';
import Story from './components/Story';
import { HeadingSecondary, SecondaryLinkedBTN } from '../Layout';
import { storiesData } from '../../lib';

function Stories() {
  return (
    <div className={styles.stories} id="stories">
      <Video />
      <HeadingSecondary
        content='we make people genuinely happy'
        className={styles.spaceHeadingSecondary}
      />

      {storiesData.map((story, i) => (
        <Story story={story} key={`user story:${i}`} />
      ))}

      <SecondaryLinkedBTN content='read all stories' className={styles.readAllBtn} />
    </div>
  );
}

export default Stories;
