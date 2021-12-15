import { useState, useContext, useEffect } from "react";
import React from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { withRouter } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import ReUsableCard from "../components/reUsableCard";

const TrendingSongs = (props) => {
  const [Album, setAlbum] = useContext(AlbumContext);
  // const[trendinSong, setTrendingSong] = useState([])

  useEffect(() => {
    // onSnapshot(collection(db,"trendingSongs"),(snapshot)=>{
    //     let trendinSongList = [];
    //     snapshot.docs.forEach(doc =>{trendinSongList.push(doc.data())
    //     })
    //     setTrendingSong(trendinSongList)
    // })
  }, []);

  const routeChange = (albumId) => {
    const CategoryName = "trendingSongs";
    props.history.push(`/${CategoryName}/${albumId.name}`, { album: albumId });
  };

  return (
    <div className="row trendingContainer">
      <h3 className="userDetails">Trending Songs</h3>
      <ReUsableCard
        data={Album.trendingSongs.items}
        routeChange={routeChange}
      />
    </div>
  );
};

export default withRouter(TrendingSongs);
