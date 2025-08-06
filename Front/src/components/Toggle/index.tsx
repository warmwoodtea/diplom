import { type FC, useState } from "react";

import "./styles.css";

type Props = {
  label?: string;
  onChange?: (isActive: boolean) => void;
};

export const Toggle: FC<Props> = ({ label, onChange }) => {
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    const newState = !selected;
    setSelected(newState);
    onChange?.(newState);
  };

  const containerClass = `spell-concentration-container ${selected ? "active" : "inactive"}`;
  const switchClass = `concentration-switch ${selected ? "active" : "inactive"}`;
  const sliderClass = `switch-slider ${selected ? "active" : "inactive"}`;

  return (
    <label className={containerClass}>
      <span>{label}</span>

      <input
        type="checkbox"
        checked={selected}
        onChange={handleChange}
        className="hidden-checkbox"
      />

      <div className={switchClass}>
        <div className={sliderClass} />
      </div>
    </label>
  );
};
