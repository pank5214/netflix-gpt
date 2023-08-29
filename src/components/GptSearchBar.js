import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

    const langKey = useSelector(store=>store.config.lang)

  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 rounded-lg col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="m-4 py-2 px-4 rounded-lg bg-red-600 text-white text-lg col-span-3 hover:bg-red-700">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
