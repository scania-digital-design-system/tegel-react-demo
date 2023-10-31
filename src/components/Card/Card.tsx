import {
  TdsCard,
  TdsLink
} from "@scania/tegel-react";
import CardImg from '../../assets/card-img.png';
import './Card.scss';

const Card = () => {
  return (
    <div className="card-container">
      <div className="tds-headline-02 tds-u-pb1">Card</div>
      <TdsCard header="Card" subheader="Simple Card">
        <div slot="body">This is a simple Card example</div>
      </TdsCard>
      <div className="split-cards">
        <TdsCard header="Card" subheader="Card with image">
          <img
            className="tds-u-w-100"
            slot="body-image"
            alt="Scania graphical lettering sign"
            src={CardImg}
          />
          <div slot="actions">
            <p className="tds-text-grey-958">
              The bottom section can have a{' '}
              <TdsLink style={{ display: 'inline-block' }}>
                <a href="/"> link.</a>
              </TdsLink>{' '}
              This Card has its image-placement below-header.
            </p>
          </div>
        </TdsCard>
        <TdsCard image-placement="above-header" header="Card" subheader="Card with image">
          <img
            className="tds-u-w-100"
            slot="body-image"
            alt="Scania graphical lettering sign"
            src={CardImg}
          />
          <div slot="actions">
            <p className="tds-text-grey-958">
              This is the bottom section, this Card has its image-placement above-header below.
            </p>
          </div>
        </TdsCard>
      </div>
      <div className="card-carousel">
        {Array.from({ length: 4 }).map((_, idx) => {
          return (
            <TdsCard
              key={idx}
              header="Card"
              clickable
              subheader="Simple Card"
              body-divider
              onClick={() => {
                console.log(`Clicked card: ${idx}`);
              }}
            >
              <div slot="body">
                These Cards are part of a carousel, and can be scrolled. They are also using the
                body slot in the Card.
              </div>
            </TdsCard>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
