import { ALLREFFERENCES } from '@/constants/refferencesConstants'
import styles from '@/styles/Home.module.css'

export default function Refferences() {
  return (
    <section className={styles.infoSection} id='refferences'>
      <h2 className={styles.sectionTitle}>Refferences</h2>

      {ALLREFFERENCES.map((refference) => {
        return (
          <div className={styles.refference} key={refference.name}>
            <div className={styles.tinyCard} />
            <div className={styles.refferenceContent}>
              <p>{refference.name}</p>
              <p>{refference.fromWhere}</p>
              <p>{refference.number}</p>
              <p>{refference.email}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}
