import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Hero } from '../../components/Hero/Hero'
import { Main } from '../../components/Main/Main'
import { Banner } from '../../components/Banner/Banner'
import { Plans } from '../../components/Plans/Plans'
import { RatingTitle } from '../../components/Rating/RatingTitle'
import { Rating } from '../../components/Rating/Rating'
import { FAQ } from '../../components/FAQ/FAQ'
import { Footer } from '../../components/Footer/Footer'
import { MainAdmin } from './components/Main/MainAdmin'

export const Admin = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <MainAdmin />
      <Banner />
      <Plans />
      <RatingTitle />
      <Rating />
      <FAQ />
      <Footer />
    </div>
  )
}
