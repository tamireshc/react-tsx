import React from "react";
import "./App.css";
import Button from "./Components/Button";
import videoSrc from "./video.mp4";

function App() {
  const video = React.useRef<HTMLVideoElement>(null);
  const [play, setPlay] = React.useState(false);
  const [mute, setMute] = React.useState(false);

  return (
    <>
      <Button
        Video={video}
        Action={play ? "play" : "pause"}
        setPlay={setPlay}
        play={play}
      >
        {play ? "Play" : "Pause"}
      </Button>
      <Button Video={video} Action={"+2"}>
        + 2s
      </Button>
      <Button Video={video} Action={"1x"}>
        1x
      </Button>
      <Button Video={video} Action={"2x"}>
        2x
      </Button>
      <Button
        Video={video}
        Action={mute ? "mute" : "unmute"}
        setMute={setMute}
        mute={mute}
      >
        M
      </Button>
      <Button Video={video} Action={"pip"}>
        PiP
      </Button>
      <br></br>
      <video
        src={videoSrc}
        ref={video}
        style={{ width: "500px" }}
        controls
      ></video>
    </>
  );
}

export default App;
