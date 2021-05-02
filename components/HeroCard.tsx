import React from "react"
import Image from "next/image"

import { HeroData } from "../types/heros"
import styles from "../styles/Heroes.module.css"

const HeroCard = ({ hero }: { hero: HeroData }) => (
  <div className={styles.heroCard}>
    <Image
      src={hero.portrait}
      alt={`Portrait of ${hero.name}`}
      width={180}
      height={310}
    />
    <p>{hero.name}</p>
    <p>{hero.role}</p>
  </div>
)

export default HeroCard
