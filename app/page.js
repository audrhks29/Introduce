'use client'
import { useInView } from 'framer-motion';
import styles from './page.module.css'
import { About, Career, Project, Skills, Visual } from './sections'
import { useRef } from 'react';

function Ani({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <div ref={ref}
      className={styles.aniWrap}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}>
      {children}
    </div>
  );
}
export default function Home() {
  return (
    <main className={styles.main}>
      <Ani><Visual /></Ani>
      <Ani><About /></Ani>
      <Ani><Skills /></Ani>
      <Project />
      <Career />
    </main>
  )
}


