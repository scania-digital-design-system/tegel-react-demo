import React from 'react';
import { TdsTag } from '@scania/tegel-react';
import './Tag.scss';

interface TagProps {
  text: string;
  size?: 'lg' | 'sm';
  variant?: 'Success' | 'Warning' | 'New' | 'Neutral' | 'Information' | 'Error';
  prefix?: React.ReactNode;
}

const Tag: React.FC<TagProps> = ({ text, size = 'lg', variant = 'Neutral', prefix }) => {
  return (
    <TdsTag text={text} size={size} variant={variant}>
      {prefix && <span slot="prefix">{prefix}</span>}
    </TdsTag>
  );
};

export default Tag;
