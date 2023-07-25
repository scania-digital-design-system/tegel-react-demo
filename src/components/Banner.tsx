import { useRef, useState } from 'react';

const Banner = () => {
  const banner = useRef<HTMLTdsBannerElement>(null);
  const [bannerVisibility, setBannerVisibility] = useState(true);

  const handleBanner = () => {
    setBannerVisibility(!bannerVisibility);
    if (banner.current) {
      bannerVisibility ? banner.current.hideBanner() : banner.current.showBanner();
    }
  };
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Banner</div>
      <tds-banner
        icon="error"
        header="This Banner won't close"
        variant="error"
        ref={(element) => {
          element?.addEventListener('tdsClose', (event) => {
            event.preventDefault();
          });
        }}
      >
        <div slot="banner-subheader">Due to its tdsClose event being prevented.</div>
      </tds-banner>
      <tds-banner icon="info" header="This Banner will close." variant="information">
        <div slot="banner-subheader">And it also has a link.</div>
        <tds-link slot="banner-link">
          <a href="/">Link example</a>
        </tds-link>
      </tds-banner>
      <tds-banner
        ref={banner}
        id="my-banner"
        icon="save"
        persistent
        header={`This Banner is "persistent".`}
      >
        <div slot="banner-subheader">That means it doesn't have a "close button"</div>
      </tds-banner>

      <div className="tds-u-mt-2">
        <p>But you can close the persistant banner programatically by toggling the toggle below.</p>
        <tds-toggle
          ref={(element) =>
            element?.addEventListener('tdsToggle', () => {
              handleBanner();
            })
          }
        >
          <div slot="label">{bannerVisibility ? 'Hide Banner' : 'Show Banner'}</div>
        </tds-toggle>
      </div>
    </div>
  );
};

export default Banner;
