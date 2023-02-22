import BreadcrumbContainer from "../components/BreadcrumbContainer";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

const breadcrumbs = [
  {
    label: "Page 1",
    href: "#",
    current: false,
  },
  {
    label: "Page 2",
    href: "#",
    current: false,
  },
  {
    label: "Page 3",
    href: "#",
    current: true,
  },
];

const Home = () => {
  return (
    <>
      <Header />
      <div className="sdds-row">
        <div className="sdds-no-padding sdds-col-xs-3">
          <SideMenu />
        </div>
        <div className="sdds-no-padding sdds-col-xs-9">
          <main>
            <BreadcrumbContainer breadcrumbs={breadcrumbs} />
            <div className="sdds-row">
              <div className="sdds-col-xs-8 mock-image">image</div>
              <div className="sdds-col-xs-3 controls">
                <div className="sdds-headline-04">
                  <div>Header text</div>
                  <div className="sub-headline">2490 kr</div>
                </div>
                <div className="description">
                  <div className="sdds-headline-04">Description</div>
                  <p className="sdds-body-01">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
                <sdds-button fullbleed text="Add to card"></sdds-button>
                <sdds-accordion>
                  <sdds-accordion-item header="First item">
                    This is the panel, which contains associated information
                    with the header. Usually it contains text, set in the same
                    size as the header. Lorem ipsum doler sit amet.
                  </sdds-accordion-item>
                  <sdds-accordion-item header="Second item">
                    This is the panel, which contains associated information
                    with the header. Usually it contains text, set in the same
                    size as the header. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis laoreet vestibulum fermentum.
                  </sdds-accordion-item>
                  <sdds-accordion-item header="Third item">
                    This is the panel, which contains associated information
                    with the header. Usually it contains text, set in the same
                    size as the header. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis laoreet vestibulum fermentum.
                  </sdds-accordion-item>
                </sdds-accordion>
              </div>
            </div>
            <div className="sdds-row cards-headline">
              <div className="sdds-headline-04">Lorem Ipsum</div>
              <div className="sdds-divider sdds-col-xs-11"></div>
            </div>
            <div className="sdds-row cards">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
