import React, { useState, useEffect } from 'react';

interface TdsRadioButtonCustomEvent<T> extends Event {
  target: EventTarget & T;
}

const Block: React.FC = () => {
  const [modeVariant, setModeVariant] = useState('primary');

	const capitalizeFirst = (str: string) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const handleVariantChange = (event: TdsRadioButtonCustomEvent<{ radioId: string; value: string }>) => {
    setModeVariant(event.target.value);
  };

  useEffect(() => {
    const tdsRadioButtons = document.querySelectorAll('tds-radio-button');

		const handleChange = (event: Event) => {
      const target = event.target as HTMLElement;
      const value = target.getAttribute('value');
      if (value) {
        setModeVariant(value);
      }
    };

    tdsRadioButtons.forEach((tdsRadioButton) => {
      tdsRadioButton.addEventListener('tdsChange', handleChange);

      return () => {
        tdsRadioButton.removeEventListener('tdsChange', handleChange);
      };
    });
  }, []);

  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Block</div>
      <div>
        <tds-radio-button
          name="variant"
          value="primary"
          radio-id="variant-option-1"
          checked={modeVariant === 'primary'}
					onTdsChange={handleVariantChange}
        >
          <div slot="label">Primary variant</div>
        </tds-radio-button>

        <tds-radio-button
          name="variant"
          value="secondary"
          radio-id="variant-option-2"
          checked={modeVariant === 'secondary'}
					onTdsChange={handleVariantChange}
        >
          <div slot="label">Secondary variant</div>
        </tds-radio-button>
      </div>

      <tds-block mode-variant={modeVariant}>
			<div className="tds-headline-02 tds-u-pb1">{capitalizeFirst(modeVariant)} Block</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend ultrices. Nunc
          venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et ligula consectetur interdum.
          Vestibulum condimentum, augue vitae lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
          Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque
          dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum.
          Nunc rutrum nibh ut arcu egestas egestas.
        </p>
      </tds-block>
    </div>
  );
};

export default Block;