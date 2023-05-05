import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Controller() {
  const {
    currentTrackIndex,
    isPlaying,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayPreviousTrack = () => {
    playPreviousTrack();
  };

  const handlePlayNextTrack = () => {
    playNextTrack();
  };

  return (
    <div className="controller">
      {/* <button onClick={handlePlayPreviousTrack}>
        <svg viewBox="0 0 24 24">
          <path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"></path>
        </svg>
      </button> */}
      <SkipPreviousIcon onClick={handlePlayPreviousTrack} />

      {/* <button onClick={handleTogglePlay}>
        <svg viewBox="0 0 24 24">
          {isPlaying ? (
            <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"></path>
          ) : (
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"></path>
          )}
        </svg>
      </button> */}

      <span onClick={handleTogglePlay}>
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
      </span>

      {/* <button onClick={handlePlayNextTrack}>
        <svg viewBox="0 0 24 24">
          <path d="m6 18 8.5-6L6 6v12zM16 6v12h2V6h-2z"></path>
        </svg>
      </button> */}
      <SkipNextIcon onClick={handlePlayNextTrack} />
    </div>
  );
}

export default Controller;
