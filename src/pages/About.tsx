import { TdsButton, TdsDropdown, TdsDropdownOption } from '@scania/tegel-react';
import { useForm } from 'react-hook-form';

interface Request {
  identifier: number;
}

const FormComponent = () => {
  const { register, handleSubmit } = useForm<Request>();

  return (
    <form
      onSubmit={handleSubmit((data: Request) => {
        console.log(`value: ${data.identifier}, type: ${typeof data.identifier}`);
      })}
    >
      <TdsDropdown label="Identifier" labelPosition="outside" initialValue={1}>
        <TdsDropdownOption value={1} {...register('identifier')}>
          Option 1
        </TdsDropdownOption>
        <TdsDropdownOption value={2} {...register('identifier')}>
          Option 2
        </TdsDropdownOption>
        <TdsDropdownOption value={3} {...register('identifier')}>
          Option 3
        </TdsDropdownOption>
      </TdsDropdown>

      <div>
        <TdsButton type="submit" text="Submit" />
      </div>
    </form>
  );
};

export default FormComponent;
