import React,{useEffect} from 'react'
import Navbar from '../../../../../Navbar'
import Footer from '../../../../footer/Footer'
import CloudHero from './CloudHero'
import CloudCard from './CloudCard'
import CloudNavigation from './AboutCloud/CloudNavigation'
import CloudFoot from './CloudFoot'
const Cloud = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
    <CloudHero />
    <CloudCard />
    <CloudNavigation />
    <CloudFoot /> 
    <Footer />
    </>
  )
}

export default Cloud