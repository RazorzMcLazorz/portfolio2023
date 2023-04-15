import styles from '@/styles/Home.module.css'

export default function WorkExperience() {
  return (
    <section className={styles.infoSection} id='workexperience'>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      <div className={styles.allCards}>
        <div className={`${styles.cardComponent} ${styles.smallCard}`}>
          <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
          <p className={styles.cardPosition}>CS Developer Position</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.cardDate}>Jan Date - Dec Date</div>
        </div>
        <div className={`${styles.cardComponent} ${styles.smallCard}`}>
          <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
          <p className={styles.cardPosition}>CS Developer Position</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.cardDate}>Jan Date - Dec Date</div>
        </div>
        <div className={`${styles.cardComponent} ${styles.smallCard}`}>
          <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
          <p className={styles.cardPosition}>CS Developer Position</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.cardDate}>Jan Date - Dec Date</div>
        </div>
        <div className={`${styles.cardComponent} ${styles.smallCard}`}>
          <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
          <p className={styles.cardPosition}>CS Developer Position</p>
          <p className={styles.cardDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className={styles.cardDate}>Jan Date - Dec Date</div>
        </div>
      </div>
    </section>
  )
}
