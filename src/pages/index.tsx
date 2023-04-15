import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import mountainsSunset from '@/assets/mountainsSunset.svg'
import Landing from '@/pages/Landing/Landing'
import Navbar from '@/components/Navbar/Navbar'

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

        <Landing />
      </main>
    </>
  )
}
