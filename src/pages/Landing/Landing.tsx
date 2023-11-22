import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import WorkExperience from './parts/WorkExperience/WorkExperience'
import Projects from './parts/Projects/Projects'
import Languages from './parts/Languages/Languages'
import AboutMe from './parts/AboutMe/AboutMe'
import Refferences from './parts/Refferences/Refferences'
import { Dispatch, SetStateAction } from 'react'

export default function Landing({
  setTheme,
  theme,
}: {
  setTheme: Dispatch<SetStateAction<'light-mode' | 'dark-mode'>>
  theme: string
}) {
  return (
    <div className={styles.landing}>
      <Navbar setTheme={setTheme} theme={theme} />

      <WorkExperience />

      <Projects />

      <Languages />

      <AboutMe />

      <Refferences />

      <footer style={{ color: '#fff', marginTop: 150 }}>
        created by nathaniel young with Next.js and React.js
      </footer>
    </div>
  )
}
