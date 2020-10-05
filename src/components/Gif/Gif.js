import React from "react";
import fileDownload from "js-file-download";

export default function Gif({ id, title }) {
  const video_URL = `https://i.giphy.com/media/${id}/giphy.mp4`;
  const gif_URL = `https://i.giphy.com/${id}.gif`;
  const handleClick = () => {
    fetch(gif_URL, {})
      .then((res) => res.blob())
      .then((data) => fileDownload(data, title.replaceAll(" ", "_") + ".gif"));
  };
  return (
    <div className="gif">
      <video preload="true" autoPlay muted loop>
        <source src={video_URL} type="video/mp4" />
      </video>
      <button onClick={handleClick}>
        <span className="large material-icons" title="Descargar">
          get_app
        </span>
      </button>
    </div>
  );
}
