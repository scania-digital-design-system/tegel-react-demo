import { TdsBlock } from '@scania/tegel-react';

const Block = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Block</div>
      <TdsBlock>
        <div className="tds-headline-02">Block</div>
        <p className="tds-body-01">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend
          ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et
          ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi est
          ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci, vel
          lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus. Maecenas
          sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae aliquam ipsum.
          Nunc rutrum nibh ut arcu egestas egestas.
        </p>
        <TdsBlock>
          <h3 className="tds-headline-04">Nested block 1</h3>
          <p className="tds-detail-03">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut eleifend
            ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi ac velit et
            ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis rhoncus, mi
            est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel vulputate orci,
            vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat neque dapibus.
            Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in interdum est, vitae
            aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.
          </p>
          <TdsBlock>
            <h3 className="tds-headline-04">Nested block 2</h3>
            <p className="tds-detail-03">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut
              eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi
              ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae lobortis
              rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus. Pellentesque vel
              vulputate orci, vel lacinia orci. Sed suscipit leo at diam ullamcorper, vitae volutpat
              neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed molestie elit. Nullam in
              interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu egestas egestas.
            </p>
            <TdsBlock>
              <h3 className="tds-headline-04">Nested block 3</h3>
              <p className="tds-detail-03">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum nisi ut
                eleifend ultrices. Nunc venenatis maximus sapien, ac bibendum nisl aliquam in. Morbi
                ac velit et ligula consectetur interdum. Vestibulum condimentum, augue vitae
                lobortis rhoncus, mi est ultricies mi, sed tincidunt magna nibh in lectus.
                Pellentesque vel vulputate orci, vel lacinia orci. Sed suscipit leo at diam
                ullamcorper, vitae volutpat neque dapibus. Maecenas sit amet rhoncus arcu. Sed sed
                molestie elit. Nullam in interdum est, vitae aliquam ipsum. Nunc rutrum nibh ut arcu
                egestas egestas.
              </p>
            </TdsBlock>
          </TdsBlock>
        </TdsBlock>
      </TdsBlock>
    </div>
  );
};

export default Block;
