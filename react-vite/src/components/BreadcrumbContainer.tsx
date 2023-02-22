interface BreadcrumbProps {
  breadcrumbs: {
    label: string;
    href: string;
    current: boolean;
  }[];
}

const BreadcrumbContainer = ({ breadcrumbs }: BreadcrumbProps) => {
  return (
    <sdds-breadcrumb>
      {breadcrumbs.map((breadcrumb) => (
        <sdds-breadcrumb-item current={breadcrumb.current} href={breadcrumb.href}>
          {breadcrumb.label}{" "}
        </sdds-breadcrumb-item>
      ))}
    </sdds-breadcrumb>
  );
};

export default BreadcrumbContainer;
