import { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./context";
import Brands from "./Brands";
import Dropdown from "./Dropdown";
import Contact from "./Contact";


const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, [updateHomePage]);

  return (
    <>
      <HeroSection />
      <Brands />
      <Contact />

    </>
  );
};

export default Home;

