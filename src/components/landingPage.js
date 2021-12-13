import { useState, useContext, useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";
import AlbumCategory from "./albumCategory";
const LandingPage = (props) => {

    const [selectedCategory, setSelectedCategory] = useState("");
  const [Album, setAlbum] = useContext(AlbumContext);
  const { albums, artists, playlist } = Album;


  const setCategory = (Category) => {
     setSelectedCategory(Category);
     if(Category === "albums"){
        props.history.push(`/${Category}`, { CategoryData: Album.albums, CategoryName:Category } );
      }
      else if(Category === "artists"){
        props.history.push(`/${Category}`, { CategoryData: Album.artists, CategoryName:Category} );
      }
      else{
        props.history.push(`/${Category}`, { CategoryData: Album.playlist, CategoryName:Category} );
      }
    };

    return (
        <div>
                <AlbumCategory albums={albums} artists={artists} playlist={playlist} selectedCategory={selectedCategory} setCategory={setCategory}/>

            landging
        </div>
    );
};

export default withRouter(LandingPage);