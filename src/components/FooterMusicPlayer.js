import React from 'react';
import '../styles/FooterMusicPlayer.scss'
function FooterMusicPlayer(props) {
    const { currentPlayTrack, nextTrack, prevTrack}=props
    return (
        <div>
            FooterMusicPlayer
            <div className="controls">
                <div>{currentPlayTrack.track}</div>
        <button type="button" className="button repeat">
          <span className="icon">
            <i className="fa fa-fw fa-repeat"></i>
          </span>
        </button>
        <button type="button" className="button prev" onClick={()=>prevTrack()} >
          <span className="icon">
            <i className="fa fa-fw fa-step-backward"></i>
          </span>
        </button>
        <button type="button" className="button play" >
          <span className="icon">
            {/* <i className="fa-play"></i> "fa-pause"*/}
            <i className="far fa-play-circle"></i>
          </span>
        </button>
        <button type="button" className="button next" onClick={()=>nextTrack()} >
          <span className="icon">
            <i className="fa fa-fw fa-step-forward"></i>
          </span>
        </button>
        <button type="button" >
          <span className="icon">
            {/* <i className="fa-heart-o"></i> */}
          </span>
        </button>
      </div>
        </div>

    
    );
};

export default FooterMusicPlayer;