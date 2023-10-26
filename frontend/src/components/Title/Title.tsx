import React from 'react';
import '../../styles/styles.css';

interface TitleProps {
  title: string;
}

function Title(props: TitleProps) {
  return (
    <h1 className="customTitle">
      {props.title}
    </h1>
  );
}

export default Title;
