import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Paragraph: FC<Props> = ({ children }) => {
  return <p className="text-sm">{children}</p>;
};
