import { MitarbeiterStateType } from '../store/MitarbeiterType';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

class MitarbeiterApi {
  async getMitarbeiter(id: number): Promise<MitarbeiterStateType> {
    const response = await axios.get(`${API_URL}/users/${id}`);
    const data: MitarbeiterStateType = response.data;
    return data;
  }
}

const mitarbeiterApiInstance = new MitarbeiterApi();
export default mitarbeiterApiInstance;
