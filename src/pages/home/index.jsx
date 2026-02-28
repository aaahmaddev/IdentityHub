import React from "react";
import Header from "../../assets/components/header";
import Hero from "../../pages/home/sections/hero";
import FirstSec from '../../pages/home/sections/first'
import SecondSec from '../../pages/home/sections/second'

const index = () => {
  return (
    <>
      <Header />
      <Hero />
      <FirstSec/>
      <SecondSec/>
    </>
  );
};

export default index;
