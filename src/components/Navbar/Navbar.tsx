import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import myLogo from '@/assets/myLogo.jpeg'
import downIcon from '@/assets/downIcon.png'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const handleThemeChange = (event: any) => {
    if (!event.target.checked) {
      setTheme('dark')
      document.documentElement.classList.toggle('dark-mode')
    } else {
      setTheme('light')
      document.documentElement.classList.toggle('light-mode')
    }
    console.log(event.target.checked)
  }

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setTheme('dark')
    else setTheme('light')
  }, [])

  return (
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
            <input
              type='checkbox'
              id='themeChange'
              checked={theme === 'light'}
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
