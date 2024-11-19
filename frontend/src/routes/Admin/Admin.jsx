import React, { useEffect } from 'react'
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
import { useAdminStore } from '../../store/adminStore'

export const Admin = () => {
  const { fetchAdminData,admin } = useAdminStore();
  useEffect(() => {
    fetchAdminData();
  }, [fetchAdminData]);

  return (
    <div>
      <Nav />
      {admin && (
        <Hero admin={admin}/>
      )}
      <MainAdmin />
      {admin && (
        <Banner admin={admin}/>
      )}
      <Plans />
      <RatingTitle />
      <Rating />
      <FAQ />
      <Footer />
    </div>
  )
}
