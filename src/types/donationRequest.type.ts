export interface TRequestDonation {
  id: string;
  phoneNumber: string;
  dateOfDonation: Date;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: string;
  donor: Donor;
  requester: Requester;
}

export interface Donor {
  bloodType: string;
}

export interface Requester {
  id: string;
  name: string;
  contact: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
}
export interface TMyDonationRequests {
  id: string;
  phoneNumber: string;
  dateOfDonation: Date;
  hospitalName: string;
  hospitalAddress: string;
  reason: string;
  requestStatus: string;
  donor: Donor;
}

export interface Donor {
  id: string;
  name: string;
  contact: string;
  email: string;
  bloodType: string;
  location: string;
  availability: boolean;
}
