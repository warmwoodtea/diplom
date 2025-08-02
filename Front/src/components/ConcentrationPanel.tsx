import { type FC } from "react";
import { useTranslate } from "../hooks";

type Props = {
  name?: string;
  onClear: () => void;
};

export const ConcentrationPanel: FC<Props> = ({ name, onClear }) => {
  const translate = useTranslate();

  if (!name) return null;

  return (
    <div className="border p-2 bg-yellow-50">
      <strong>{translate("concentration-panel.title")}</strong> {name}
      <button onClick={onClear} className="ml-4 text-red-500">
        {translate("concentration-panel.end")}
      </button>
    </div>
  );
};
