export type ServicePackage = {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
};

export type Service = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  features: string[];
  benefits?: string[];
  iconClass: string;
  packages: ServicePackage[];
  industryApplications?: {
    icon: string;
    name: string;
  }[];
  serviceDetails?: {
    title: string;
    items: string[];
  }[];
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  socialLinks: {
    linkedin?: string;
    email?: string;
  };
};

export type WhyChooseUsItem = {
  id: number;
  title: string;
  description: string;
  iconClass: string;
};

export type PaymentFormData = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
  amount: number;
  serviceId: string;
  packageId: string;
};
