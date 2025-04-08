import { Service, TeamMember, WhyChooseUsItem } from "./types";

export const services: Service[] = [
  {
    id: "tech-software-development",
    title: "Tech & Software Development",
    shortDescription: "Custom software and technical solutions starting from ₦500,000.",
    longDescription: "Our team of experienced developers delivers high-quality software solutions tailored to your business needs. We offer services ranging from website development (₦800,000/month) to app development & API integration (₦1,500,000/month) and full-stack enterprise solutions (₦3,000,000/month).",
    features: [
      "Web & mobile app development",
      "Custom software solutions",
      "System integration & API development",
      "Technical support & maintenance"
    ],
    iconClass: "fa-code",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 800000,
        description: "Website development",
        features: [
          "Custom website development",
          "Basic CMS implementation",
          "Responsive design",
          "Basic SEO optimization",
          "Website maintenance"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 1500000,
        description: "App development & API integration",
        features: [
          "Custom web & mobile application development",
          "API integration",
          "Database design and implementation",
          "User authentication systems",
          "Third-party service integration",
          "Technical support"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 3000000,
        description: "Full-stack software solutions",
        features: [
          "Enterprise-grade application development",
          "Complex system integration",
          "Advanced mobile applications",
          "DevOps setup and implementation",
          "Dedicated development team",
          "Continuous support and maintenance",
          "Performance optimization"
        ]
      }
    ],
    serviceDetails: [
      {
        title: "Web & Mobile Development",
        items: [
          "Responsive website development",
          "Progressive web applications (PWAs)",
          "Native and cross-platform mobile apps",
          "E-commerce solutions and online stores",
          "Content management systems"
        ]
      },
      {
        title: "Custom Software Solutions",
        items: [
          "Business process automation",
          "ERP and CRM implementation",
          "Data analytics and reporting tools",
          "Workflow management systems",
          "Legacy system modernization"
        ]
      },
      {
        title: "Technical Services",
        items: [
          "API development and integration",
          "Database design and optimization",
          "Cloud migration and setup",
          "DevOps implementation",
          "Technical support and maintenance"
        ]
      }
    ],
    industryApplications: [
      { icon: "fa-building", name: "Startups & SMEs" },
      { icon: "fa-hospital", name: "Healthcare" },
      { icon: "fa-university", name: "Education" },
      { icon: "fa-store", name: "Retail & E-commerce" },
      { icon: "fa-money-bill-wave", name: "Financial Services" },
      { icon: "fa-industry", name: "Manufacturing" }
    ]
  },
  {
    id: "executive-virtual-assistance",
    title: "Executive Virtual Assistance",
    shortDescription: "Professional administrative support for executives and business owners.",
    longDescription: "Our executive virtual assistants are trained to handle administrative tasks efficiently, giving you more time to focus on growing your business.",
    features: [
      "Calendar & email management",
      "Travel & appointment scheduling",
      "Document preparation",
      "Personal assistance"
    ],
    iconClass: "fa-user-tie",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 100000,
        description: "20 hours of virtual assistance",
        features: [
          "Email management",
          "Calendar organization",
          "Basic document preparation"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 150000,
        description: "40 hours of virtual assistance",
        features: [
          "All Basic package features",
          "Travel & appointment scheduling",
          "Advanced document preparation"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 200000,
        description: "Unlimited support",
        features: [
          "All Standard package features",
          "Priority assistance",
          "Personal assistant services",
          "Dedicated assistant"
        ]
      }
    ],
    serviceDetails: [
      {
        title: "Calendar & Email Management",
        items: [
          "Organizing and managing your calendar",
          "Setting up and confirming appointments",
          "Managing email inbox and correspondence",
          "Email filtering and prioritization"
        ]
      },
      {
        title: "Document Preparation",
        items: [
          "Creating and formatting documents",
          "Proofreading and editing",
          "Presentation creation",
          "Data entry and file organization"
        ]
      }
    ],
    industryApplications: [
      { icon: "fa-building", name: "Business Executives" },
      { icon: "fa-user-tie", name: "Entrepreneurs" },
      { icon: "fa-briefcase-medical", name: "Healthcare Professionals" },
      { icon: "fa-gavel", name: "Legal Professionals" },
      { icon: "fa-chart-line", name: "Real Estate Agents" },
      { icon: "fa-chalkboard-teacher", name: "Consultants" }
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDescription: "Strategic social media services to grow your online presence.",
    longDescription: "Our social media experts will help you create engaging content, grow your audience, and drive meaningful engagement across all platforms.",
    features: [
      "Content creation (graphics, captions, videos)",
      "Account growth strategies",
      "Ad management (Facebook, Instagram, LinkedIn)",
      "Analytics & reporting"
    ],
    iconClass: "fa-hashtag",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 150000,
        description: "1 platform, 3 posts/week",
        features: [
          "Content creation for one platform",
          "Basic engagement management",
          "Monthly performance report"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 250000,
        description: "2 platforms, 5 posts/week, ads management",
        features: [
          "Content creation for two platforms",
          "Daily engagement management",
          "Ad campaign creation and management",
          "Bi-weekly performance reports"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 400000,
        description: "All platforms, daily posting, full analytics",
        features: [
          "Content creation for all platforms",
          "Advanced growth strategies",
          "Comprehensive ad campaign management",
          "Competitor analysis",
          "Weekly performance reports with recommendations"
        ]
      }
    ]
  },
  {
    id: "customer-support",
    title: "Customer Support & Sales Assistance",
    shortDescription: "Professional customer service and sales support for your business.",
    longDescription: "Our customer support and sales team can handle inquiries, complaints, lead qualification, and CRM management to ensure your customers receive excellent service.",
    features: [
      "Live chat and email support",
      "Handling inquiries and complaints",
      "Lead qualification and cold outreach",
      "CRM management (HubSpot, Salesforce)"
    ],
    iconClass: "fa-headset",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 125000,
        description: "20 hours of support",
        features: [
          "Email support",
          "Basic inquiry handling",
          "Simple CRM updates"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 200000,
        description: "40 hours of support",
        features: [
          "Email and live chat support",
          "Comprehensive inquiry and complaint handling",
          "Basic lead qualification",
          "CRM management"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 300000,
        description: "Unlimited support",
        features: [
          "24/7 email and live chat support",
          "Complete customer service management",
          "Advanced lead qualification and outreach",
          "Comprehensive CRM management",
          "Monthly customer service reports"
        ]
      }
    ]
  },
  {
    id: "marketing-lead-generation",
    title: "Marketing & Lead Generation",
    shortDescription: "Strategic marketing solutions to attract and convert leads.",
    longDescription: "Our marketing experts will create and implement strategies to generate high-quality leads and increase your conversion rates through various digital channels.",
    features: [
      "Email marketing & automation",
      "SEO optimization",
      "Google & Facebook Ads",
      "Market research & competitor analysis"
    ],
    iconClass: "fa-bullhorn",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 300000,
        description: "SEO & email marketing",
        features: [
          "Basic SEO optimization",
          "Email marketing campaign setup",
          "Simple lead capture systems"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 500000,
        description: "SEO, ads, and analytics",
        features: [
          "Comprehensive SEO strategy",
          "Google and Facebook ad campaigns",
          "Email marketing automation",
          "Performance analytics and reporting"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 800000,
        description: "Full marketing strategy & execution",
        features: [
          "Complete digital marketing strategy",
          "Advanced SEO and content optimization",
          "Multi-channel ad campaigns",
          "Lead nurturing and conversion strategies",
          "Competitor analysis and market research",
          "Comprehensive analytics and strategy refinement"
        ]
      }
    ]
  },
  {
    id: "finance-bookkeeping",
    title: "Finance & Bookkeeping",
    shortDescription: "Professional financial management and bookkeeping services.",
    longDescription: "Our finance experts provide bookkeeping, invoicing, payroll processing, and cash flow management to keep your finances organized and compliant.",
    features: [
      "Bookkeeping & invoicing",
      "Payroll processing",
      "Expense tracking & cash flow management"
    ],
    iconClass: "fa-calculator",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 150000,
        description: "Bookkeeping only",
        features: [
          "Monthly bookkeeping",
          "Invoice management",
          "Basic financial reports"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 250000,
        description: "Payroll & cash flow tracking",
        features: [
          "Comprehensive bookkeeping",
          "Payroll processing",
          "Expense tracking",
          "Cash flow management",
          "Quarterly financial reports"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 400000,
        description: "Full accounting service",
        features: [
          "Complete financial management",
          "Payroll and tax calculations",
          "Financial forecasting",
          "Budget planning and management",
          "Monthly financial analysis and recommendations"
        ]
      }
    ]
  },
  {
    id: "ecommerce-assistance",
    title: "E-commerce Virtual Assistance",
    shortDescription: "Comprehensive support for online stores and e-commerce businesses.",
    longDescription: "Our e-commerce specialists can help manage your online store, optimize product listings, handle inventory, and provide excellent customer service for your online business.",
    features: [
      "Product listing & optimization",
      "Order fulfillment & inventory management",
      "Customer service & refunds handling"
    ],
    iconClass: "fa-shopping-cart",
    packages: [
      {
        id: "basic",
        name: "Basic",
        price: 200000,
        description: "Product listing & management",
        features: [
          "Product listing creation",
          "Basic inventory management",
          "Simple product optimization"
        ]
      },
      {
        id: "standard",
        name: "Standard",
        price: 350000,
        description: "Customer service & inventory",
        features: [
          "Comprehensive product listing and optimization",
          "Order fulfillment management",
          "Inventory tracking and management",
          "Customer service for inquiries and issues"
        ]
      },
      {
        id: "premium",
        name: "Premium",
        price: 500000,
        description: "Full e-commerce assistance",
        features: [
          "Complete e-commerce store management",
          "Advanced product optimization",
          "Full inventory and supply chain management",
          "Customer service and refund handling",
          "Sales analysis and improvement strategies"
        ]
      }
    ]
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "RIDUBARI JOSHUA JOE-AMOS",
    role: "FOUNDER & MANAGING DIRECTOR",
    bio: "Leads the overall strategic direction of Bold Group, bringing extensive experience in business management and service delivery.",
    socialLinks: {
      linkedin: "#",
      email: "ridubari@boldgroup.com"
    }
  },
  {
    id: 2,
    name: "DR. FIMIE WISDOM",
    role: "PROJECT MANAGER",
    bio: "Oversees all project operations and ensures high-quality service delivery to clients across all service areas.",
    socialLinks: {
      linkedin: "#",
      email: "wisdom@boldgroup.com"
    }
  },
  {
    id: 3,
    name: "AMAEKE CYNTHIA OGECHI",
    role: "BUSINESS DEVELOPMENT MANAGER",
    bio: "Leads business development initiatives and manages client relationships to drive growth and expansion.",
    socialLinks: {
      linkedin: "#",
      email: "cynthia@boldgroup.com"
    }
  }
];

export const allTeamMembers: TeamMember[] = [
  ...teamMembers,
  {
    id: 4,
    name: "LIEZETH JOYCE VASQUEZ",
    role: "BUSINESS DEVELOPMENT EXECUTIVE, PHILIPPINES",
    bio: "Responsible for business development and client acquisition in the Philippines market.",
    socialLinks: {
      linkedin: "#",
      email: "liezeth@boldgroup.com"
    }
  },
  {
    id: 5,
    name: "BITRUS ESTHER",
    role: "BUSINESS DEVELOPMENT EXECUTIVE, NORTHERN AND WESTERN NIGERIA",
    bio: "Manages business development initiatives across Northern and Western Nigeria regions.",
    socialLinks: {
      linkedin: "#",
      email: "esther@boldgroup.com"
    }
  },
  {
    id: 6,
    name: "AKPAN, GODWIN AKPAN",
    role: "HUMAN RESOURCE EXECUTIVE",
    bio: "Leads recruitment, staff development, and HR policies to support the company's growth.",
    socialLinks: {
      linkedin: "#",
      email: "godwin@boldgroup.com"
    }
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: 1,
    title: "Experienced Team",
    description: "Our team of 30+ professionals brings years of experience across various industries to deliver high-quality services for your business.",
    iconClass: "fa-users"
  },
  {
    id: 2,
    title: "Fast Turnaround",
    description: "Our structured team approach allows us to complete tasks within minutes to a few hours, ensuring your business operations run smoothly.",
    iconClass: "fa-tachometer-alt"
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Every project is thoroughly reviewed by Team Leaders and further assessed by the Project Manager to guarantee high-quality services.",
    iconClass: "fa-check-circle"
  },
  {
    id: 4,
    title: "Cost-Effective",
    description: "Our service packages are designed to provide maximum value for your investment, helping you save on operational costs while scaling your business.",
    iconClass: "fa-hand-holding-usd"
  },
  {
    id: 5,
    title: "Comprehensive Services",
    description: "From administrative tasks to full-stack development, we offer a wide range of services to meet all your business needs under one roof.",
    iconClass: "fa-tools"
  },
  {
    id: 6,
    title: "Flexible Packages",
    description: "Choose from our Basic, Standard, or Premium packages, or let us create a custom solution tailored to your specific business requirements.",
    iconClass: "fa-sliders-h"
  }
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

export const getPackageById = (serviceId: string, packageId: string) => {
  const service = getServiceById(serviceId);
  if (!service) return undefined;
  return service.packages.find(pkg => pkg.id === packageId);
};
