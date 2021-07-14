import React, { useState } from 'react';
import './Switch.scss'

export interface SwitchProps {
    className?: string
    theme?: string
    label: string
    noText?: boolean
    large?: boolean
    onToggle: (mode: boolean) => void;
}
 
const Switch: React.FC<SwitchProps> = (props) => {
  const {large = false, className = 'switch', label, noText = false, theme, onToggle} = props;

  const [toggleOn, setToggleOn] = useState(false)

  let switchClass = className;
  let id = label;

  large == true ? switchClass += ' switch--large' : null;
  noText == true ? switchClass += ' switch--no-text' : null;
  theme == 'success' ? switchClass += ' switch--success' : null;

  const handleToggle = () => {
    setToggleOn(!toggleOn)
    console.log(!toggleOn)
    onToggle(!toggleOn)
  }

  return (
    <div aria-label={label} className={switchClass}>
      <label className="switch__label" htmlFor={id}>
      <input role="switch" type="checkbox" className="switch__input" id={id} onChange={handleToggle}/>    
        <span className="switch__text" data-on="ON" data-off="OFF"></span>
        <span className="switch__handle"></span>
      </label>
    </div>
  );
}
 
export default Switch;