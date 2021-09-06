import DashboardService from './DashboardService';
import api from '../../../shared/services/api';

jest.mock('shared/services/api');
const mockedApi = api as jest.Mocked<typeof api>;

describe('DashboardService', () => {
  it('should return dashboard info', () => {});
});
