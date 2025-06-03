// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isSpecial: boolean;
  allergens: string[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

// Drinks Types
export interface DrinkItem {
  id: string;
  name: string;
  description: string;
  priceGlass: number;
  priceBottle?: number;
  origin: string;
}

export interface DrinkCategory {
  id: string;
  name: string;
  items: DrinkItem[];
}

// Gallery Types
export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

// Review Types
export interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  text: string;
  source: string;
}

// Form Types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}