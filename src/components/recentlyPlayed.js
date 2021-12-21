import { useState, useContext, useEffect } from "react";
import React from "react";
import { withRouter } from "react-router-dom";
import { AlbumContext } from "../context/AlbumContext";
import { shortTitle } from "../utils/helperFunctions";
import { AiOutlineMore } from "react-icons/ai";

const RecentlyPlayed = (props) => {
  const [Album, setAlbum] = useContext(AlbumContext);
  const [recentPlayedSongs,setRecentPlayedSongs]=useState()

  useEffect(()=>{
    const recentplayedData= JSON.parse(localStorage.getItem("recentData"))
    setRecentPlayedSongs(recentplayedData)
    console.log("recentplayedData123",recentplayedData);
  },[])
  const routeChange = (albumId) => {
    const CategoryName = "trendingSongs";
    props.history.push(`/${CategoryName}/${albumId.name}`, { album: albumId });
  };
  return (
    <div className="row recentPlayedContainer">
    <h3 className="userDetails">Recently Played</h3>
    <div className="row">
      {recentPlayedSongs?.map((album, index) => {
        return (
          <React.Fragment key={index}>
            <div
              className="row col-lg-4 recentlyplayed-card"
              onClick={routeChange}
            >
              <div className="col-lg-3 recentplayed-tumbnail">
                <img
                  className="recentplayed-img"
                  src={album.images[0].url}
                  alt=""
                />
              </div>
              <div className="col-lg-8">
                <h6>{shortTitle(album.name, 13)}</h6>
                <small>{album.artists[0].name}</small>
              </div>
              <div className="col-lg-1">
                <AiOutlineMore className="moreOption-btn"/>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
    </div>
  );
};

export default withRouter(RecentlyPlayed);
