import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mountainsSunset from '@/assets/mountainsSunset.svg'
import myLogo from '@/assets/myLogo.jpeg'
import github from '@/assets/github.png'
import link from '@/assets/link.png'
import threeDot from '@/assets/3dot.png'
import downIcon from '@/assets/downIcon.png'
import vacationBarPicture from '@/assets/vacationBarPicture.jpeg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio 2023</title>
        <meta name='description' content='My Portfolio that was created in 2023' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='@/assets/myLogo.jpeg' />
      </Head>
      <main className={styles.main}>
        <Image src={mountainsSunset} alt='Mountains Sunset' className={styles.sunsetMountains} />

        <header className={styles.header}>
          <div className={styles.upperPart}>
            <nav className={styles.navComponent}>
              <a href='#workexperience'>Experience</a>
              <a href='#projects'>Projects</a>
              <a href='#languages'>Languages</a>
              <a href='#aboutme'>About Me</a>
              <a href='#refferences'>Refferences</a>
            </nav>
            <div className={styles.topRight}>
              <Image src={myLogo} alt='myLogo' className={styles.myLogo} />
              <label className={styles.switch}>
                <input type='checkbox' id='themeChange' />
                <span className={styles.slider}></span>
              </label>
              <p className={styles.clickMeButton}>
                {' '}
                <span />
                Click me
              </p>
            </div>
          </div>

          <h1 className={styles.myName}>Nathaniel Patrick Young</h1>

          <div className={styles.lowerPart}>
            <div className={styles.scrollDownButton}>
              <Image src={downIcon} alt='DownIcon' className='downIcon' />
            </div>
          </div>
        </header>

        <div>
          <section className={styles.infoSection} id='workexperience'>
            <h2 className={styles.sectionTitle}>Work Experience</h2>

            <div className={styles.allCards}>
              {/* smallCard */}
              <div className={styles.cardComponent}>
                <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
                <p className={styles.cardPosition}>CS Developer Position</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className={styles.cardDate}>Jan Date - Dec Date</div>
              </div>
              {/* smallCard */}
              <div className={styles.cardComponent}>
                <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
                <p className={styles.cardPosition}>CS Developer Position</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className={styles.cardDate}>Jan Date - Dec Date</div>
              </div>
              {/* smallCard */}
              <div className={styles.cardComponent}>
                <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
                <p className={styles.cardPosition}>CS Developer Position</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className={styles.cardDate}>Jan Date - Dec Date</div>
              </div>
              {/* smallCard */}
              <div className={styles.cardComponent}>
                <div className={styles.cardTitle}>TITLE LOREM IPSUM</div>
                <p className={styles.cardPosition}>CS Developer Position</p>
                <p className={styles.cardDescription}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className={styles.cardDate}>Jan Date - Dec Date</div>
              </div>
            </div>
          </section>
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                      nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

          <section className={styles.infoSection} id='languages'>
            <h2 className={styles.sectionTitle}>Languages</h2>

            <div id='skillsSpinContainer'>
              <div id='spin'></div>
              <div id='spinInner'></div>
            </div>
          </section>

          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle} id='aboutme'>
              About Me
            </h2>

            <div className={styles.aboutMeAdjustment}>
              <div className={styles.contactMePart}>
                {/* largeCard */}
                <div className={styles.cardComponent}>
                  <p className={styles.cardDetails}>
                    Lorem ipsum doloar sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Dictum fusce ut placerat orci nulla
                    pellentesque dignissim enim sit. Dictumst quisque sagittis purus sit amet
                    volutpat consequat. Sapien nec sagittis aliquam malesuada bibendum. Malesuada
                    proin libero nunc consequat interdum varius sit amet mattis. Id leo in vitae
                    turpis massa sed. Sed odio morbi quis commodo odio aenean sed adipiscing.
                    Pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna. At quis
                    risus sed vulputate. Urna porttitor rhoncus dolor purus. Risus pretium quam
                    vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at
                    volutpat. Integer eget aliquet nibh praesent tristique magna sit. Duis ultricies
                    lacus sed turpis tincidunt. Eu volutpat odio facilisis mauris sit amet massa
                    vitae tortor. Non odio euismod lacinia at quis risus sed vulputate. Faucibus
                    pulvinar elementum integer enim neque volutpat ac tincidunt vitae. Sed
                    ullamcorper morbi tincidunt ornare massa eget egestas purus viverra.
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
                <Image
                  src={vacationBarPicture}
                  alt='vacation picture'
                  className={styles.vacayPic}
                />
              </div>
            </div>
          </section>

          <section className={styles.infoSection} id='refferences'>
            <h2 className={styles.sectionTitle}>Refferences</h2>

            <div className={styles.refference}>
              <div className={styles.tinyCard} />
              <div className={styles.refferenceContent}>
                <p>Who ever the person is</p>
                <p>How i know the person</p>
                <p>801 - 123 - 1234</p>
                <p>123.myemail@gmail.com</p>
              </div>
            </div>

            <div className={styles.refference}>
              <div className={styles.tinyCard} />
              <div className={styles.refferenceContent}>
                <p>Who ever the person is</p>
                <p>How i know the person</p>
                <p>801 - 123 - 1234</p>
                <p>123.myemail@gmail.com</p>
              </div>
            </div>

            <div className={styles.refference}>
              <div className={styles.tinyCard} />
              <div className={styles.refferenceContent}>
                <p>Who ever the person is</p>
                <p>How i know the person</p>
                <p>801 - 123 - 1234</p>
                <p>123.myemail@gmail.com</p>
              </div>
            </div>
          </section>

          <footer>created by nathaniel young with html, js, and css</footer>
        </div>
      </main>
    </>
  )
}
