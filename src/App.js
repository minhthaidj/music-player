import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import Header from "./components/Header";
import { Card } from "@mui/material";

const App = () => {
  return (
    <MusicPlayerProvider>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Header />
        <TrackList />
        <Controller />
      </Card>
    </MusicPlayerProvider>
  );
};

export default App;
