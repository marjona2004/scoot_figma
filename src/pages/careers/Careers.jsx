import React from 'react'
import { Hero } from '../../components/pages/careers-components/hero'
import { CareJoin } from '../../components/pages/careers-components/careJoin'
import { WhyJoinUs } from '../../components/pages/careers-components/whyJoinUs'
import { JoinInfo } from '../../components/pages/careers-components/joinInfo'

export const Careers = () => {
  return (
    <div>
      <Hero/>
      <CareJoin/>
      <WhyJoinUs/>
      <JoinInfo/>
    </div>
  )
}
