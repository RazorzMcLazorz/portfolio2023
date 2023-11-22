import styles from '@/styles/Home.module.css'

export default function Languages() {
  const LanguageWordsOuter = [
    'React.js',
    'JavaScript',
    'Python',
    'HTML',
    'SCSS',
    'TypeScript',
    'Redux.js',
    'REST',
    'MySQL',
  ]
  const LanguageWordsInner = ['AWS Amplify', 'BASH', 'ZSH', 'GIT', 'Appwrite', 'Node.js']

  return (
    <section className={styles.infoSection} id='languages'>
      <h2 className={styles.sectionTitle}>Languages</h2>

      <div className={styles.skillsSpinContainer}>
        {LanguageWordsOuter.map((word, indx) => (
          <div
            className={styles.spin}
            key={'skillSpinOuter' + indx}
            style={{ animationDelay: '-' + indx * 1.1 + 's' }}>
            <div className={styles.words}>{word}</div>
          </div>
        ))}
        {LanguageWordsInner.map((word, indx) => (
          <div
            className={styles.spinInner}
            key={'skillSpinInner' + indx}
            style={{ animationDelay: '-' + indx * 1.65 + 's' }}>
            <div className={styles.words}>{word}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
