import "./PodcastCard.scss";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { IconButton } from "@mui/material";
import { usePlayerContext } from "../../store/player-context";

const PodcastCard = ({
  title,
  summary,
  image,
  mp3,
  speaker,
  publishedDate,
  i,
}) => {
  const { playBtnClickHandler } = usePlayerContext();

  return (
    <div className="podcastCard">
      <div className="podcastCard-img">{image}</div>
      <div className="podcastCard-info">
        <div className="podcastCard-info__playBtn">
          {
            <IconButton onClick={() => playBtnClickHandler({ i })}>
              <PlayArrowIcon />
            </IconButton>
          }
        </div>
        <div className="podcastCard-info__title">{title}</div>
        <div className="podcastCard-info__speaker">{speaker}</div>
        {/*<div className="podcastCard-info__summary">{summary}</div>*/}
        {/*<div className="podcastCard-info__mp3">{mp3}</div>*/}
        <div className="podcastCard-info__publishedDate">{publishedDate}</div>
      </div>
    </div>
  );
};

export default PodcastCard;
