import { useState, useEffect, useRef } from "react";

const Slider = () => {
    const [isDisabled, setIsDisabled] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [showTicks, setShowTicks] = useState(false);
    const [snapToTicks, setSnapToTicks] = useState(false);
    const sliderRef = useRef<HTMLTdsSliderElement>(null);
    const [scrubberSize, setScrubberSize] = useState("");
    const [readOnly, setReadOnly] = useState(false);
    const [showLabel, setShowLabel] = useState(false);


    useEffect(() => {
      if (sliderRef.current) {
        sliderRef.current.snap = !snapToTicks;
      }
    }, [snapToTicks]);

    const handleDisabledState = (event: CustomEvent) => {
			const { checked } = event.detail;
			setIsDisabled(checked);
    };

    const handleShowTooltip = (event: CustomEvent) => {
      const { checked } = event.detail;
      setShowTooltip(checked);
    }  

    const handleShowTicks = (event: CustomEvent) => {
      const { checked } = event.detail;
      setShowTicks(checked);    
    }

    const handleSnapToTicks = (event: CustomEvent) => {
      const { checked } = event.detail;
      setSnapToTicks(checked);
    };

    const handleRubberSizeChange = (event: CustomEvent) => {
      const { value } = event.detail;
      setScrubberSize(value);
    };

    const handleReadOnly = (event: CustomEvent) => {
      const { checked } = event.detail;
      setReadOnly(checked);
    };

    const handleShowLabel = (event: CustomEvent) => {
      const { checked } = event.detail;
      setShowLabel(checked);
    }
  
    return (
        <>
        <div className="tds-headline-02 tds-u-pb1">Slider</div>
				<br />
				<div className="tds-headline-04 tds-u-pb1">Disable Slider</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleDisabledState as EventListener)
					}
				>
					<div slot="label">{isDisabled ? 'Disable Slider' : 'Enable Slider'}</div>
        </tds-toggle>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Show Tooltip</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleShowTooltip as EventListener)
					}
				>
					<div slot="label">{showTooltip ? 'Hide Tooltip' : 'Show Tooltip'}</div>
				</tds-toggle>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Show Ticks</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleShowTicks as EventListener)
					}
				>
					<div slot="label">{ showTicks ? 'Hide Ticks' : 'Show Ticks'}</div>
				</tds-toggle>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Snap to Ticks</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleSnapToTicks as EventListener)
					}
				>
					<div slot="label">{ snapToTicks ? 'Disable Snap to Ticks' : 'Enable Snap to Ticks'}</div>
				</tds-toggle>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Scrubber Size</div>
        <tds-radio-button
          value="sm"
          name="scrubberSize"
          checked={scrubberSize === "sm"}
          ref={(element) => {
            if (element) {
              element.addEventListener('tdsChange', handleRubberSizeChange as EventListener);
            }
          }}
        >
          <div slot="label">Small</div>
        </tds-radio-button>
        <tds-radio-button
          value="lg"
          name="scrubberSize"
          checked={scrubberSize === "lg"}
          ref={(element) => {
            if (element) {
              element.addEventListener('tdsChange', handleRubberSizeChange as EventListener );
            }
          }}
        >
          <div slot="label">Large</div>
        </tds-radio-button>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Read Only</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleReadOnly as EventListener)
					}
				>
					<div slot="label">{ readOnly ? 'Disable read only' : 'Disable read only'}</div>
				</tds-toggle>
        <br />
        <div className="tds-headline-04 tds-u-pb1">Show Label</div>
        <tds-toggle
					ref={(element) =>
							element?.addEventListener("tdsToggle", handleShowLabel as EventListener)
					}
				>
					<div slot="label">{ showLabel ? 'Hide label' : 'Show label'}</div>
				</tds-toggle>
        <tds-slider
          id="tds-slider"
          tooltip={showTooltip}
					disabled={isDisabled}
          label={showLabel ? 'Label' : ''}
          controls
          min="0"
          max="100"
          ticks="4"
          snap={snapToTicks}
          show-tick-numbers={showTicks}
          scrubber-size={scrubberSize}
          readOnly={readOnly}
          ref={sliderRef}
        ></tds-slider>
        </>
    )

};

export default Slider;