export type PropertyType = "House" | "Apartment" | "Villa" | "Land";

export type PropertyStatus =
  | "For sale"
  | "For rent"
  | "New listing"
  | "Featured";

export type PropertyPrice = {
  amount: number;
  currency: "IDR";
  period?: "month" | "year";
};

export type PropertySpecifications = {
  bedrooms?: number;
  bathrooms?: number;
  buildingAreaSqm?: number;
  landAreaSqm?: number;
  floors?: number;
  parking?: number;
  electricityWatts?: number;
  furnishing?: "Furnished" | "Semi Furnished" | "Unfurnished";
  facing?: string;
};

export type PropertyCardData = {
  id: string;
  slug?: string;
  href: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  location: string;
  price: PropertyPrice;
  type: PropertyType;
  status: PropertyStatus;
  specifications?: PropertySpecifications;
  isFavorite?: boolean;
  isInterested?: boolean;
  agent?: import("@/types/agent").AgentProfile;
};

export type PropertyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type PropertyDetail = PropertyCardData & {
  slug: string;
  description: string;
  longDescription?: string;
  certificate?: string;
  yearBuilt?: number;
  address?: string;
  facilities: string[];
  images: PropertyImage[];
  mapCoordinates?: {
    lat: number;
    lng: number;
  };
};

export type PropertySortOption = "newest" | "price-asc" | "price-desc" | "popular";

export type PropertyFilters = {
  listingType?: "buy" | "rent" | "all" | null;
  type?: PropertyType | "all" | null;
  status?: PropertyStatus | "all" | null;
  query?: string | null;
  location?: string | null;
  minPrice?: number | null;
  maxPrice?: number | null;
  minBedrooms?: number | null;
  minBathrooms?: number | null;
  sort?: PropertySortOption | null;
  page?: number | null;
};
