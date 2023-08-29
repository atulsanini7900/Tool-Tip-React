import React, { useState } from 'react';  // Import React and useState
import './tooltip.css';  // Import your custom tooltip styles
import Tippy from '@tippyjs/react';  // Import the Tippy component from the package
import 'tippy.js/dist/tippy.css';  // Import Tippy's default styles

const ToolTip = () => {
  const [placement, setPlacement] = useState('bottom'); // Default placement state

  const handlePlacementChange = event => {
    setPlacement(event.target.value); // Update the placement state when select value changes
  };

  return (
    <div className='container'>
      <div className="option">
        {/* Select element to choose tooltip placement */}
        <select value={placement} onChange={handlePlacementChange}>
          <option value='left'>Left</option>
          <option value='right'>Right</option>
          <option value='top'>Top</option>
          <option value='bottom'>Bottom</option>
        </select>
      </div>

      <div className='btn-tooltip'>
        {/* Tippy component that displays a tooltip on button hover */}
        <Tippy className='tippy-content' content="Thanks for hovering! I'm a tooltip" placement={placement}>
          <button>Hover me!</button>
        </Tippy>
      </div>
    </div>
  );
}

export default ToolTip;  // Export the ToolTip component
