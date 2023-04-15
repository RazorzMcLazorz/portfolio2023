import styles from '@/styles/Home.module.css'

export default function Languages() {
  return (
    <section className={styles.infoSection} id='languages'>
      <h2 className={styles.sectionTitle}>Languages</h2>

      <div id='skillsSpinContainer'>
        <div id='spin'></div>
        <div id='spinInner'></div>
      </div>
    </section>
  )
}
