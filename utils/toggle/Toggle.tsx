import React from "react";
import "./toggle.scss";

interface ToggleProps {
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ onToggle }) => {
  return (
    <label className="switch">
      <input className="cb" type="checkbox" onClick={onToggle} />
      <span className="toggle">
        <span className="right">dark</span>
        <span className="left">light</span>
      </span>
    </label>
  );
};

export default Toggle;
