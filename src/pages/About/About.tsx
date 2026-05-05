import { useState } from 'react';
import { TdsToggle } from '@scania/tegel-react';
import Card from '../../components/Card/Card';
import ModalExample from '../../components/Modal/ModalExample';

const About = () => {
  const [isTraton, setIsTraton] = useState(false);

  const toggleBrand = () => {
    const next = !isTraton;
    setIsTraton(next);
    if (next) {
      document.documentElement.classList.add('traton');
    } else {
      document.documentElement.classList.remove('traton');
    }
  };

  return (
    <section className="tds-u-flex tds-u-flex-dir-col tds-u-gap3">
      <div>
        <TdsToggle size="sm" headline="Traton brand" checked={isTraton} onTdsToggle={toggleBrand}>
          <div slot="label">{isTraton ? 'On' : 'Off'}</div>
        </TdsToggle>
      </div>
      <div>
        <Card />
      </div>
      <div>
        <ModalExample />
      </div>
    </section>
  );
};

export default About;
