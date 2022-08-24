import ROUTER from './routesPath';

describe('Routers: Paths', () => {
  it('should return correct values', () => {
    expect(ROUTER.DASHBOARD).toEqual('/');
    expect(ROUTER.HOME).toEqual('/selecao-de-comunidades');
  });
});
