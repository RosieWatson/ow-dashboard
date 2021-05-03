import React from "react"
import {
  GiHealthIncrease,
  GiShotgunRounds,
  GiVibratingShield,
} from "react-icons/gi"

import { HeroRole } from "../types/heros"
import styles from "../styles/Heroes.module.css"

const RoleBlock = ({ role }: { role: HeroRole }) => {
  if (role === HeroRole.DAMAGE) {
    return (
      <div className={styles.heroRole}>
        <GiShotgunRounds />
        &nbsp;Damage
      </div>
    )
  }

  if (role === HeroRole.SUPPORT) {
    return (
      <div className={styles.heroRole}>
        <GiHealthIncrease />
        &nbsp;Support
      </div>
    )
  }

  if (role === HeroRole.TANK) {
    return (
      <div className={styles.heroRole}>
        <GiVibratingShield />
        &nbsp;Tank
      </div>
    )
  }

  return null
}

export default RoleBlock
