import React from "react";
import { Large, Medium, Small } from "./Variants";

interface Props {
  variant?: "large" | "medium" | "small";
  children: React.ReactNode;
}

const Scene = ({ variant, children }: Props) => {
  let item = <Medium children={children} />;

  switch (variant) {
    case "large":
      item = <Large children={children} />;
      break;
    case "medium":
      item = <Medium children={children} />;
      break;
    case "small":
      item = <Small children={children} />;
      break;
    default:
      item = <Medium children={children} />;
      break;
  }

  return <div className="container">{item}</div>;
};

export default Scene;
