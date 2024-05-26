import { MitarbeiterStateType } from '../../[id]/store/MitarbeiterTypes';

export type MitarbeiterForm = {
  name: string;
  email: string;
};
export function transformMitarbeiterFormToState(form: MitarbeiterForm): MitarbeiterStateType {
  return {
    id: undefined,
    name: form.name,
    email: form.email,
  };
}
