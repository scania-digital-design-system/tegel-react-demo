import React from 'react';
import { TdsBanner, TdsLink } from '@scania/tegel-react';

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
        </div>
      </TdsBanner>
    </div>
  );
};

export default MainBanner;
