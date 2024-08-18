import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
import GoogleMap from "../../components/GoogleMap/GoogleMap";
// import Restaurent from '../../components/Restaurent/Restaurent'

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      {/* <Restaurent category={category}/> */}
      <AppDownload />
      <GoogleMap />
  
    </>
  );
};

export default Home;
