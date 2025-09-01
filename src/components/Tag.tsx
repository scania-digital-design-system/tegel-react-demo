import { TdsTag, TdsIcon } from '@scania/tegel-react';

const Tag = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Tag</div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <TdsTag text="Tag Label" />
        <TdsTag text="Success" variant="Success" />
        <TdsTag text="Warning" variant="Warning" />
        <TdsTag text="New" variant="New" />
        <TdsTag text="Information" variant="Information" />
        <TdsTag text="Error" variant="Error" />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <TdsTag text="Small Tag" size="Small" />
        <TdsTag text="Small Success" size="Small" variant="Success" />
        <TdsTag text="Small Warning" size="Small" variant="Warning" />
        <TdsTag text="Small New" size="Small" variant="New" />
        <TdsTag text="Small Information" size="Small" variant="Information" />
        <TdsTag text="Small Error" size="Small" variant="Error" />
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <TdsTag text="Tag with Icon">
          <TdsIcon slot="icon" name="info" size="16px" />
        </TdsTag>
        <TdsTag text="Success with Icon" variant="Success">
          <TdsIcon slot="icon" name="tick" size="16px" />
        </TdsTag>
        <TdsTag text="Warning with Icon" variant="Warning">
          <TdsIcon slot="icon" name="warning" size="16px" />
        </TdsTag>
        <TdsTag text="Error with Icon" variant="Error">
          <TdsIcon slot="icon" name="error" size="16px" />
        </TdsTag>
      </div>
    </div>
  );
};

export default Tag;
