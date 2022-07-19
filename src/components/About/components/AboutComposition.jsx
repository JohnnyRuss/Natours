import styles from './aboutComposition.module.scss';

function AboutComposition() {
  return (
    <div className={`col-1-of-2 ${styles.aboutComposition}`}>
      <div className={styles.composition}>
        <img
          src='/assets/nat-1-large.jpg'
          srcSet='/assets/nat-1.jpg 300w, /assets/nat-1-large.jpg 1000w'
          sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px'
          className={`${styles.compositionImage} ${styles[`compositionImage-1`]}`}
          alt='compositionImage-1'
        />
        <img
          src='/assets/nat-2-large.jpg'
          srcSet='/assets/nat-2.jpg 300w, /assets/nat-2-large.jpg 1000w'
          sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px'
          className={`${styles.compositionImage} ${styles[`compositionImage-2`]}`}
          alt='compositionImage-2'
        />
        <img
          src='/assets/nat-3-large.jpg'
          srcSet='/assets/nat-3.jpg 300w, /assets/nat-3-large.jpg 1000w'
          sizes='(max-width:56.25em) 20vw, (max-width:37.5em) 30vw, 300px'
          className={`${styles.compositionImage} ${styles[`compositionImage-3`]}`}
          alt='compositionImage-3'
        />
      </div>
    </div>
  );
}

export default AboutComposition;
