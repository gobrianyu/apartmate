export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: 'social' | 'maintenance' | 'wellness' | 'other';
}

export interface Community {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  image: string;
  type: 'marketplace' | 'hobby' | 'support';
}

export interface User {
  name: string;
  apartment: string;
  avatar: string;
}
