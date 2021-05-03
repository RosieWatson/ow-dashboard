import React from "react"
import Image from "next/image"

import { HeroData } from "../types/heros"
import styles from "../styles/Heroes.module.css"

import RoleBlock from "../components/RoleBlock"

const HeroCard = ({ hero }: { hero: HeroData }) => (
  <div className={styles.heroCard}>
    <Image
      src={hero.portrait}
      alt={`Portrait of ${hero.name}`}
      width={180}
      height={310}
    />
    <div>
      <h4 className={styles.heroName}>{hero.name}</h4>
      <RoleBlock role={hero.role} />
    </div>
  </div>
)

export default HeroCard
