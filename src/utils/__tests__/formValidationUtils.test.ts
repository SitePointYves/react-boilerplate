import { getFormErrorMessage } from '../formValidationUtils';

describe('getFormErrorMessage', () => {
  it('returns empty string when error is undefined', () => {
    expect(getFormErrorMessage(undefined)).toBe('');
  });

  it('returns "This field is required" when error type is "required"', () => {
    expect(getFormErrorMessage({ type: 'required' })).toBe('This field is required');
  });

  it('returns error message or "Invalid value" when error type is "pattern"', () => {
    expect(getFormErrorMessage({ type: 'pattern', message: 'Custom error message' })).toBe(
      'Custom error message',
    );
    expect(getFormErrorMessage({ type: 'pattern' })).toBe('Invalid value');
  });

  it('returns "Minimum length is {message}" when error type is "minLength"', () => {
    expect(getFormErrorMessage({ type: 'minLength', message: '5' })).toBe('Minimum length is 5');
  });

  it('returns "Maximum length is {message}" when error type is "maxLength"', () => {
    expect(getFormErrorMessage({ type: 'maxLength', message: '10' })).toBe('Maximum length is 10');
  });

  it('returns error message or "Invalid value" for other error types', () => {
    expect(getFormErrorMessage({ type: 'other', message: 'Custom error message' })).toBe(
      'Custom error message',
    );
  });
});
