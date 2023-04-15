import React, { useEffect, useState } from 'react';
import './Header.css';

type HeaderPropsType = {
  title: string;
};

export const Header = (props: HeaderPropsType) => {
  const [header, setHeader] = useState('');

  useEffect(() => {
    const title = props.title;
    if (title === '/') {
      setHeader('HOME');
    } else if (title.startsWith('/')) {
      setHeader(title.slice(1).toUpperCase());
    }
  });

  return <div className={'header'}>{header}</div>;
};
