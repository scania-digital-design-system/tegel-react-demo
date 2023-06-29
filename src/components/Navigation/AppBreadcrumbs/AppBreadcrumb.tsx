import { Fragment } from 'react';
import { PathSegment } from './AppBreadcrumbs.types';
import { BREADCRUMB_MAX_LENGTH } from './AppBreadcrumbs.utils';

type BreadcrumbProps = {
  segment: PathSegment;
  isLast: boolean;
  idx: number;
};

const AppBreadcrumb = ({ segment, isLast, idx }: BreadcrumbProps) => {
  if (isLast) {
    const shouldTruncateBreadcrumb = segment.title.length > BREADCRUMB_MAX_LENGTH;

    if (shouldTruncateBreadcrumb) {
      const id = `breadcrumb-${idx}`;
      return (
        <Fragment key={segment.path}>
          <tds-tooltip text={`${segment.title}`} selector={`#${id}`}></tds-tooltip>

          <tds-breadcrumb current id={id}>
            <a href={segment.path}>{segment.title.slice(0, BREADCRUMB_MAX_LENGTH)}...</a>
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
};

export default AppBreadcrumb;
