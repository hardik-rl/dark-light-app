import React, { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false || false);

  const handleToggleChange = (isChecked) => {
    console.log(`Switch is ${isChecked ? 'ON' : 'OFF'}`);
  };

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
    handleToggleChange(!isChecked);
  };

  return (
    <label className={`switch ${isChecked ? 'checked' : ''}`} onClick={handleToggle}>
      <div className="slider"></div>
    </label>
  );
};

export default Toggle;
