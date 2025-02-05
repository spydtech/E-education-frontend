import React,{useEffect} from 'react'
import TryademoHero from './TryademoHero'
import Navbar from '../Navbar'
import Footer from '../Home/footer/Footer'
import TryADemoCard from './TryADemoCard'
import TryaDemoCard2 from './TryaDemoCard2'
const TryADemo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
    <TryademoHero />
    <TryADemoCard />
<TryaDemoCard2 />
<Footer />

    </>
  )
}

export default TryADemo