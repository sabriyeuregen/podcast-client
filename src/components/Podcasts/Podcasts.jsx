import "./Podcasts.scss";
//import podcastData from "../../podcastData.json";
import PodcastCard from "../PodcastCard/PodcastCard";
import { usePodcastContext } from "../../store/podcast-context";
import { useCategoryFilterContext } from "../../store/categoryFilter";

//import { usePlayerContext } from "../../store/player-context";
const Podcasts = () => {
  const { podcasts } = usePodcastContext();
  const { categoryTitle } = useCategoryFilterContext();

  const filteredPodcast = podcasts?.filter((i) => i.category === categoryTitle);

  const defaultPodcasts = podcasts.map((i) => {
    return (
      <PodcastCard
        key={i.id}
        title={i.title}
        summary={i.summary}
        image={<img src={i.image} className="img" />}
        mp3={i.mp3}
        speaker={i.speaker}
        publishedDate={i.publishedDate}
        i={i}
      />
    );
  });

  const categoryOfPodcast = filteredPodcast.map((i) => {
    return (
      <PodcastCard
        key={i.id}
        title={i.title}
        summary={i.summary}
        image={<img src={i.image} className="img" />}
        mp3={i.mp3}
        speaker={i.speaker}
        publishedDate={i.publishedDate}
        i={i}
      />
    );
  });

  return (
    <div className="podcastList">
      {filteredPodcast.length === 0 ? defaultPodcasts : categoryOfPodcast}
    </div>
  );
};

export default Podcasts;
