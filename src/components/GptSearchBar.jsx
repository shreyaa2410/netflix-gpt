import React, { useRef } from "react";
import { useSelector } from "react-redux";
import languages from "../utils/languagesConstant";
import openai from "../utils/openai";
 

const GptSearchBar = () => {
  const lang = useSelector((store) => store.gpt.languageChange);
  const searchText = useRef(null);
  const handleSearchGpt = async () => {
    const text = searchText.current.value;
     const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      text +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo-0125",
    });


    console.log(gptResults.choices);
  };

  return (
    <div className="w-[70%] grid grid-cols-12 items-center">
      <input
        name="searchgpt"
        type="text"
        ref={searchText}
        placeholder={languages[lang].gptSearchPlaceholder}
        className="bg-white px-2 py-1.5 rounded-none mr-2 col-span-8"
      />
      <button
        className="bg-red-800 p-2 my-2 col-span-4"
        onClick={handleSearchGpt}
      >
        {languages[lang].search}
      </button>
    </div>
  );
};

export default GptSearchBar;
