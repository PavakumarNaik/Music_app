import { useState, useEffect } from "react";
import _ from 'lodash';
import { withRouter , useLocation} from "react-router-dom";
import { Card } from 'react-bootstrap';
import FooterMusicPlayer from './FooterMusicPlayer'

const AlbumDetail = (props) => {
  const location = useLocation();
  const [album, setAlbum]= useState({});
  const [currentPlayTrack, setCurrentPlayTrack,]=useState({})
  useEffect(() => {
    setAlbum(location.state.album);
    setCurrentPlayTrack(location.state.album.songs[0])
  }, []);
 const nextTrack =()=>{
  setCurrentPlayTrack(currentPlayTrack+ 1)
 }
 const prevTrack =()=>{
  setCurrentPlayTrack(currentPlayTrack -1)
 }
 console.log("albumLength",currentPlayTrack);
 console.log("album",album);

  return (
    <div className="container albumDetail">
    <div className="row">
             <div className="col-sm-6 col-md-5 col-lg-3">
             <Card style={{ width: '20rem' }} >
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
    <br/>
    <small>
     {location.state.album.artists.map((artist) => artist.name).join(', ')}
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
  
    <div className="albums">
              {location.state.album.songs.map((tracks) => (
             <div className="col-lg-12 albumList">
               {tracks.track}
               </div>
              ))}
            </div>
             </div>
                 

    </div>
    <footer>
    <FooterMusicPlayer currentPlayTrack={currentPlayTrack} nextTrack={nextTrack} prevTrack={prevTrack}/>
    </footer>
    </div>
  )
}
export default withRouter(AlbumDetail);