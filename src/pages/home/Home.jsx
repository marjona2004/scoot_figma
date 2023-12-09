import React from 'react'
import { Hero, UseInfo } from '../../components/pages/home-components'
import { InfoCard } from '../../components/pages/home-components/infoCard'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <InfoCard/>
      <UseInfo/>
    </div>
  )
}
