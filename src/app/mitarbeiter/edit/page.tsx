'use client';

import { getFormErrorMessage } from '@/utils/formValidationUtils';
import { Button, TextField } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';
import { MitarbeiterForm, transformMitarbeiterFormToState } from './utils/MitarbeiterForm';

export default function MitarbeiterEditPage() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<MitarbeiterForm>({
    defaultValues: { name: '', email: '' },
  });

  const onSubmit: SubmitHandler<MitarbeiterForm> = mitarbeiter => {
    const mitarbeiterSubmit: MitarbeiterStateType = transformMitarbeiterFormToState(mitarbeiter);
    console.log(mitarbeiter, mitarbeiterSubmit);
  };
  console.log('watch rerender', watch());
  console.log('errors', errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        defaultValue=""
        {...register('name', { required: true, maxLength: 50 })}
        placeholder="Bitte Namen eingeben..."
        error={Boolean(errors.name)}
        helperText={getFormErrorMessage(errors.name)}
        fullWidth
        margin="normal"
      />
      <TextField
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
        placeholder="Bitte Email eingeben..."
        error={Boolean(errors.email)}
        helperText={getFormErrorMessage(errors.email)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>
      {/* <input
        defaultValue=""
        {...register('name', { required: true, maxLength: 50 })}
        placeholder="Bitte Namen eingeben..."
      />
      {errors.name && <span>This field is required. {errors.name.message}</span>}
      <input
        {...register('email', {
          required: true,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
        placeholder="Bitte Email eingeben..."
      />
      {errors.email && <span>This field is required. {errors.email.message}</span>}
      <input type="submit" /> */}

      {/* <input type="number" {...register('age', { min: 18, max: 99 })} /> */}
    </form>
  );
}
