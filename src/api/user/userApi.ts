class UserApi {
  private readonly API_URL = 'https://jsonplaceholder.typicode.com';

  async getUsers(): Promise<any> {
    const response = await fetch(`${this.API_URL}/users`);
    return await response.json();
  }

  async getUser(id: number): Promise<any> {
    const response = await fetch(`${this.API_URL}/users/${id}`);
    return await response.json();
  }

  async updateUser(id: number, userData: any): Promise<any> {
    const response = await fetch(`${this.API_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return await response.json();
  }

  async deleteUser(id: number): Promise<any> {
    const response = await fetch(`${this.API_URL}/users/${id}`, {
      method: 'DELETE',
    });
    return await response.json();
  }
}

const userApiInstance = new UserApi();
export default userApiInstance;
