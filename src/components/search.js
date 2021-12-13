import React, { useState, useContext } from "react";
import Scroll from "./scroll";
import SearchList from "./searchList";
import { AlbumContext } from "../context/AlbumContext";

function Search() {
  const [filteredSongs, setFilteredSongs] = useState("");
  const [Album, setAlbum] = useContext(AlbumContext);
  const [showSuggestion, ShowSuggestion] = useState(false);

  const handleChange = (e) => {
    if (e.target.value !== "") {
      ShowSuggestion(true);
    } else {
      ShowSuggestion(false);
    }
    let filteredSong = Album.albums.items.filter((songs) => {
      return songs.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setFilteredSongs(filteredSong);
  };
  const suggestionOpen = e =>{
        // ShowSuggestion(false)
  }
  const suggestionClose = () =>{
    ShowSuggestion(false)
  }
  function searchList() {
    return (
      <Scroll>
        <SearchList filteredSongs={filteredSongs} suggestionClose={suggestionClose} />
      </Scroll>
    );
  }
  return (
    <>
      <div className="" >
        <input
          className=""
          type="text"
          placeholder="Search songs"
          onChange={handleChange}
            onBlur={suggestionOpen}
        />
     

      {showSuggestion ? (
        <section className="suggestion"> {searchList()}</section>
      ) : null}
       </div>
    </>
  );
}

export default Search;
