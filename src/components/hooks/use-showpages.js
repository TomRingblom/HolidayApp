import { useState } from "react";

const useShowPages = () => {
  const [showMap, setShowMap] = useState(true);
  const [showDays, setShowDays] = useState(false);
  const [showSavedDays, setShowSavedDays] = useState(false);
  const [showCountrySearch, setShowCountrySearch] = useState(false);

  const setPages = (input) => {
    setShowMap(false);
    setShowDays(false);
    setShowCountrySearch(false);
    setShowSavedDays(false);

    if (input === "showMap") setShowMap(true);
    if (input === "showDays") setShowDays(true);
    if (input === "showSavedDays") setShowSavedDays(true);
    if (input === "showCountrySearch") setShowCountrySearch(true);
  };

  return {
    showMap,
    showDays,
    showSavedDays,
    showCountrySearch,
    setPages
  };
};

export default useShowPages;