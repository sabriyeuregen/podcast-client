import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PlayerContextWrapper } from "./store/player-context.jsx";
import { PodcastFilterContextWrapper } from "./store/podcastFilter-context.jsx";
import { PodcastContextWrapper } from "./store/podcast-context.jsx";
import { CategoryFilterWrapper } from "./store/categoryFilter.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PodcastContextWrapper>
  <PlayerContextWrapper>
    <PodcastFilterContextWrapper>
      <CategoryFilterWrapper>
      <App />
      </CategoryFilterWrapper>
    </PodcastFilterContextWrapper>
  </PlayerContextWrapper>
  </PodcastContextWrapper>
);
