import { Fragment, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { unslugify } from '../../utility';
import './AppBreadcrumb.scss';

type PathSegment = { title: string; path: string };

const BREADCRUMB_MAX_LENGTH = 15;

const AppBreadcrumb = () => {
  const { pathname } = useLocation();

  const segments = useMemo(() => {
    const segmentStrings = pathname.split('/').filter(Boolean);

    const segmentObjects: Array<PathSegment> = segmentStrings.map((segmentStr, idx) => ({
      title: unslugify(segmentStr),
      path: '/' + segmentStrings.slice(0, idx + 1).join('/'),
    }));

    return [{ title: 'Home', path: '/' }].concat(segmentObjects);
  }, [pathname]);

  return (
    <>
      {/* Should not be shown on the first page according to docs */}
      {segments.length > 1 && segments[1].path !== '/web-components' && (
        <div className="root">
          <tds-breadcrumbs>
            {segments?.map((segment, idx) => {
              const isLastSegment = idx >= segments.length - 1;

              if (isLastSegment) {
                const shouldTruncateBreadcrumb = segment.title.length > BREADCRUMB_MAX_LENGTH;

                if (shouldTruncateBreadcrumb) {
                  const id = `breadcrumb-${idx}`;
                  return (
                    <Fragment key={segment.path}>
                      <tds-tooltip text={`${segment.title}`} selector={`#${id}`}></tds-tooltip>

                      <tds-breadcrumb current id={id}>
                        <a href={segment.path}>
                          {segment.title.slice(0, BREADCRUMB_MAX_LENGTH)}...
                        </a>
                      </tds-breadcrumb>
                    </Fragment>
                  );
                } else {
                  return (
                    <tds-breadcrumb current key={segment.path}>
                      <a href={segment.path}>{segment.title}</a>
                    </tds-breadcrumb>
                  );
                }
              } else {
                return (
                  <tds-breadcrumb key={segment.path}>
                    <a href={segment.path}>{segment.title}</a>
                  </tds-breadcrumb>
                );
              }
            })}
          </tds-breadcrumbs>
        </div>
      )}
    </>
  );
};

export default AppBreadcrumb;
