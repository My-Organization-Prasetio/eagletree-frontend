export type AgentProfile = {
  id: string;
  name: string;
  role: string;
  region: string;
  initials: string;
  office: string;
  photo?: string;
  whatsapp?: string;
  phone?: string;
  licenseNumber?: string;
  joinedYear?: number;
  rating?: number;
  transactionCount?: number;
  bio?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    facebook?: string;
  };
};
