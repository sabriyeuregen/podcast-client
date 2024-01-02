import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { collection, onSnapshot, query } from "firebase/firestore";

const PodcastContext = createContext();

export const PodcastContextWrapper = ({ children }) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let controller = new AbortController();
    (async () => {
      const q = query(collection(db, "podcast"));
      const jobgetting = onSnapshot(q, (snap) => {
        var podcastArr = [];

        snap.forEach((doc) => {
          podcastArr.unshift(doc.data());
        });
        setPodcasts(podcastArr);
        setLoading(false);
      });
      return () => jobgetting();
    })();
    return () => controller.abort();
  }, []);

  return (
    <PodcastContext.Provider value={{ podcasts, loading }}>
      {children}
    </PodcastContext.Provider>
  );
};
export const usePodcastContext = () => useContext(PodcastContext);
