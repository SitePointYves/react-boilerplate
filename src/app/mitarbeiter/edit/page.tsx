'use client';

import { getFormErrorMessage } from '@/utils/formValidationUtils';
import { Button, TextField } from '@mui/material';

import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  MitarbeiterStateType,
  upsertMitarbeiterRequestAction,
} from '../[id]/store/MitarbeiterTypes';
import { MitarbeiterForm, transformMitarbeiterFormToState } from './utils/MitarbeiterForm';

export default function MitarbeiterEditPage() {
  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<MitarbeiterForm>({
    defaultValues: { name: '', email: '' },
  });

  const onSubmit: SubmitHandler<MitarbeiterForm> = mitarbeiter => {
    const mitarbeiterSubmit: MitarbeiterStateType = transformMitarbeiterFormToState(mitarbeiter);
    dispatch(upsertMitarbeiterRequestAction(mitarbeiterSubmit));
    reset();
    router.push('/mitarbeiter');
  };
  console.log('watch rerender', watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        defaultValue=""
        {...register('name', { required: true, maxLength: 50 })}
        placeholder="Bitte Namen eingeben..."
        error={Boolean(errors.name)}
        helperText={getFormErrorMessage(errors.name)}
        FormHelperTextProps={{ 'data-testid': 'mitarbeiterform_name_error' }}
        fullWidth
        margin="normal"
        inputProps={{ 'data-testid': 'mitarbeiterform_name' }}
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
        FormHelperTextProps={{ 'data-testid': 'mitarbeiterform_email_error' }}
        fullWidth
        margin="normal"
        inputProps={{ 'data-testid': 'mitarbeiterform_email' }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Submit
      </Button>

      {/* <input type="number" {...register('age', { min: 18, max: 99 })} /> */}
    </form>
  );
}
