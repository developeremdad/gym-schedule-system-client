export type TUserPayload = {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};
export interface TUser {
  id: string;
  name: string;
  status: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
  role: string;
  contact: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  userProfile: UserProfile;
}

export interface UserProfile {
  id: string;
  userId: string;
  bio: string;
  age: number;
  lastDonationDate: string;
  createdAt: Date;
  updatedAt: Date;
}
