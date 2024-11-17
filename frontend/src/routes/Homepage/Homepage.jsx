import React from 'react'
import { Nav } from '../../components/Nav/Nav'
import { Main } from '../../components/Main/Main'
import { Banner } from '../../components/Banner/Banner'
import { Plans } from '../../components/Plans/Plans'
import { Rating } from '../../components/Rating/Rating'
import { RatingTitle } from '../../components/Rating/RatingTitle'
import { FAQ } from '../../components/FAQ/FAQ'
import { Footer } from '../../components/Footer/Footer'
import { Hero } from '../../components/Hero/Hero'
import { useAuthStore } from '../../store/authStore'

export const Homepage = () => {
  const {isAdmin} = useAuthStore()
  return (
    <div>
      <Nav />
      <Hero />
      <Main />
      <Banner />
      <Plans />
      <RatingTitle />
      <Rating />
      <FAQ />
      <Footer />
    </div>
  )
}
