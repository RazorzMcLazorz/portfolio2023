import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import github from '@/assets/github.png'
import link from '@/assets/link.png'
import threeDot from '@/assets/3dot.png'

export default function Projects() {
  return (
    <section className={styles.infoSection} id='projects'>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.allCards}>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
        {/* smallCard */}
        <div className={styles.cardComponent}>
          <div className={styles.cardProjectStyle}>
            <div className={styles.cardDetails}>
              <p className={styles.cardTitle}>Project Name LOREM IPSUM</p>
              <p className={styles.cardDescription}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className={styles.cardLink}>https://projectlink.netlify.app/</div>
            </div>
            <div className={styles.cardIcons}>
              <Image src={github} alt='GitHub' className={styles.cardIcon} />
              <div className={styles.cardIcon}>
                <Image src={link} alt='link to website' className={styles.shrinkIcon} />
              </div>
              <div className={styles.cardIcon}>
                <Image src={threeDot} alt='more details' className={styles.shrinkIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
