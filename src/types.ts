export interface LandscapeProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'Modern Courtyard' | 'Estate Grounds' | 'Coastal Living' | 'Zen Sanctuary';
  location: string;
  year: string;
  image: string;
  detailImage: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  summary: string;
  details: string;
  image: string;
}

export interface LandscapeService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ClientReview {
  id: string;
  author: string;
  residence: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}
