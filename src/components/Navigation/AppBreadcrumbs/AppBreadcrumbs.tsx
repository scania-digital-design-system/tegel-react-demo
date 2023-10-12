import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { TdsBreadcrumbs } from '@scania/tegel-react';
import { generateSegments } from './AppBreadcrumbs.utils';
import AppBreadcrumb from './AppBreadcrumb';
import './AppBreadcrumbs.scss';

const AppBreadcrumbs = () => {
  const { pathname } = useLocation();

  const segments = useMemo(() => generateSegments(pathname), [pathname]);

  return (
    <>
      {segments.length > 1 && segments[1].path !== '/web-components' && (
        <div className="breadcrumbs">
          <TdsBreadcrumbs>
            {segments.map((segment, idx) => (
              <AppBreadcrumb
                key={segment.path}
                segment={segment}
                isLast={idx >= segments.length - 1}
                idx={idx}
              />
            ))}
          </TdsBreadcrumbs>
        </div>
      )}
    </>
  );
};

export default AppBreadcrumbs;
