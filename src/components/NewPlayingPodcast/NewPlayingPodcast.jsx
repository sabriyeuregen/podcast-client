import { usePlayerContext } from "../../store/player-context";
import { usePodcastContext } from "../../store/podcast-context";
import NewPlayingPodcastCard from "../NewPlayingPodcastCard/NewPlayingPodcastCard";
import "../PlayingPodcast/PlayingPodcast.scss";
//import Mp3 from "../../../MP3.mp3"

const NewPlayingPodcast = () => {
  const { item } = usePlayerContext();
  const { podcasts } = usePodcastContext();

  console.log(podcasts);

  const playingPodcast = item.map((i) => (
    <NewPlayingPodcastCard
      key={i.id}
      title={i.title}
      img={
        <img
          src={i.image}
          alt="podcast-img"
          style={{ width: "100%", height: "20rem", objectFit: "cover" }}
        />
      }
      summary={i.summary}
      mp3={i.mp3}
      speaker={i.speaker}
      publishedDate={i.publishedDate}
    />
  ));

  return (
    <div className="playingPodcast">
      <div className="playingPodcast-item">{playingPodcast}</div>
    </div>
  );
};

export default NewPlayingPodcast;
