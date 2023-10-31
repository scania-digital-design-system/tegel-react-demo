import { Fragment } from 'react';
import { TdsTooltip, TdsBreadcrumb } from '@scania/tegel-react';
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
          <TdsTooltip text={`${segment.title}`} selector={`#${id}`}></TdsTooltip>

          <TdsBreadcrumb current id={id}>
            <a href={segment.path}>{segment.title.slice(0, BREADCRUMB_MAX_LENGTH)}...</a>
          </TdsBreadcrumb>
        </Fragment>
      );
    } else {
      return (
        <TdsBreadcrumb current key={segment.path}>
          <a href={segment.path}>{segment.title}</a>
        </TdsBreadcrumb>
      );
    }
  } else {
    return (
      <TdsBreadcrumb key={segment.path}>
        <a href={segment.path}>{segment.title}</a>
      </TdsBreadcrumb>
    );
  }
};

export default AppBreadcrumb;
