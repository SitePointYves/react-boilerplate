import { MitarbeiterStateType } from '../../[id]/store/MitarbeiterTypes';

export type MitarbeiterForm = {
  name: string;
  email: string;
};
export function transformMitarbeiterFormToState(form: MitarbeiterForm): MitarbeiterStateType {
  // Assuming MitarbeiterForm has properties 'name' and 'email'
  // and MitarbeiterStateType has properties 'fullName' and 'emailAddress'
  return {
    id: undefined,
    name: form.name,
    email: form.email,
  };
}
