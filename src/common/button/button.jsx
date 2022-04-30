import React from 'react';
import './button.css'
function Button(props) {
  const { content, icons } = props
  return (
    <div className="ctn">
      <div className="overlay"></div>
      <a href='#' className='button b-pink'>{icons}{content}</a>
    </div>
  );
}

export default Button;