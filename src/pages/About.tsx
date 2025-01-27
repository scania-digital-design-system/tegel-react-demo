import { TdsBlock } from '@scania/tegel-react';

const About = () => {
  return (
    <article>
      <h3>About this page</h3>
      <p>
        This page is a testing ground and demo for using @scania/tegel-react in a React application.
      </p>

      <hr></hr>

      <TdsBlock mode-variant="secondary">
        <div className="tds-headline-02">Block</div>
        <p className="tds-body-01">Test</p>

        <TdsBlock>
          <h3 className="tds-headline-04">Nested block</h3>
          <p className="tds-detail-03">1</p>

          <TdsBlock>
            <h3 className="tds-headline-04">Nested block</h3>
            <p className="tds-detail-03">2</p>

            <TdsBlock>
              <h3 className="tds-headline-04">Nested block</h3>
              <p className="tds-detail-03">3</p>

              <TdsBlock>
                <h3 className="tds-headline-04">Nested block</h3>
                <p className="tds-detail-03">4</p>

                <TdsBlock>
                  <h3 className="tds-headline-04">Nested block</h3>
                  <p className="tds-detail-03">5</p>

                  <TdsBlock>
                    <h3 className="tds-headline-04">Nested block</h3>
                    <p className="tds-detail-03">6</p>

                    <TdsBlock>
                      <h3 className="tds-headline-04">Nested block</h3>
                      <p className="tds-detail-03">7</p>

                      <TdsBlock>
                        <h3 className="tds-headline-04">Nested block</h3>
                        <p className="tds-detail-03">8</p>

                        <TdsBlock>
                          <h3 className="tds-headline-04">Nested block</h3>
                          <p className="tds-detail-03">9</p>

                          <TdsBlock>
                            <h3 className="tds-headline-04">Nested block</h3>
                            <p className="tds-detail-03">10</p>

                            <TdsBlock>
                              <h3 className="tds-headline-04">Nested block</h3>
                              <p className="tds-detail-03">11</p>
                            </TdsBlock>
                          </TdsBlock>
                        </TdsBlock>
                      </TdsBlock>
                    </TdsBlock>
                  </TdsBlock>
                </TdsBlock>
              </TdsBlock>
            </TdsBlock>
          </TdsBlock>
        </TdsBlock>
      </TdsBlock>
    </article>
  );
};

export default About;
