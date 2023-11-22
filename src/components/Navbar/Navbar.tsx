import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import myLogo from '@/assets/myLogo.jpeg'
import downIcon from '@/assets/downIcon.png'
import { Dispatch, SetStateAction } from 'react'

export default function Navbar({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<'light-mode' | 'dark-mode'>>
  theme: string
}) {
  const handleThemeChange = (event: any) => {
    const rootClassList = document.documentElement.classList
    if (!event.target.checked) {
      setTheme('dark-mode')
      rootClassList.add('dark-mode')
      rootClassList.remove('light-mode')
    } else {
      setTheme('light-mode')
      rootClassList.add('light-mode')
      rootClassList.remove('dark-mode')
    }
    console.log(event.target.checked)
  }

  return (
    <header className={styles.header}>
      <div className={styles.upperPart}>
        <nav className={styles.navComponent}>
          <a href='#workexperience'>Experience</a>
          <a href='#projects'>Projects</a>
          <a href='#languages'>Languages</a>
          <a href='#aboutme'>About Me</a>
          <a href='#refferences'>References</a>
        </nav>
        <div className={styles.topRight}>
          <Image src={myLogo} alt='myLogo' className={styles.myLogo} />
          <label className={styles.switch}>
            <input
              type='checkbox'
              id='themeChange'
              checked={theme === 'light-mode'}
              onChange={handleThemeChange}
            />
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
  )
}
