import { useRef, useState } from "react";

interface PagiantionTableProps {
    customPagination?: boolean;
}

const PaginationTable = ({ customPagination }: PagiantionTableProps) => {
    const tableFooter = useRef<HTMLTdsTableFooterElement>(null);
    const [data, setData] = useState<
        {
            truck: string;
            driver: string;
            country: string;
            mileage: string;
        }[]
    >([
        {
            truck: "L-series",
            driver: "Sonya Bruce",
            country: "Brazil",
            mileage: "123987",
        },
        {
            truck: "P-series",
            driver: "Guerra Bowman",
            country: "Sweden",
            mileage: "2000852",
        },
        {
            truck: "G-series",
            driver: "Ferrell Wallace",
            country: "Germany",
            mileage: "564",
        },
        {
            truck: "R-series",
            driver: "Cox Burris",
            country: "Spain",
            mileage: "1789357",
        },
    ]);

    const updateData = (event: any) => {
        if (tableFooter.current) {
            console.log(tableFooter.current.getAttribute("pagination-value"));
            console.log(event.detail.paginationValue);
            if (event.detail.paginationValue === 1) {
                console.log("first");
                setData([
                    {
                        truck: "L-series",
                        driver: "Sonya Bruce",
                        country: "Brazil",
                        mileage: "123987",
                    },
                    {
                        truck: "P-series",
                        driver: "Guerra Bowman",
                        country: "Sweden",
                        mileage: "2000852",
                    },
                    {
                        truck: "G-series",
                        driver: "Ferrell Wallace",
                        country: "Germany",
                        mileage: "564",
                    },
                    {
                        truck: "R-series",
                        driver: "Cox Burris",
                        country: "Spain",
                        mileage: "1789357",
                    },
                    {
                        truck: "S-series",
                        driver: "Montgomery Cervantes",
                        country: "Croatia",
                        mileage: "65",
                    },
                ]);
            } else {
                console.log("second");

                setData([
                    {
                        truck: "S-series",
                        driver: "Montgomery Cervantes",
                        country: "Croatia",
                        mileage: "65",
                    },
                    {
                        truck: "L-series",
                        driver: "Sheryl Nielsen",
                        country: "Greece",
                        mileage: "365784",
                    },
                    {
                        truck: "G-series",
                        driver: "Benton Gomez",
                        country: "France",
                        mileage: "80957",
                    },
                ]);
            }
        }
    };

    return (
        <>
            {customPagination && (
                <tds-table
                    vertical-dividers="false"
                    compact-design="false"
                    enable-responsive
                    no-min-width
                    ref={(element: any) =>
                        element?.addEventListener("tdsPageChange", (event: any) => {
                            event.preventDefault();
                            updateData(event);
                        })
                    }
                >
                    <tds-table-header>
                        <tds-header-cell
                            column-key="truck"
                            column-title="Truck type"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="driver"
                            column-title="Driver name"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="country"
                            column-title="Country"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="mileage"
                            column-title="Mileage"
                            text-align="right"
                        ></tds-header-cell>
                    </tds-table-header>
                    <tds-table-body body-data={JSON.stringify(data)}></tds-table-body>
                    <tds-table-footer
                        ref={tableFooter}
                        pagination
                        rows-per-page="3"
                    ></tds-table-footer>
                </tds-table>
            )}
            {!customPagination && (
                <tds-table
                    vertical-dividers="false"
                    compact-design="false"
                    enable-responsive
                    no-min-width
                >
                    <tds-table-header>
                        <tds-header-cell
                            column-key="truck"
                            column-title="Truck type"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="driver"
                            column-title="Driver name"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="country"
                            column-title="Country"
                        ></tds-header-cell>
                        <tds-header-cell
                            column-key="mileage"
                            column-title="Mileage"
                            text-align="right"
                        ></tds-header-cell>
                    </tds-table-header>
                    <tds-table-body enable-dummy-data></tds-table-body>
                    <tds-table-footer pagination rows-per-page="5"></tds-table-footer>
                </tds-table>
            )}
        </>
    );
};

export default PaginationTable;
