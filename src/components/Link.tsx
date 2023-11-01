import { TdsLink } from '@scania/tegel-react';

const Link = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Link</div>
      <TdsLink>
        <a target="_blank" rel="noreferrer" href="https://tegel.scania.com/home">
          Tegel
        </a>
      </TdsLink>
    </>
  );
};

export default Link;
