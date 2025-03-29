import React from 'react';
import './ToggleSwitch.css';  

export default function ToggleSwitch({ isOn, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className={`toggle-switch ${isOn ? 'on' : 'off'}`}
    >
      {isOn ? 'ON 🌙' : 'OFF ☀️'}
    </button>
  );
}