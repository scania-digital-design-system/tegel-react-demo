import { TdsTag, TdsIcon } from '@scania/tegel-react';

const Tag = () => {
  return (
    <div>
      <div className="tds-headline-02 tds-u-pb1">Tag</div>

      <div className="tds-u-mb1">Default tags</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <TdsTag text="Tag Label" />
        <TdsTag text="Success" variant="Success" />
        <TdsTag text="Warning" variant="Warning" />
        <TdsTag text="New" variant="New" />
        <TdsTag text="Information" variant="Information" />
        <TdsTag text="Error" variant="Error" />
      </div>

      <div className="tds-u-mb1">Small tags</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <TdsTag text="Small Tag" size="sm" />
        <TdsTag text="Small Success" size="sm" variant="Success" />
        <TdsTag text="Small Warning" size="sm" variant="Warning" />
        <TdsTag text="Small New" size="sm" variant="New" />
        <TdsTag text="Small Information" size="sm" variant="Information" />
        <TdsTag text="Small Error" size="sm" variant="Error" />
      </div>

      <div className="tds-u-mb1">Tags with icons</div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <TdsTag text="Tag with Icon">
          <TdsIcon slot="prefix" name="info" size="16px" />
        </TdsTag>
        <TdsTag text="Success with Icon" variant="Success">
          <TdsIcon slot="prefix" name="tick" size="16px" />
        </TdsTag>
        <TdsTag text="Warning with Icon" variant="Warning">
          <TdsIcon slot="prefix" name="warning" size="16px" />
        </TdsTag>
        <TdsTag text="Error with Icon" variant="Error">
          <TdsIcon slot="prefix" name="error" size="16px" />
        </TdsTag>
      </div>
    </div>
  );
};

export default Tag;
