import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const Small = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>;
};

export default Small;
