import { ALLEXPERIENCES } from '@/constants/experienceConstants'
import styles from '@/styles/Home.module.css'

export default function WorkExperience() {
  return (
    <section className={styles.infoSection} id='workexperience'>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      <div className={styles.allCards}>
        {ALLEXPERIENCES.map((experience) => {
          return (
            <div className={`${styles.cardComponent} ${styles.smallCard}`} key={experience.title}>
              <div className={styles.cardTitle}>{experience.title}</div>
              <p className={styles.cardPosition}>{experience.position}</p>
              <p className={styles.cardDescription}>{experience.description}</p>
              <div className={styles.cardDate}>{experience.date}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
