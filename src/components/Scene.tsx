import React from "react";
import { Note10, IPhoneX } from "./Phones";

interface Props {
  variant?: "note10" | "iphonex";
  children: React.ReactNode;
}

const Scene = ({ variant, children }: Props) => {
  let item = <IPhoneX children={children} />;

  switch (variant) {
    case "note10":
      item = <Note10 children={children} />;
      break;
    case "iphonex":
      item = <IPhoneX children={children} />;
      break;
    default:
      item = <IPhoneX children={children} />;
      break;
  }

  return <div className="container">{item}</div>;
};

export default Scene;
