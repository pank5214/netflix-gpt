import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-6 md:px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-2xl md:text-6xl">{title}</h1>
      <p className="hidden md:inline-block w-1/3 py-6">{overview}</p>
      <div>
        <button className="my-4 p-2 md:p-3 md:my-0 px-4 md:px-10 bg-white text-black text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="hidden md:inline-block p-3 px-10 mx-2 bg-gray-400 text-black text-xl rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
