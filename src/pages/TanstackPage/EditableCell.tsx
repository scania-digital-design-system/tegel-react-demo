import { useEffect, useRef, useState } from 'react';
import { Vehicle } from './makeData';
import { CellContext, RowData } from '@tanstack/react-table';
import { TdsBodyCell, TdsTextField } from '@scania/tegel-react';

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    updateData: (rowIndex: number, columnId: string, value: unknown) => void;
  }
}

const EditableCell = ({
  getValue,
  row: { index },
  column: { id },
  table,
}: CellContext<Vehicle, unknown>) => {
  const initialValue = getValue<string>();
  const inputRef = useRef<HTMLTdsTextFieldElement>(null);

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const _setValue = (newValue: string = value) => {
    setValue(newValue);
    table.options.meta?.updateData(index, id, value);
    setIsFocused(false);
  };

  // When the input is blurred, we'll set internal state value and call our table meta's updateData function
  const onBlur = (e: any) => {
    _setValue(e.target.value);
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // If we click outside we
  const handleClickOutside = (event: any) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      _setValue();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [inputRef]);

  return !isFocused ? (
    <TdsBodyCell cellKey={id}>
      <input
        style={{ border: 'none', backgroundColor: 'transparent' }}
        defaultValue={value as string}
        onFocus={() => setIsFocused(true)}
      />
    </TdsBodyCell>
  ) : (
    <TdsTextField
      size="md"
      ref={inputRef}
      noMinWidth
      autofocus
      onBlur={onBlur}
      value={value}
      modeVariant="secondary"
      name="text-field"
      label="Full name"
      labelPosition="no-label"
      placeholder="John Doe"
    />
  );
};

export default EditableCell;
