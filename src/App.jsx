import { useState } from "react";
import { tvShows } from "./shows/data";
import ShowSelection from "./shows/ShowSelection";
import ShowDetails from "./shows/ShowDetails";

/**
 * React TV is a web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */
export default function App() {
  const [selectedShow, setSelectedShow] = useState(null);

  return (
    <>
      <header>
        <p>React TV</p>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>

      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}