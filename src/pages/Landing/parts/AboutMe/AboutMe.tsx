import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import vacationBarPicture from '@/assets/vacationBarPicture.jpeg'

const Details =
  "I've been very interested in coding for a while as a hobby, I'm very passionate of this field and want to make it a reality, I have confidence in building projects you assign me because I have built personal projects such as Mad Libs which takes the input and changes state to be added in the story. another project I have my portfolio website, it uses routing to link the different components and renders them correctly when needed. a project I have in the pipeline is my BlackJack React website, it will be using the state changing, setting, and swapping components and calls functions to create a very easy to use Blackjack Game Front End Design that is extremely fun to me and very rewarding every time I complete a project, they introduced me to API's and React, along with extra languages like Python which is a very clean very easy to read language."

export default function AboutMe() {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionTitle} id='aboutme'>
        About Me
      </h2>

      <div className={styles.aboutMeAdjustment}>
        <div className={styles.contactMePart}>
          <div className={`${styles.cardComponent} ${styles.largeCard}`}>
            <p className={styles.cardDetails}>{Details}</p>
          </div>

          <h2 className={styles.sectionTitle} style={{ marginTop: 20 }}>
            Contact Me
          </h2>

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
