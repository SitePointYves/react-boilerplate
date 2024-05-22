// Define the user type
export type MitarbeiterType = {
  id: string;
  name: string;
  lastname: string;
  email: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
};

// This type will represent the sub-state for getting a single user by ID
export type IMitarbeiterState = {
  data: MitarbeiterType | null;
  isLoading: boolean;
  errors: string;
};

// The users global state
export type MitarbeiterStateType = {
  mitarbeiter: IMitarbeiterState;
  // Later, we can add other sub-states like:
  // list,
  // create,
  // update,
  // remove
};

// (1)
export const MITARBEITER = 'mitarbeiter';
export type MITARBEITER = typeof MITARBEITER; // Typescript line

// (2)
export const GET_MITARBEITER_BY_ID = `${MITARBEITER}/getMitarbeiterAction`;
export type GET_MITARBEITER_BY_ID = typeof GET_MITARBEITER_BY_ID; // Typescript line
