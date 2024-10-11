export type TUserPayload = {
  id: string;
  fullName: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
};

export interface TUser {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
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
