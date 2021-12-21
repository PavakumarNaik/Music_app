import { useState, useContext, useEffect } from "react";
import { AlbumContext } from "../context/AlbumContext";
import { withRouter } from "react-router-dom";
import AlbumCategory from "./albumCategory";
import TrendingSongs from "../components/trendingSongs";
import RadioSongs from "../components/radio";
import { Card } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
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
  console.log("userIdToken111", userIdToken);
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
          <Card className="addImage">
            <Card.Img
              variant="top"
              src="https://tpc.googlesyndication.com/simgad/8576587750209947595/downsize_200k_v1?sqp=4sqPyQSWAUKTAQgAEhQNzczMPhUAAABAHQAAAAAlAAAAABgAIgoNAACAPxUAAIA_Kk8IWhABHQAAtEIgASgBMAY4A0CAwtcvSABQAFgAYFpwAngAgAEAiAEAkAEAnQEAAIA_oAEAqAEAsAGAreIEuAH___________8BxQEtsp0-MhoIqgIQqgIYASABLQAAAD8wqgI4qgJFAACAPw&rs=AOga4qk7LEPC-tF-JXhbNST6vMMB5xZvyw"
            />
          </Card>
          <Card className="addImage">
            <Card.Img
              variant="top"
              src="https://backfills.ph.affinity.com/DirectCampaigns/RandomBrands/Acronis_160x600_2.png"
            />
          </Card>
          <Card className="addImage">
            <Card.Img
              variant="top"
              src="https://images.taboola.com/taboola/image/fetch/h_334,w_600,c_fill,g_xy_center,x_300,y_200/http%3A//cdn.taboola.com/libtrc/static/thumbnails/5fb452ce5ca68202e132b3077a554fb3.png"
            />
          </Card>
        </div>
      </div>
    </PerfectScrollbar>
  );
};

export default withRouter(LandingPage);
