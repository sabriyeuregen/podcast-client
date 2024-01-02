import { IconButton, duration, styled } from "@mui/material";
import "./PlayingPodcastCard.scss";
import Slider from "@mui/material/Slider";
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
import PauseIcon from "@mui/icons-material/Pause";
import Mp3 from "../../../MP3.mp3";

const PSlider = styled(Slider)(({...props}) => ({
  color: 'lime',
  height: 2,
  '&:hover': {
      cursor: 'auto',
  },
  '& .MuiSlider-thumb': {
      width: '13px',
      height: '13px',
      display: props.thumbless ? 'none' : 'block',
  }
}))

const playList = [Mp3, Mp3,Mp3]

const PlayingPodcastCard = ({ title, summary, mp3, img }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [index, setIndex] = useState(0)
  const [volume, setVolume ] = useState(30);
  const [mute, setMute] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  //const [ timeRemaining, setTimeRemaining ] = useState(0);
  const [duration, setDuration] = useState(0);

  const [currentSong] = useState(playList[index]);

  const audioPlayer = useRef();

  useEffect(( ) => {
    
    if(audioPlayer) {
      audioPlayer.current.volume = volume / 100;
    }

    if(isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
      const _elapsed = Math.floor(audioPlayer?.current.currentTime)
  
      setDuration(_duration);
      setElapsed(_elapsed);
    }, 100)
    }
  }, [volume, isPlaying])

  function formatTime(time) {
    if(time && !isNaN(time)){
        const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60);
        const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60);

        return `${minutes}:${seconds}`;
    }
    return '00:00';
}

  const playBtnHandler = () => {
    if(!isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause()
    }
    setIsPlaying(pre => !pre);
  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  }

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  }
  
  const toggleSkipForward = () => {
    if(index >= playList.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playList[0];
      audioPlayer.current.play();
  } else {
      setIndex(prev => prev + 1);
      audioPlayer.current.src = playList[index + 1];
      audioPlayer.current.play();
  }
  }

  const toggleSkipBackward = () => {
    if(index > 0) {
        setIndex(prev => prev - 1);
        audioPlayer.current.src = playList[index - 1];
        audioPlayer.current.play();
    }
}

  function VolumeBtns () {
    return mute
    ? <VolumeOffIcon className="icon" onClick={() => setMute(!mute)} />
    : volume <= 20 ? <VolumeMuteIcon className="icon" onClick={() => setMute(!mute)} />
    : volume <= 75 ? <VolumeDownIcon className="icon" onClick={() => setMute(!mute)} />
    : <VolumeUpIcon className="icon" onClick={() => setMute(!mute)} />
  }

  return (
    <div className="playingPodcastCard">
      <div className="playingPodcastCard-img">
        <img
          src={img}
          style={{ objectFit: "cover", width: "100%", height: "20rem" }}
        />
      </div>
      <audio src={currentSong} ref={audioPlayer} muted={mute}/>
      <div className="playingPodcastCard-title">{title}</div>
      {/*<div className="playingPodcastCard-summary">{summary}</div>*/}
      <div className="playingPodcastCard-buttons">
        <IconButton className="iconBtn">
          <SkipPrevious className="icon" onClick={toggleSkipBackward}/>
        </IconButton>
        <IconButton className="iconBtn">
          <Replay10Icon className="icon" onClick={toggleBackward}/>
        </IconButton>
        <IconButton className="iconBtn" onClick={playBtnHandler}>
          {isPlaying ? (
             <PauseIcon className="icon" />
          ) : (
            <PlayCircleIcon className="icon" />
          )}
        </IconButton>
        <IconButton className="iconBtn">
          <Forward10Icon className="icon" onClick={toggleForward}/>
        </IconButton>
        <IconButton className="iconBtn">
          <SkipNextIcon className="icon" onClick={toggleSkipForward}/>
        </IconButton>
      </div>
      <div className="playingPodcastCard-audio">
        <IconButton className="iconBtn">
          <VolumeBtns/>
          <Slider
            valueLabelDisplay="auto"
            className="audio-slider"
            size="small"
            min={0}
            max={100}
            value={volume}
            onChange={(e, v) => setVolume(v)}
            sx={{color:"#f77a36"}}
          />
          {/*<VolumeUpIcon className="icon" />*/}
        </IconButton>
      </div>
      <div className="playingPodcastCard-slider__progress">
        <span className="time">{formatTime(elapsed)}</span>
        <Slider
          thumbless
          value={elapsed}
          max={duration}
          sx={{color:"#f77a36"}}
        />
        <span className="time">{formatTime(duration - elapsed)}</span>
      </div>
      {/*<div className="playingPodcastCard-mp3">{mp3}</div>*/}
    </div>
  );
};

export default PlayingPodcastCard;
