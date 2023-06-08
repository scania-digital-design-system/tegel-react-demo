import CardImg from "../assets/card-img.png";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card-container">
      <div className="tds-headline-02 tds-u-pb1">Card</div>
      <tds-card header="Card" subheader="Simple Card">
        <div slot="card-body">This is a simple Card example</div>
      </tds-card>
      <div className="split-cards">
        <tds-card header="Card" subheader="Card with image" body-img={CardImg}>
          <div slot="card-bottom">
            <p className="tds-text-grey-958">
              The bottom section can have a{" "}
              <tds-link style={{ display: "inline-block" }}>
                <a href="/"> link.</a>
              </tds-link>{" "}
              This Card has it's header-placement above.
            </p>
          </div>
        </tds-card>
        <tds-card
          header-placement="below"
          header="Card"
          subheader="Card with image"
          body-img={CardImg}
        >
          <div slot="card-bottom">
            <p className="tds-text-grey-958">
              This is the bottom section, this Card has it's header-placement
              below.
            </p>
          </div>
        </tds-card>
      </div>
      <div className="card-carousel">
        {Array.from({ length: 4 }).map(() => {
          return (
            <tds-card
              header="Card"
              clickable
              subheader="Simple Card"
              body-divider
              ref={(element) =>
                element?.addEventListener("tdsClick", (event) => {
                  console.log(event);
                })
              }
            >
              <div slot="card-body">
                These Cards are part of a carousel, and can be scrolled. They are also using the body slot in the Card.
              </div>
            </tds-card>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
