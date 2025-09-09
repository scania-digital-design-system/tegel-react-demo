import React from 'react';
import { TdsIcon } from '@scania/tegel-react';
import Tag from './Tag';
import './Tag.scss';

const TagExample = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Tag</div>
      <div className="tds-u-flex tds-u-gap2 tds-u-flex-dir-col">
        <div>
          <p>Different variants:</p>
          <div className="tag-demo-container">
            <Tag text="Neutral" variant="Neutral" />
            <Tag text="Information" variant="Information" />
            <Tag text="Success" variant="Success" />
            <Tag text="Warning" variant="Warning" />
            <Tag text="Error" variant="Error" />
            <Tag text="New" variant="New" />
          </div>
        </div>

        <div>
          <p>Different sizes:</p>
          <div className="tag-demo-container">
            <Tag text="Large" size="lg" variant="Information" />
            <Tag text="Small" size="sm" variant="Information" />
          </div>
        </div>

        <div>
          <p>With icons:</p>
          <div className="tag-demo-container">
            <Tag text="With Icon" variant="Neutral" prefix={<TdsIcon name="info" size="16px" />} />
            <Tag text="Success" variant="Success" prefix={<TdsIcon name="tick" size="16px" />} />
            <Tag text="Warning" variant="Warning" prefix={<TdsIcon name="warning" size="16px" />} />
            <Tag text="Error" variant="Error" prefix={<TdsIcon name="error" size="16px" />} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagExample;
