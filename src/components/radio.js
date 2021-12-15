import { useContext, useEffect } from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import ReUsableCard from "../components/reUsableCard";

const RadioSongs = (props) => {
  const [Album, setAlbum] = useContext(AlbumContext);

  const routeChange = (albumId) => {
    const CategoryName = "radio";
    props.history.push(`/${CategoryName}/${albumId.name}`, { album: albumId });
  };

  return (
    <div className="row trendingContainer">
      <h3 className="userDetails">Radio</h3>
      <ReUsableCard data={Album.radioSongs.items} routeChange={routeChange} />
    </div>
  );
};

export default withRouter(RadioSongs);
