import "./App.scss";
import Categories from "./components/Categories/Categories";
import PlayingPodcast from "./components/PlayingPodcast/PlayingPodcast";
import PodcastsWrapper from "./components/PodcastsWrapper/PodcastsWrapper";
import NewPlayingPodcast from "./components/NewPlayingPodcast/NewPlayingPodcast";

const App = () => {
  return (
    <div className="App">
      <Categories />
      <div className="container">
        <PodcastsWrapper />
        {/*<PlayingPodcast />*/}
        <NewPlayingPodcast/>
      </div>
    </div>
  );
};

export default App;
