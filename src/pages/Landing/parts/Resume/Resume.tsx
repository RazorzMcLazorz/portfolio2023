import React from 'react'
import styles from '@/styles/Home.module.css'
import { isMobile } from 'react-device-detect'

export default function Resume() {
  const ResumePDF = '/Resume.pdf'

  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionTitle} id='resume'>
        Resume
      </h2>

      <div className={styles.ResumeInfo}>
        <iframe
          src={ResumePDF}
          width={isMobile ? '100%' : '500px'}
          height={isMobile ? '450px' : '700px'}
          title='Resume'
        />
      </div>
    </section>
  )
}
