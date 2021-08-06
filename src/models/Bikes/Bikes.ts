export default interface Bikes {
  id: string;
  available: boolean;
  communityId: string;
  createdDate: string;
  devolutions: Record<string, unknown>;
  inUse: boolean;
  name: string;
  orderNumber: number;
  path: string;
  photoPath: string;
  photoThumbnailPath: string;
  serialNumber: string;
  withdrawToUser: string;
  withdraws: Record<string, unknown>;
}
