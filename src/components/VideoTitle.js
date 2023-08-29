import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-20 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="w-1/3 py-6">{overview}</p>
      <div>
        <button className="p-3 px-10 bg-white text-black text-xl rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="p-3 px-10 mx-2 bg-gray-400 text-black text-xl rounded-md hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
