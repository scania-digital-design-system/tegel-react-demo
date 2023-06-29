import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { generateSegments } from './AppBreadcrumbs.utils';
import AppBreadcrumb from './AppBreadcrumb';
import './AppBreadcrumbs.scss';

const AppBreadcrumbs = () => {
  const { pathname } = useLocation();

  const segments = useMemo(() => generateSegments(pathname), [pathname]);

  return (
    <>
      {segments.length > 1 && segments[1].path !== '/web-components' && (
        <div className="root">
          <tds-breadcrumbs>
            {segments.map((segment, idx) => (
              <AppBreadcrumb
                key={segment.path}
                segment={segment}
                isLast={idx >= segments.length - 1}
                idx={idx}
              />
            ))}
          </tds-breadcrumbs>
        </div>
      )}
    </>
  );
};

export default AppBreadcrumbs;
