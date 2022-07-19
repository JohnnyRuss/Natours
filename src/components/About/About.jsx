import styles from './components/about.module.scss';
import AboutDetails from './components/AboutDetails';
import AboutComposition from './components/AboutComposition';
import { FloatContainer, HeadingSecondary } from '../Layout';

function About() {
  return (
    <div className={styles.about} id="about">
      <HeadingSecondary
        content='exciting tours for adventurous people'
        className={styles.spaceHeadingSecondary}
      />
      <FloatContainer>
        <AboutDetails />
        <AboutComposition />
      </FloatContainer>
    </div>
  );
}

export default About;
