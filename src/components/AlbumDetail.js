import { useState, useEffect } from "react";
import _ from "lodash";
import { withRouter, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import FooterMusicPlayer from "./FooterMusicPlayer";
import { shortTitle } from "../utils/helperFunctions";

const AlbumDetail = (props) => {
  const location = useLocation();
  const [album, setAlbum] = useState({});
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log("location.state.album",location.state.album);
    setAlbum(location.state.album);
  }, []);
  const nextTrack = () => {
    setIndex((prevIndex) =>
      album.songs?.length - 1 === prevIndex ? 0 : prevIndex + 1
    );
  };
  const prevTrack = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? album.songs?.length - 1 : prevIndex - 1
    );
  };
  const playListItem = (index) => {
    setIndex(index);
  };

  return (
    <div className="container albumDetail">
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Card style={{ width: "20rem" }}>
            <Card.Img
              variant="top"
              src={location.state.album.images[0].url}
              alt=""
            />
          </Card>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-8 albumSelection">
          <div className="titlesection">
            <h3> {location.state.album.name}</h3>
            <br />
            <small>
              {location.state.album.artists
                .map((artist) => artist.name)
                .join(", ")}
            </small>
          </div>
          <div className="row lyricsSection">
            <div className="col-lg-4">
              <p>{location.state.album.songs[0].track}</p>
            </div>
            <div className="col-lg-1">
              <p>{location.state.album.songs[0].duration}</p>
            </div>
          </div>
          <button className="play-btn">Play Song</button>
        </div>
        <div className="col-lg-1">
          <button onClick={props.history.goBack}>Back</button>
        </div>

        <div className="col-lg-12 albums">
          <div className="row col-lg-12 ">
            <div className="col-lg-3 ">
              <h6>Track</h6>
            </div>
            <div className="col-lg-3 ">
              <h6>Artists</h6>
            </div>
            <div className="col-lg-3 ">
              <h6>Album</h6>
            </div>
            <div className="col-lg-3 ">
              <h6>Duration</h6>
            </div>
          </div>
          {location.state.album.songs.map((tracks, index) => (
            <div
              className="col-sm-6 col-md-5 col-lg-12 albumList"
              onClick={() => playListItem(index)}
            >
              <img src={tracks.image} className="play" />
              <div className="col-lg-3 ">{shortTitle(tracks.track, 25)}</div>
              <div className="col-lg-3 ">{tracks.artistName}</div>
              <div className="col-lg-3 ">{tracks.album}</div>
              <div className="col-lg-3 ">{tracks.duration}</div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <FooterMusicPlayer
          currentPlayTrack={location.state.album.songs[index]}
          nextTrack={nextTrack}
          prevTrack={prevTrack}
        />
      </footer>
    </div>
  );
};
export default withRouter(AlbumDetail);
