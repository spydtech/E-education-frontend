import React,{useEffect} from "react";
import Navbar from "../../../Navbar";
import Footer from "../../../Home/footer/Footer";
import BlockChainHero from "./BlockChainHero";
import BlockChainCard from "./BlockChainCard";
import BlockChainNavigation from "./BlockChainAbout/BlockChainNavigation";
import BlockChainFoot from "./BlockChainFoot";
const BlockChain = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <BlockChainHero />
      <BlockChainCard />
      <BlockChainNavigation />
      <BlockChainFoot></BlockChainFoot>
      <Footer />
    </>
  );
};

export default BlockChain;
