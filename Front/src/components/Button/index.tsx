import cs from "classnames";
import type { FC } from "react";

import styles from "./styles.module.css";

type Props = {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
};

export const Button: FC<Props> = ({ onClick, children, className }) => {
  return (
    <button className={cs(styles.aboba, className)} onClick={onClick}>
      {children}
    </button>
  );
};
