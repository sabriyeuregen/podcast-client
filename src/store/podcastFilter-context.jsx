import { createContext, useContext } from "react";
import podcastData from "../podcastData.json";
import { usePodcastContext } from "./podcast-context";

const PodcastFilterContext = createContext();

export const PodcastFilterContextWrapper = ({ children }) => {

  const { podcasts } = usePodcastContext();

  var podcastCategory = podcasts?.reduce((result, item) => {
    result[item.category] = [];
    return result;
  },{});

  Object.keys(podcastCategory).forEach((category) => {
    let findCategories = podcasts.filter((title) => title.category == category);
    podcastCategory[category] = findCategories
  })

  return (
    <PodcastFilterContext.Provider
      value={{podcastCategory }}
    >
      {children}
    </PodcastFilterContext.Provider>
  );
};
export const usePodcastFilterContext = () => useContext(PodcastFilterContext);
