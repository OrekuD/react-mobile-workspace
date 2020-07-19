import React from "react";
import styles from "./styles.module.scss";

interface Props {
  children: React.ReactNode;
}

const IPhoneX = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.statusbar}>
        <div className={styles.notch} />
      </div>
      {children}
    </div>
  );
};

export default IPhoneX;
