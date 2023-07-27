import styles from './page.module.css'
import { About, Career, Project, Skills, Visual } from './sections'

export default function Home() {
  return (
    <main className={styles.main}>
      <Visual />
      <About />
      <Skills />
      <Project />
      <Career />
    </main>
  )
}
