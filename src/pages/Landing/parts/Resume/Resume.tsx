import styles from '@/styles/Home.module.css'
import printJS from 'print-js'
import { isMobile } from 'react-device-detect'

export default function Resume() {
  const ResumePDF = './Resume.pdf'

  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionTitle} id='aboutme'>
        Resume
      </h2>

      <div className='ResumeInfo'>
        {/* <div onClick={() => printJS(ResumePDF)} className='pdfRender'> */}
        <iframe src={ResumePDF} width='100%' height='500px' />
        {/* </div> */}
      </div>
    </section>
  )
}
