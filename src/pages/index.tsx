import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import mountainsSunset from '@/assets/mountainsSunset.svg'
import mSunrise from '@/assets/mSunrise.svg'
import Landing from '@/pages/Landing/Landing'
import Navbar from '@/components/Navbar/Navbar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState<'light-mode' | 'dark-mode'>('dark-mode')

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setTheme('dark-mode')
    else setTheme('light-mode')
  }, [])

  return (
    <>
      <Head>
        <title>Portfolio 2023</title>
        <meta name='description' content='My Portfolio that was created in 2023' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='@/assets/myLogo.jpeg' />
      </Head>
      <main className={styles.main}>
        <Image
          src={theme === 'dark-mode' ? mountainsSunset : mSunrise}
          alt='Mountains Sunset'
          className={styles.sunsetMountains}
        />

        <Landing setTheme={setTheme} theme={theme} />
      </main>
    </>
  )
}
