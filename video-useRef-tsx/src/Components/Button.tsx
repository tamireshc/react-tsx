import React from "react";

type ButtonProps = React.ComponentProps<"button"> & {
  children: string;
  Video: React.RefObject<HTMLVideoElement>;
  Action: string;
  setPlay?: React.Dispatch<React.SetStateAction<boolean>>;
  play?: boolean;
  setMute?: React.Dispatch<React.SetStateAction<boolean>>;
  mute?: boolean;
};

const handleClick = (
  element: React.RefObject<HTMLVideoElement>,
  action: string
) => {
  if (element.current) {
    switch (action) {
      case "play":
        element.current?.play();
        break;
      case "pause":
        element.current?.pause();
        break;
      case "+2":
        element.current.currentTime = element.current.currentTime + 2;
        break;
      case "1x":
        element.current.playbackRate = 1;
        break;
      case "2x":
        element.current.playbackRate = 2;
        break;
      case "mute":
        element.current.muted = true;
        break;
      case "unmute":
        element.current.muted = false;
        break;
      case "pip":
        element.current.requestPictureInPicture();
        break;
    }
  }
};

const Button = ({
  children,
  Video,
  Action,
  setPlay,
  play,
  setMute,
  mute,
}: ButtonProps) => {
  return (
    <button
      onClick={() => {
        handleClick(Video, Action);
        setPlay && setPlay(!play);
        setMute && setMute(!mute);
      }}
    >
      {children}
    </button>
  );
};

export default Button;
