/* eslint-disable jsx-a11y/anchor-is-valid */
import { TdsBreadcrumbs, TdsBreadcrumb } from '@scania/tegel-react';
const Breadcrumbs = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Breadcrumbs</div>
      <TdsBreadcrumbs>
        <TdsBreadcrumb>
          <a href="#">Page 1</a>
        </TdsBreadcrumb>
        <TdsBreadcrumb>
          <a href="#">Page 2</a>
        </TdsBreadcrumb>
        <TdsBreadcrumb current>
          <a href="#">Page 3</a>
        </TdsBreadcrumb>
      </TdsBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
