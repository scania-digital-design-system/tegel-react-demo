import { TdsTextarea } from '@scania/tegel-react';

const Textarea = () => {
  return (
    <>
      <div className="tds-headline-02 tds-u-pb1">Textarea</div>
      <TdsTextarea
        rows={2}
        state="error"
        label="Hello label"
        helper="Good guess, but wrong answer buddy"
        labelPosition="outside"
        placeholder="Placeholder test"
      ></TdsTextarea>
    </>
  );
};

export default Textarea;
