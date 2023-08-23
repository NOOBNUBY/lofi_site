import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <iframe width="0" height="0" src="https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&mute=1&modestbranding=1&disablekb=1&enablejsapi=1" allow="autoplay;"></iframe>
      </div>
    </main>
  )
}
