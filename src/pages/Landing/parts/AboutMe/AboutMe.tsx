import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import vacationBarPicture from '@/assets/vacationBarPicture.jpeg'

export default function AboutMe() {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionTitle} id='aboutme'>
        About Me
      </h2>

      <div className={styles.aboutMeAdjustment}>
        <div className={styles.contactMePart}>
          <div className={`${styles.cardComponent} ${styles.largeCard}`}>
            <p className={styles.cardDetails}>
              Lorem ipsum doloar sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
              pellentesque dignissim enim sit. Dictumst quisque sagittis purus sit amet volutpat
              consequat. Sapien nec sagittis aliquam malesuada bibendum. Malesuada proin libero nunc
              consequat interdum varius sit amet mattis. Id leo in vitae turpis massa sed. Sed odio
              morbi quis commodo odio aenean sed adipiscing. Pharetra pharetra massa massa ultricies
              mi quis hendrerit dolor magna. At quis risus sed vulputate. Urna porttitor rhoncus
              dolor purus. Risus pretium quam vulputate dignissim suspendisse in est ante in. Semper
              quis lectus nulla at volutpat. Integer eget aliquet nibh praesent tristique magna sit.
              Duis ultricies lacus sed turpis tincidunt. Eu volutpat odio facilisis mauris sit amet
              massa vitae tortor. Non odio euismod lacinia at quis risus sed vulputate. Faucibus
              pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sed ullamcorper
              morbi tincidunt ornare massa eget egestas purus viverra.
            </p>
          </div>

          <h2 className={styles.sectionTitle}>Contact Me</h2>

          <div className={styles.contactLinks}>
            <a href='https://www.linkedin.com/in/nate-p-young/'>
              https://www.linkedin.com/in/nate-p-young/
            </a>
            <a href='https://github.com/RazorzMcLazorz'>https://github.com/RazorzMcLazorz</a>
          </div>
        </div>

        <div>
          <Image src={vacationBarPicture} alt='vacation picture' className={styles.vacayPic} />
        </div>
      </div>
    </section>
  )
}
