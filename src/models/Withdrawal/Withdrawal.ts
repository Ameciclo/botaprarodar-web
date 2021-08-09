export default interface Withdrawal {
  available: boolean;
  bicycle_id: string;
  bicycle_image_path: string;
  bicycle_name: string;
  bicycle_rating: string;
  created_date: bigint;
  destination: string;
  id: string;
  modified_time: bigint;
  path: string;
  rent: boolean;
  returned_date: bigint;
  trip_reason: string;
  user: {
    address: string;
    available: boolean;
    created_date: string;
    doc_number: number;
    doc_picture: string;
    doc_picture_back: string;
    doc_type: number;
    gender: number;
    id: string;
    name: string;
    path: string;
    profile_picture: string;
    profile_picture_thumbnail: string;
    residence_proof_picture: string;
  };
  user_id: string;
  user_image_path: string;
  user_name: string;
}
