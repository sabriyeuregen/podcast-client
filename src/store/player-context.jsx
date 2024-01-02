import { createContext, useContext, useState } from "react";

const PlayerContext = createContext();

export const PlayerContextWrapper = ({ children }) => {
  const [item, setItem] = useState([]);

  const playBtnClickHandler = ({i}) => {
    setItem([i]);
  };
  console.log(item)
  return (
    <PlayerContext.Provider value={{ item, playBtnClickHandler }}>
      {children}
    </PlayerContext.Provider>
  );
};
export const usePlayerContext = () => useContext(PlayerContext);
