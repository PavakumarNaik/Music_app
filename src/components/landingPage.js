import { useState, useContext, useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";
import AlbumCategory from "./albumCategory";
import TrendingSongs from "../components/trendingSongs";
import RadioSongs from "../components/radio";
import PerfectScrollbar from "react-perfect-scrollbar";
import GoogleAdds from './googleAdds';
import RecentlyPlayed from "../components/recentlyPlayed";

const LandingPage = (props) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [Album, setAlbum] = useContext(AlbumContext);
  const { albums, artists, playlist } = Album;
  const [userIdToken, setUserIdToken] = useState(false);

  useEffect(() => {
    const userIdToken = localStorage.getItem("userID");
    console.log("localStorage", userIdToken);
    if (userIdToken) {
      setUserIdToken(userIdToken);
    }
    console.log("idTokenuseEffect", userIdToken);
  }, [userIdToken]);

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
          {userIdToken ? (
            <AlbumCategory
              albums={albums}
              artists={artists}
              playlist={playlist}
              selectedCategory={selectedCategory}
              setCategory={setCategory}
            />
          ) : null}
          <div className={userIdToken ? "" : "mt-5"}>
            <TrendingSongs />
            <RadioSongs />
            <RecentlyPlayed />
          </div>
        </div>
        <div className="col-lg-2">
         <GoogleAdds/>
        </div>
      </div>
    </PerfectScrollbar>
  );
};

export default withRouter(LandingPage);
