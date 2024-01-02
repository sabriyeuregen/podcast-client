import "./PlayingPodcast.scss";
import { usePlayerContext } from "../../store/player-context";
import PlayingPodcastCard from "../PlayingPodcastCard/PlayingPodcastCard";
import Mp3 from "../../../MP3.mp3";
import { usePodcastContext } from "../../store/podcast-context";
const PlayingPodcast = () => {
  const { item } = usePlayerContext();
  const { podcasts } = usePodcastContext;

  item.lenght === 0 && podcasts[0];

  const playingPodcast = item.map((i) => (
    <PlayingPodcastCard
      key={i.id}
      title={i.title}
      img={i.img}
      summary={i.summary}
      mp3={<audio src={Mp3} preload="metadata" />}
    />
  ));

  /*const firstPodcast = podcasts[1].map((i) => (
    <PlayingPodcastCard
      key={i.id}
      title={i.title}
      img={i.img}
      summary={i.summary}
      mp3={<audio src={Mp3} preload="metadata" />}
    />
  ));*/

  return (
    <div className="playingPodcast">
      <div className="playingPodcast-item">
        {/*item.lenght === 0 ? firstPodcast :*/ playingPodcast}
      </div>
    </div>
  );
};

export default PlayingPodcast;
