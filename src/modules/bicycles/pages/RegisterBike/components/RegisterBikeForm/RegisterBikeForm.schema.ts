export interface RegisterBikeFormData {
  name: string;
  serialNumber: string;
  orderNumber?: number;
  photoThumbnailPath: File | null;
}

export const defaultFormValues: RegisterBikeFormData = {
  name: '',
  serialNumber: '',
  orderNumber: undefined,
  photoThumbnailPath: null,
};
