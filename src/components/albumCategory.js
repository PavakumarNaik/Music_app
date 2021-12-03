import React from 'react';
import _ from "lodash";

function AlbumCategory (props) {
    const {albums,artists,playlist, setCategory, selectedCategory }=props
    return (
        
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
       
    );
};

export default AlbumCategory;