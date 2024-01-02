import "../PlayingPodcastCard/PlayingPodcastCard.scss";
import ReactPlayer from "react-player";
import { useRef, useState } from "react";
/*import Slider from "@mui/material/Slider";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Forward10Icon from "@mui/icons-material/Forward10";
import Replay10Icon from "@mui/icons-material/Replay10";
import VolumeDownIcon from "@mui/icons-material/VolumeDown"
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import { useState, useEffect, useRef } from "react";
import { SkipPrevious } from "@mui/icons-material";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";*/

const NewPlayingPodcastCard = ({
  title,
  summary,
  img,
  speaker,
  publishedDate,
  mp3,
  i,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
   const audioPlayer = useRef();
 /*const mp3 =
    "https://storage.googleapis.com/media-session/elephants-dream/the-wires.mp3";*/

  return (
    <div className="playingPodcastCard">
      <div className="playingPodcastCard-img">
        <div style={{ objectFit: "cover", width: "100%", height: "20rem" }}>
          {img}
        </div>
      </div>
      <ReactPlayer
        url={mp3}
        playing={isPlaying}
        controls={true}
        muted={true}
        width={"100%"}
        height={40}
      />
      <div className="playingPodcastCard-title">{title}</div>
      <div className="playingPodcastCard-speaker">{speaker}</div>
      <div className="playingPodcastCard-summary">{summary}</div>
    </div>
  );
};

export default NewPlayingPodcastCard;
