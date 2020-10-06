import React, { useState, useEffect } from "react";
import Gif from "../Gif/Gif";
import getGifs from "../../services/getGifs";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

export default function ListOfGifs({ params }) {
  const { keyword } = params;
  const [loading, setLoading] = useState(false);
  const [gifs, setGifs] = useState([]);
  const [actualPage, setPage] = useState(0);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      setPage(1);
    });
  }, [keyword]);

  const nextGifs = () => {
    setPage((prevPage) => prevPage + 1);
    getGifs(keyword, actualPage).then((gifs) => {
      setGifs((prevGifs) => prevGifs.concat(gifs));
    });
  };

  const goTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="ListOfGifs-content">
      {loading ? (
        <p>Cargando...</p>
      ) : gifs.length === 0 && keyword ? (
        <p>No hemos encontrado nada con {decodeURI(keyword)}</p>
      ) : (
            <>
              {keyword ? (
                <h1>Gifs de {decodeURI(keyword)}</h1>
              ) : (
                  <h1>Últimas tendencias</h1>
                )}
              <div id="gallery">
                <InfiniteScroll
                  dataLength={gifs.length} //This is important field to render the next data
                  next={nextGifs}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}
                >
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 312: 1, 381: 2, 718: 3, 974: 4 }}
                  >
                    <Masonry gutter={"0.75em"}>
                      {gifs.map((gif) => (
                        <Gif key={gif.id} title={gif.title} id={gif.id} />
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                </InfiniteScroll>
                <button onClick={goTop} className="go-top">
                  <span className="material-icons">arrow_upward</span>
                </button>
              </div>
            </>
          )}
    </div>
  );
}
