import Head from "next/head"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OW Dashboard</title>
        <meta name="Overwatch statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>OW Dashboard</h1>
      </main>
    </div>
  )
}
