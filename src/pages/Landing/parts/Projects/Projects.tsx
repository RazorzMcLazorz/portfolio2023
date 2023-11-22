import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import github from '@/assets/github.png'
import link from '@/assets/link.png'
import threeDot from '@/assets/3dot.png'
import { ALLPROJECTS } from '@/constants/projectConstants'

export default function Projects() {
  return (
    <section className={styles.infoSection} id='projects'>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.allCards}>
        {ALLPROJECTS.map((project) => {
          return (
            <div className={`${styles.cardComponent} ${styles.smallCard}`} key={project.title}>
              <div className={styles.cardProjectStyle}>
                <div className={styles.cardDetails}>
                  <p className={styles.cardTitle}>{project.title}</p>
                  <p className={styles.cardDescription}>{project.description}</p>
                  <div className={styles.cardLink}>{project.link}</div>
                  {project.private && <div className={styles.cardLink}>Privated Repo</div>}
                </div>
                <div className={styles.cardIcons}>
                  {project.github && !project.private && (
                    <a href={project.github}>
                      <Image src={github} alt='GitHub' className={styles.cardIcon} />
                    </a>
                  )}
                  {project.link && (
                    <div className={styles.cardIcon}>
                      <a href={project.link}>
                        <Image src={link} alt='link to website' className={styles.shrinkIcon} />
                      </a>
                    </div>
                  )}
                  <div className={styles.cardIcon}>
                    <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
