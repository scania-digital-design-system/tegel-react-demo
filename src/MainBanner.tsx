import type React from 'react';
import { TdsBanner, TdsLink } from '@scania/tegel-react';

interface MainBannerProps {
  onClose?: () => void;
}

const MainBanner: React.FC<MainBannerProps> = ({ onClose }) => {
  return (
      <TdsBanner variant="information" icon="info" header="React demo" onTdsClose={onClose}>
        <div slot="subheader">
          This is a demo page in React using{' '}
          <TdsLink style={{ display: 'inline-block' }}>
            <a href="https://www.npmjs.com/package/@scania/tegel-react" target="_blank" rel="noopener">
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
  );
};

export default MainBanner;
