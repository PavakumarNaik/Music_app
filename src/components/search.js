import React, { useState, useContext } from "react";
import Scroll from "./scroll";
import SearchList from "./searchList";
import { AlbumContext } from "../context/AlbumContext";
import { AiOutlineSearch } from "react-icons/ai";
import { styled, alpha } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import PerfectScrollbar from "react-perfect-scrollbar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "white",
  },
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));

function SearchBox() {
  const [filteredSongs, setFilteredSongs] = useState("");
  const [Album, setAlbum] = useContext(AlbumContext);
  const [showSuggestion, ShowSuggestion] = useState(false);
  const [searchResultFail, setSearchResultFail] = useState(true);

  const handleChange = (e) => {
    const searchEventValue = e.target.value;
    if (searchEventValue.length >= 3) {
      ShowSuggestion(true);
      let filteredSong = Album.albums.items.filter((songs) => {
        return songs.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      if (
        filteredSong === "" ||
        null ||
        undefined ||
        filteredSong.length === 0
      ) {
        setSearchResultFail(false);
      } else {
        setSearchResultFail(true);
      }
      setFilteredSongs(filteredSong);
    }else{
      ShowSuggestion(false);
    }
  };
  const suggestionOpen = (e) => {
    ShowSuggestion(false)
  };
  const suggestionClose = () => {
    ShowSuggestion(false);
  };
  function searchList() {
    return (
      <PerfectScrollbar>
        <SearchList
          filteredSongs={filteredSongs}
          suggestionClose={suggestionClose}
        />
      </PerfectScrollbar>
    );
  }
  return (
    <>
      <div className="search-section">
        <Search
          className="search-input"
          onChange={handleChange}
          onBlur={suggestionOpen}
        >
          <SearchIconWrapper>
            <AiOutlineSearch />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
          />
        </Search>
        {showSuggestion ? (
          <section className="suggestion">
            {" "}
            {searchResultFail
              ? searchList()
              : "Search Result Not Found..."}{" "}
          </section>
        ) : null}
      </div>
    </>
  );
}

export default SearchBox;
