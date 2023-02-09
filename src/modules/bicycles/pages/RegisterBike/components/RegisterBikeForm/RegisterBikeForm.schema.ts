export interface RegisterBikeFormData {
  name: string;
  serialNumber: string;
  orderNumber: number | null;
  photoThumbnailPath: File | null;
}

export const defaultFormValues: RegisterBikeFormData = {
  name: '',
  serialNumber: '',
  orderNumber: null,
  photoThumbnailPath: null,
};
