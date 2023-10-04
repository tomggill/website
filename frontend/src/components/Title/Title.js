import React from 'react';
import "../../styles/styles.css"

const Title = ({title, style}) => {
  return (
    <h1 className="customTitle" style ={style}>
      {title}
    </h1>
  );
}

export default Title;