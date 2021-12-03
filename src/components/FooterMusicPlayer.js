import React from "react";
import "../styles/FooterMusicPlayer.scss";
import {
  BsFillPlayCircleFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
  BsFillVolumeUpFill,
  BsShuffle,
} from "react-icons/bs";
import { shortTitle } from "../utils/helperFunctions";

function FooterMusicPlayer(props) {
  const { currentPlayTrack, nextTrack, prevTrack } = props;
  return (
    <div>
      <div className="controls">
        <img src={currentPlayTrack.image} className="footerMusicPlay" />
        <div className="currentTrack">
          {shortTitle(currentPlayTrack.track, 25)}
        </div>

        <BsShuffle className="shuffle" />

        <BsFillSkipStartFill
          onClick={() => prevTrack()}
          className="skipStart"
        />

        <BsFillPlayCircleFill className="play" />

        <BsFillSkipEndFill className="skipEnd" onClick={() => nextTrack()} />

        <BsFillVolumeUpFill className="speaker" />
      </div>
    </div>
  );
}

export default FooterMusicPlayer;
