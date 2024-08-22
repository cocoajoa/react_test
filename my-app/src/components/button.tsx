import React from "react";
import styles from "./button.module.css";

type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const CustomButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.CustomButton}>
      {children}
    </button>
  );
};

export default CustomButton;
