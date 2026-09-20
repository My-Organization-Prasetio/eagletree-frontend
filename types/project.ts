export type ProjectUnitType = {
  name: string;
  buildingAreaSqm: number;
  landAreaSqm?: number;
  bedrooms: number;
  bathrooms: number;
  startingPrice: {
    amount: number;
    currency: string;
  };
};

export type ProjectItem = {
  id: string;
  slug: string;
  title: string;
  developer: string;
  image: {
    src: string;
    alt: string;
  };
  gallery: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  location: {
    city: string;
    district: string;
    fullAddress: string;
  };
  status: "Launching Soon" | "Under Construction" | "Ready to Handover";
  startingPrice: {
    amount: number;
    currency: string;
  };
  unitTypesAvailable: string[];
  facilities: string[];
  specifications: {
    totalUnits?: number;
    landAreaHectares?: number;
    handoverYear?: number;
    certificate?: string;
  };
  description: string;
  longDescription: string;
};
