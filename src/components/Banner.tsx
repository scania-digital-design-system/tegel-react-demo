import { useEffect, useRef, useState } from 'react';

const Banner = () => {
  const [bannerVisibility, setBannerVisibility] = useState(true);

  const defaultBannerRef = useRef<HTMLTdsBannerElement>(null);
  const errorBannerRef = useRef<HTMLTdsBannerElement>(null);
  const informationBannerRef = useRef<HTMLTdsBannerElement>(null);
  const toggleRef = useRef<HTMLTdsToggleElement>(null);


  useEffect(() => {
    const handleToggle = () => {
      const errorBanner = errorBannerRef.current;
      const informationBanner = informationBannerRef.current;
      const defaultBanner = defaultBannerRef.current;

      bannerVisibility ? errorBanner?.hideBanner() : errorBanner?.showBanner()
      bannerVisibility ? informationBanner?.hideBanner() : informationBanner?.showBanner()
      bannerVisibility ? defaultBanner?.hideBanner() : defaultBanner?.showBanner()

      setBannerVisibility(!bannerVisibility)
    };
    const preventClose = (event: TdsCloseEvent) => {
      event.preventDefault();
    };

    const toggle = toggleRef.current
    const errorBanner = errorBannerRef.current;

    toggle?.addEventListener('tdsToggle', handleToggle)
    errorBanner?.addEventListener('tdsClose', preventClose);

    return () => {
      errorBanner?.removeEventListener('tdsClose', preventClose);
      toggle?.removeEventListener('tdsToggle', handleToggle);
    }
  });
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Banner</div>
      <div className="tds-u-flex tds-u-flex-dir-col tds-u-flex-gap-1">
        <tds-banner
          ref={errorBannerRef}
          icon="error"
          header="This Banner won't close"
          variant="error"
        >
          <div slot="banner-subheader">Due to its tdsClose event being prevented.</div>
        </tds-banner>
        <tds-banner
          ref={informationBannerRef}
          icon="info"
          header="This Banner will close."
          variant="information"
        >
          <div slot="banner-subheader">And it also has a link.</div>
          <tds-link slot="banner-link">
            <a href="/">Link example</a>
          </tds-link>
        </tds-banner>
        <tds-banner
          ref={defaultBannerRef}
          id="my-banner"
          icon="save"
          header={`This the default Banner.`}
        >
          <div slot="banner-subheader">That means it doesn't have a "close button"</div>
        </tds-banner>
      </div>

      <div className="tds-u-mt-2">
        <p>
          You can also show and hide the banners using the toggle below.
        </p>
        <tds-toggle
          ref={toggleRef}
        >
          <div slot="label">{bannerVisibility ? 'Hide Banner' : 'Show Banner'}</div>
        </tds-toggle>
      </div>
    </div>
  );
};

export default Banner;
