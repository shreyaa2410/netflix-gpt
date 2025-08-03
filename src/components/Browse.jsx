import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import SearchGpt from "./SearchGpt";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgpt = useSelector((store) => store.gpt.toggleGpt);
  return (
    <>
      <Header />
      {showgpt ? (
        <SearchGpt />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </>
  );
};

export default Browse;
