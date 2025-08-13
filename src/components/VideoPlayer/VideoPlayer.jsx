import React, { use } from 'react'
import './VideoPlayer.css'
import video_1 from '../../assets/video.mp4';
import { useRef } from 'react';



const VideoPlayer = ({playVideo, setPlayVideo}) => {

    const player = useRef(null);

    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayVideo(false);
        }
    }

  return (
    <div className={`video-player ${playVideo ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <video src={video_1} autoPlay muted controls></video>
    </div>
  )
}



export default VideoPlayer