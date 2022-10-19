import React, { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Character from "./components/Character";
import Subscription from "./components/Subscription";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [characterName, setCharacterName] = useState("");
  const [delayedComponent, setDelayedComponent] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://demoapi.com/api/series/howimetyourmother")
      .then((response) => response.json())
      .then((data) => setCharacterName(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setInterval(() => {
      setDelayedComponent(true);
    }, 10000);
  }, []);

  return (
    <>
      <h1>Series Api</h1>
      {loading && <LoadingMask />}
      {characterName && <Character characterName={characterName} />}
      {delayedComponent && <Subscription />}
    </>
  );
};

export default App;
