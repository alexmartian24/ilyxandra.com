import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>"i'm so unhappy"</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Focketh yew m8 (with changes)
        </h1>


        <div className={styles.grid}>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}