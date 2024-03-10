import React from 'react';
import './FloatingDivWrapper.css';

const FloatingDivWrapper = ({ children }) => {
  return (
    <div className='Wrapper-container'>
      {children}
    </div>
  );
}

export default FloatingDivWrapper;
