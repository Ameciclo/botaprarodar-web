import CommunityService from './CommunityService';

jest.mock('./CommunityService');

const mockedCommunityService = CommunityService as jest.Mocked<
  typeof CommunityService
>;

describe('should get all communities', () => {
  it('list is not empty', async () => {
    mockedCommunityService.getAllCommunities.mockResolvedValue([
      {
        id: '1',
        address: 'address 1',
        createdDate: new Date(),
        description: 'description 1',
        name: 'name 1',
        orgEmail: 'org email 1',
        orgName: 'org name 1',
      },
    ]);

    const result = await mockedCommunityService.getAllCommunities();

    expect(result).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(String),
          address: expect.any(String),
          createdDate: expect.any(Date),
          description: expect.any(String),
          name: expect.any(String),
          orgEmail: expect.any(String),
          orgName: expect.any(String),
        }),
      ]),
    );
  });
});
