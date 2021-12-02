import { useState, useContext, useEffect } from "react";
import _ from "lodash";
import AlbumsList from "./AlbumbList";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";

const Data = {
  albums: {
    items: [
      {
        name: "Tumbe Te Zumba",
        id: 1,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/song/MmqK5pEbwR/qK5xn9LEbw/size_m_1637206402.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Love Nwtiti",
        id: 2,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/R7vKX6WmrP/7vKXAym63m/size_m.webp",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 3,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/w4MKPObojg/MKPgrR6Abo/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Justin's Summer Playlist",
        id: 4,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/Bp1bAynb02/1bAyB70Nb0/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 5,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/9MAWe97WyJ/AWe97o45Wy/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 6,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/jBr3gybR1m/r3gLg609WR/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 7,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ogNWkDbmXJ/NWkLqjAXbm/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
      {
        name: "Pyaar Karte Ho Na",
        id: 8,
        images: [
          {
            url: "https://a10.gaanacdn.com/gn_img/albums/ZaP374RWDy/P37OGQr93D/size_m.jpg",
          },
          { url: "" },
          { url: "" },
          { url: "" },
        ],
        songs:[
          {track:"Hit my line, call me whenever you want some me"},
          {track:"Even though that wasn't in the plans right"},
          {track:"King of this fly shit, yeah, I know"}
        ],
        artists: [{ name: "A. R. Rahman" }, { name: "Arijit singh" }],
      },
    ],
  },

  artists: {
    items: [
      {
        name: "SCiqiM5TcD0neuDrT+:82q0yNe83HhgjcduR9zZ7sIrU=",
        images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
      },
    ],
  },
  playlist: {
    items: [
      {
        name: "SCiqiM5TcD0neuDrT+82q0yNe83HhgjcduR9zZ7sIrU=",
        images: [{ url: "" }, { url: "" }, { url: "" }, { url: "" }],
      },
    ],
  },
};

const Home = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const [Album, setAlbum] = useContext(AlbumContext);
  const { albums, artists, playlist } = Data;
  console.log("playlist", playlist);
  useEffect(() => {
    setAlbum(albums);
  }, []);
  const setCategory = (Category) => {
    setSelectedCategory(Category);
    setAlbum();
  };

  console.log("album", Album);

  return (
    <>
      <div className="search-buttons">
        {!_.isEmpty(albums.items) && (
          <button
            className={`${
              selectedCategory === "albums" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("albums")}
          >
            Albums
          </button>
        )}
        {!_.isEmpty(artists.items) && (
          <button
            className={`${
              selectedCategory === "artists" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("artists")}
          >
            Artists
          </button>
        )}
        {!_.isEmpty(playlist.items) && (
          <button
            className={`${
              selectedCategory === "playlist" ? "btn active" : "btn"
            }`}
            onClick={() => setCategory("playlist")}
          >
            PlayLists
          </button>
        )}
      </div>
      <div className={`${selectedCategory === "albums" ? "" : "hide"}`}>
        {albums && <AlbumsList albums={albums} />}
      </div>
    </>
  );
};
export default withRouter(Home);
