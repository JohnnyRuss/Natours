import styles from './components/features.module.scss';
import { FloatContainer } from '../Layout';
import FeatuteBox from './components/FeatuteBox';
import { featureDetails } from '../../lib';

function Features() {
  return (
    <section className={styles.features} id="features">
      <FloatContainer>
        {featureDetails.map((data, i) => (
          <FeatuteBox data={data} key={`feature details:${i}`} />
        ))}
      </FloatContainer>
    </section>
  );
}

export default Features;
