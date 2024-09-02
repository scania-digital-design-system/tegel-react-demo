import { useEffect, useRef, useState } from 'react';
import { Vehicle } from './makeData';
import { CellContext, RowData } from '@tanstack/react-table';
import { TdsTableBodyInputWrapper } from '@scania/tegel-react';

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
  const inputRef = useRef<HTMLInputElement>(null);

  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  // If we click outside we blur the input
  const handleClickOutside = (event: any) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      inputRef.current.blur();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  return (
    <TdsTableBodyInputWrapper>
      <input
        ref={inputRef}
        style={{}}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
        onBlur={(e: any) => {
          table.options.meta?.updateData(index, id, e.target.value);
        }}
        onKeyDown={(e: any) => {
          if (e.keyCode === 27 && inputRef.current) {
            setValue(initialValue);
            inputRef.current.value = initialValue;
            inputRef.current.blur();
          }
        }}
      />
    </TdsTableBodyInputWrapper>
  );
};

export default EditableCell;
