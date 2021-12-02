import { useState, useEffect } from "react";
import _ from "lodash";
import { withRouter, useLocation } from "react-router-dom";
import { Card } from "react-bootstrap";
import FooterMusicPlayer from "./FooterMusicPlayer";

const AlbumDetail = (props) => {
  const location = useLocation();
  const [album, setAlbum] = useState({});
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setAlbum(location.state.album);
  }, []);
  const nextTrack = () => {
    setIndex(prevIndex => album.songs?.length - 1 === prevIndex ? 0 : (prevIndex + 1));
  };
  const prevTrack = () => {
    setIndex(prevIndex => prevIndex === 0 ? album.songs?.length - 1 : (prevIndex - 1));
  };
  console.log("album", album);

  return (
    <div className="container albumDetail">
      <div className="row">
        <div className="col-sm-6 col-md-5 col-lg-3">
          <Card style={{ width: "20rem" }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="card-image-link"
            >
              <Card.Img
                variant="top"
                src={location.state.album.images[0].url}
                alt=""
              />
            </a>
          </Card>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-9 albumSelection">
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
            <div className="col-lg-2">
              <p>song lyrics</p>
            </div>
            <div className="col-lg-2">
              <p>time</p>
            </div>
          </div>
          <button className="play-btn">Play Song</button>
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
          {location.state.album.songs.map((tracks) => (
            <div className="col-sm-6 col-md-5 col-lg-12 albumList">
              <img src={tracks.image} className="play" />
              <div className="col-lg-3 ">{tracks.track}</div>
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
