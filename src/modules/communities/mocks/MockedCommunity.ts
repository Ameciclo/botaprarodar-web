import Community from '../models/Community';

export const MockedCommunity: Community = {
  id: '1',
  address: 'Rua teste',
  created_date: new Date(),
  description: 'Descrição comunidade teste',
  name: 'Comunidade teste',
  org_email: 'comunidade@teste.com',
  org_name: 'nome',
  bicycles: [],
  withdrawals: [],
};
