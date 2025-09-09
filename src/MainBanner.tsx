import React from 'react';
import { TdsBanner, TdsLink, TdsIcon } from '@scania/tegel-react';
import Tag from './components/Tag/Tag';

interface MainBannerProps {
  style?: React.CSSProperties;
  className?: string;
  onClose?: () => void;
}

const MainBanner: React.FC<MainBannerProps> = ({ style, className, onClose }) => {
  return (
    <div style={style} className={className}>
      <TdsBanner variant="information" icon="info" header="React demo" onTdsClose={onClose}>
        <div slot="subheader">
          This is a demo page in React using{' '}
          <TdsLink style={{ display: 'inline-block' }}>
            <a href="https://www.npmjs.com/package/@scania/tegel-react" target="_blank">
              @scania/tegel-react
            </a>
          </TdsLink>
          <br />
          You can find the source code in this{' '}
          <TdsLink style={{ display: 'inline-block' }}>
            <a
              href="https://github.com/scania-digital-design-system/tegel-react-demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github repository
            </a>
          </TdsLink>
          <br />
          <br />
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Tag text="React Demo" variant="Information" />
            <Tag text="New Feature" variant="New" />
            <Tag text="Success" variant="Success" />
            <Tag text="Warning" variant="Warning" />
            <Tag text="With Icon" variant="Neutral" prefix={<TdsIcon name="info" size="16px" />} />
          </div>
        </div>
      </TdsBanner>
    </div>
  );
};

export default MainBanner;
