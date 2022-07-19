import styles from './video.module.scss';

function Video() {
  return (
    <div className={styles.bgVideoContainer}>
      <video className={styles.bgVideo} autoPlay muted loop>
        <source src='/assets/video.mp4' type='video/mp4' />
        <source src='/assets/video.webm' type='video/webm' />
        your browser is not supported
      </video>
    </div>
  );
}

export default Video;
