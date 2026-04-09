import { useState } from 'react';
import { TdsToggle } from '@scania/tegel-react';

interface BrandSwitcherProps {
  headline: string;
  isTraton: boolean;
  onToggle: (isTraton: boolean) => void;
}

const BrandSwitcher = ({ headline, isTraton, onToggle }: BrandSwitcherProps) => {
  const toggleBrand = () => {
    onToggle(!isTraton);
  };

  return (
    <div className="mode-switcher">
      <TdsToggle size="sm" checked={isTraton} headline={headline} onTdsToggle={toggleBrand}>
        <div slot="label">{isTraton ? 'Traton' : 'Scania'}</div>
      </TdsToggle>
    </div>
  );
};

export default BrandSwitcher;
