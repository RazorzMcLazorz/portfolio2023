import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import WorkExperience from './parts/WorkExperience/WorkExperience'
import Projects from './parts/Projects/Projects'
import Languages from './parts/Languages/Languages'
import AboutMe from './parts/AboutMe/AboutMe'
import Refferences from './parts/Refferences/Refferences'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <Navbar />

      <WorkExperience />

      <Projects />

      <Languages />

      <AboutMe />

      <Refferences />

      <footer>created by nathaniel young with Next.js and React.js</footer>
    </div>
  )
}
