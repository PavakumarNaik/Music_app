import { useState, useContext, useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";
import AlbumCategory from "./albumCategory";
import TrendingSongs from "../components/trendingSongs";
import RadioSongs from "../components/radio";
import { Card } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'

const LandingPage = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Album, setAlbum] = useContext(AlbumContext);
  const { albums, artists, playlist } = Album;

  const setCategory = (Category) => {
    setSelectedCategory(Category);
    if (Category === "albums") {
      props.history.push(`/${Category}`, {
        CategoryData: Album.albums,
        CategoryName: Category,
      });
    } else if (Category === "artists") {
      props.history.push(`/${Category}`, {
        CategoryData: Album.artists,
        CategoryName: Category,
      });
    } else {
      props.history.push(`/${Category}`, {
        CategoryData: Album.playlist,
        CategoryName: Category,
      });
    }
  };

  return (
    <PerfectScrollbar>
    <div className="row">
      <div className="col-lg-10">
        <AlbumCategory
          albums={albums}
          artists={artists}
          playlist={playlist}
          selectedCategory={selectedCategory}
          setCategory={setCategory}
        />
        <TrendingSongs />
        <RadioSongs />
      </div>
      <div className="col-lg-2">
        <Card className="addImage">
          <Card.Img
            variant="top"
            src="https://lh3.googleusercontent.com/proxy/5IUsFof8_q4gZd4kFyrAKNdkIng5YflG4pYFAe6-T50h29RgAWCJWfrdS3ULeMkFlmCiZTANMyg9xPAjLJIioCMFAlIpVSiabyQwJG-RifvrDXURucj7bzq29vqILCB0nha7XvZQN3X-r6hJKSGoVVB8ioJPe_dSyoJlrU2MHc2ZCwuLyUYkDzA"
          />
        </Card>
      </div>
    </div>
    </PerfectScrollbar>

  );
};

export default withRouter(LandingPage);
