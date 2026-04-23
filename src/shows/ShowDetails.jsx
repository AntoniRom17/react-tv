import { useState } from "react";
import EpisodeList from "../episodes/EpisodeList";
import EpisodeDetails from "../episodes/EpisodeDetails";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  if (!show) {
    return (
      <div className="show-details">
        <p>Select a show to see its episodes.</p>
      </div>
    );
  }

  return (
    <div className="show-details">
      <h2>{show.name}</h2>
      <p className="genre">{show.genre}</p>

      <div className="layout">
        <EpisodeList
          episodes={show.episodes}
          selectedId={selectedEpisode?.number}
          onSelect={setSelectedEpisode}
        />

        <div className="details-panel">
          {!selectedEpisode ? (
            <p className="placeholder">Select an episode to see details.</p>
          ) : (
            <EpisodeDetails episode={selectedEpisode} />
          )}
        </div>
      </div>
    </div>
  );
}