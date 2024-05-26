export function isEmptyString(value: string | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  return value?.trim().length === 0;
}

export function isEmptyArray(value: any[] | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  return value?.length === 0;
}

export function isEmptyObject(value: object | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  return Object.keys(value || {}).length === 0;
}
export function isEmptyNumber(value: number | null | undefined): boolean {
  if (isNullOrUndefined(value)) {
    return true;
  }
  return Number.isNaN(value);
}

function isNullOrUndefined(value: any): boolean {
  return value === null || value === undefined;
}
