import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';

const API_URL = 'https://jsonplaceholder.typicode.com';

class MitarbeiterApi {
  async getMitarbeiterById(id: number): Promise<MitarbeiterStateType> {
    const response = await axios.get(`${API_URL}/users/${id}`);
    const data: MitarbeiterStateType = response.data;
    return data;
  }
  async getMitarbeiterUebersicht(): Promise<MitarbeiterStateType[]> {
    const response = await axios.get(`${API_URL}/users`);
    const data: MitarbeiterStateType[] = response.data;
    return data;
  }
  async upsertMitarbeiter(mitarbeiter: MitarbeiterStateType): Promise<MitarbeiterStateType> {
    const response = await axios.post(`${API_URL}/users`, mitarbeiter);
    const data: MitarbeiterStateType = response.data;
    return data;
  }
  async deleteMitarbeiter(id: number): Promise<Boolean> {
    const response = await axios.delete(`${API_URL}/users/${id}`);
    return response.status === StatusCodes.OK || response.status === StatusCodes.CREATED;
  }
}

const mitarbeiterApiInstance = new MitarbeiterApi();
export default mitarbeiterApiInstance;
