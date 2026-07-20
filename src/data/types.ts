export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial';
  location: string;
  year: number;
  area: string;
  client: string;
  description: string;
  detail: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  benefits: string[];
  process: { step: string; desc: string }[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
  projectType: string;
}

export interface CompanyStat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  href: string;
}
