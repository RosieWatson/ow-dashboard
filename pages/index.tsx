import Head from "next/head"

import { HeroData } from "../types/heros"

import HeroCard from "../components/HeroCard"

import styles from "../styles/Home.module.css"

const Home = ({ heroData }: { heroData: Array<HeroData> }) => (
  <div className={styles.container}>
    <Head>
      <title>OW Dashboard</title>
      <meta name="Overwatch statistics" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <span>OW</span> Dashboard
      </h1>
      {heroData && (
        <div className={styles.heroCardContainer}>
          {heroData.map((hero) => (
            <HeroCard hero={hero} />
          ))}
        </div>
      )}
    </main>
  </div>
)

export async function getStaticProps() {
  const res = await fetch(`https://overwatch-api.tekrop.fr/heroes`)
  const heroData: Array<HeroData> = await res.json()

  if (!heroData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { heroData },
  }
}

export default Home
