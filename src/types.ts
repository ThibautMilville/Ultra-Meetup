export interface Event {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  date: string;
  location: string;
  imageUrl: string;
  isPast: boolean;
  organizer: {
    name: string;
    role: string;
    description: string;
  };
  schedule?: {
    time: string;
    activity: string;
  }[];
  registrationLink?: string;
}