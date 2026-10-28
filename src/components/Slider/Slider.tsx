import { TdsSlider } from '@scania/tegel-react';
import { useState } from 'react';

const Slider = () => {
  const [showTooltipSimple, setShowTootipSimple] = useState<boolean>(false);
  const [showTooltipControls, setShowTootipControls] = useState<boolean>(false);
  const [value, setValue] = useState<string>('10');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Slider</h1>

      <div id="simple-slider">
        <h3>Simple Slider with Label</h3>
        <TdsSlider
          label="This is a Label for the Simple Slider"
          min="0"
          max="100"
          value={value}
          onTdsInput={(event) => setValue(event.target.value)}
        ></TdsSlider>
        <p>Note: This slider has value {value}. Drag the thumb to see the value change.</p>
      </div>

      <div id="simple-slider-tooltip">
        <h3>Simple Slider with tooltip on hover</h3>
        <TdsSlider
          min="0"
          max="100"
          tooltip={showTooltipSimple}
          onMouseEnter={() => setShowTootipSimple(true)}
          onMouseLeave={() => setShowTootipSimple(false)}
        ></TdsSlider>
      </div>

      <div id="controls-slider">
        <h3>Slider with Controls and tooltip on press</h3>
        <TdsSlider
          min="0"
          max="100"
          onTdsInput={() => {
            setShowTootipControls(true);
          }}
          showTickNumbers
          ticks="4"
          tooltip={showTooltipControls}
          onMouseLeave={() => setShowTootipControls(false)}
          controls
        ></TdsSlider>
      </div>

      <div id="input-slider">
        <h3>Slider with Input field, without tick numbers</h3>
        <TdsSlider min="0" max="100" ticks="4" input></TdsSlider>
      </div>

      <div id="input-slider-decimal">
        <h3>Slider with decimal Input field, with tick numbers</h3>
        <TdsSlider min="0" max="10" showTickNumbers ticks="4" input step="0.1"></TdsSlider>
      </div>

      <div id="input-slider-read-only">
        <h3>Slider with Input field, Read Only</h3>
        <TdsSlider
          min="0"
          max="100"
          value="37"
          showTickNumbers
          ticks="4"
          input
          readOnly
        ></TdsSlider>
      </div>

      <div id="input-slider-disabled">
        <h3>Controls Slider, Disabled</h3>
        <TdsSlider
          min="0"
          max="100"
          value="85"
          showTickNumbers
          ticks="9"
          controls
          disabled
        ></TdsSlider>
      </div>
    </div>
  );
};

export default Slider;
