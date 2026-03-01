import React from "react";
import Header from "../../assets/components/header";
import Hero from "../../pages/home/sections/hero";
import FirstSec from '../../pages/home/sections/first'
import SecondSec from '../../pages/home/sections/second'
import ThirdSec from "../../pages/home/sections/third"
import FourthSec from "../../pages/home/sections/fourth"

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <FirstSec/>
      <SecondSec/>
      <ThirdSec/>
      <FourthSec/>
    </>
  );
};

export default index;
