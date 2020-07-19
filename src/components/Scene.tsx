import React from "react";
import { Large, Medium, Small } from "./Variants";

interface Props {
  variant?: "large" | "medium" | "small";
  backgroundColor?: string;
  children: React.ReactNode;
  renderTitle?: React.ReactNode;
  renderExtraContent?: React.ReactNode;
}

const Scene = ({
  variant,
  children,
  backgroundColor,
  renderTitle,
  renderExtraContent,
}: Props) => {
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

  return (
    <div
      className="container"
      style={{ backgroundColor: backgroundColor ? backgroundColor : "maroon" }}
    >
      {renderTitle || renderExtraContent ? (
        <div className="content">
          {renderTitle}
          {renderExtraContent}
        </div>
      ) : (
        ""
      )}
      {item}
    </div>
  );
};

export default Scene;
