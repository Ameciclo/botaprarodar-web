import Community from '../models/Community';

export const MockedFirstCommunity: Community = {
  address: 'Recife',
  created_date: new Date(),
  description: 'Comunidade em Recife',
  id: '-MLDOXs3p35DEHg0gdUU',
  name: 'Comunidade XPTO',
  org_email: 'joao@joao.com',
  org_name: 'Joao',
  bicycles: [],
  withdrawals: [],
};
export const MockedSecondCommunity: Community = {
  address: 'Rua Teste, 123',
  created_date: new Date(),
  description: 'Descricao teste',
  id: '-MLy8y1-5v5GLg7Z428y',
  name: 'Nome Teste',
  org_email: 'orgtest@orgtest.com',
  org_name: 'Nome Org Teste',
  bicycles: [],
  withdrawals: [],
};
