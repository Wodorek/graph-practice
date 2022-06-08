export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export interface Project {
  id: string;
  name: string;
  client: Client;
  description: string;
  status: string;
}
