import { FieldError } from 'react-hook-form';

export function getFormErrorMessage(error?: FieldError): string {
  if (!error) {
    return '';
  }
  switch (error.type) {
    case 'required':
      return 'This field is required';
    case 'pattern':
      return error.message || 'Invalid value';
    case 'minLength':
      return `Minimum length is ${error.message}`;
    case 'maxLength':
      return `Maximum length is ${error.message}`;
    default:
      return error.message || 'Invalid value';
  }
}
