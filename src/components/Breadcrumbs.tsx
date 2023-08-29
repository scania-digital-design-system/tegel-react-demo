/* eslint-disable jsx-a11y/anchor-is-valid */
const Breadcrumbs = () => {
    return (
        <div>
            <div className="tds-headline-02 tds-u-pb1">Breadcrumbs</div>
            <tds-breadcrumbs>
                <tds-breadcrumb>
                    <a href="#">Page 1</a>
                </tds-breadcrumb>
                <tds-breadcrumb>
                    <a href="#">Page 2</a>
                </tds-breadcrumb>
                <tds-breadcrumb current>
                    <a href="#">Page 3</a>
                </tds-breadcrumb>
            </tds-breadcrumbs>
        </div>
    );
};

export default Breadcrumbs;
