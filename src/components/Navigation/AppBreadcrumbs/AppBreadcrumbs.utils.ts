import { unslugify } from '../../../utility';
import { PathSegment } from './AppBreadcrumbs.types';

export const BREADCRUMB_MAX_LENGTH = 15;

export const generateSegments = (pathname: string): Array<PathSegment> => {
  const segmentStrings = pathname.split('/').filter(Boolean);

  const segmentObjects: Array<PathSegment> = segmentStrings.map((segmentStr, idx) => ({
    title: unslugify(segmentStr),
    path: '/' + segmentStrings.slice(0, idx + 1).join('/'),
  }));

  return [{ title: 'Home', path: '/' }].concat(segmentObjects);
};
