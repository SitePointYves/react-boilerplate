import { MitarbeiterStateType } from '../[id]/store/MitarbeiterTypes';
import axios from 'axios';

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
}

const mitarbeiterApiInstance = new MitarbeiterApi();
export default mitarbeiterApiInstance;
