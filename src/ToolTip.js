import React, { useState } from 'react';
import './tooltip.css';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const ToolTip = () => {
  const [placement, setPlacement] = useState('bottom'); // Default placement

  const handlePlacementChange = event => {
    setPlacement(event.target.value);
  };

  return (
    <div className='container'>
      <div className="option">
        <select value={placement} onChange={handlePlacementChange} >
          <option value='left'>Left</option>
          <option value='right'>Right</option>
          <option value='top'>Top</option>
          <option value='bottom'>Bottom</option>
        </select>
      </div>
   
      <div className='btn-tooltip'>
        <Tippy className='tippy-content' content="Thanks for hovering! I'm a tooltip" placement={placement}>
          <button>Hover me!</button>
        </Tippy>
        
      </div>
    </div>
  );
}

export default ToolTip;
