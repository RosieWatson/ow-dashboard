export interface HeroData {
  key: string
  name: string
  role: HeroRole
  portrait: string
}

export enum HeroRole {
  DAMAGE = 'damage',
  SUPPORT = 'support',
  TANK = 'tank'
}
