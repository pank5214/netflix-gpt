import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_POSTER } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
        <div className="fixed -z-10">
        <img src={BACKGROUND_POSTER} alt="background-Poster" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
