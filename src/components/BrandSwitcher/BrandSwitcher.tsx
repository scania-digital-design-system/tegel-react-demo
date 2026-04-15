import { useEffect, useState } from 'react';
import { TdsToggle } from '@scania/tegel-react';

type Brand = 'scania' | 'traton';

const BRAND_CLASSES: Brand[] = ['scania', 'traton'];

const applyBrandClass = (brand: Brand) => {
  BRAND_CLASSES.forEach((b) => document.body.classList.remove(b));
  document.body.classList.add(brand);
};

const BrandSwitcher = () => {
  const [brand, setBrand] = useState<Brand>('scania');

  useEffect(() => {
    applyBrandClass(brand);
  }, [brand]);

  const toggleBrand = (event: any) => {
    setBrand(event.detail.checked ? 'traton' : 'scania');
  };

  return (
    <div className="mode-switcher">
      <TdsToggle size="sm" headline="Brand" checked={brand === 'traton'} onTdsToggle={toggleBrand}>
        <div slot="label">{brand === 'traton' ? 'Traton' : 'Scania'}</div>
      </TdsToggle>
    </div>
  );
};

export default BrandSwitcher;
