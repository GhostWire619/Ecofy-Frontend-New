// ===== TYPE DEFINITIONS =====

export interface NavLink {
  label: string;
  href: string;
}

export interface Solution {
  title: string;
  href: string;
  description: string;
}

export interface Navigation {
  tagline: string;
  phone: string;
  phoneRaw: string;
  name: string;
  subtitle: string;
  logo: string;
  cta: NavLink;
  links: NavLink[];
  solutions: Solution[];
}

export interface HeroSlide {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  primary: NavLink;
  secondary: NavLink;
}

export interface Service {
  title: string;
  description: string;
  href: string;
}

export interface About {
  title: string;
  description: string;
  platformTitle: string;
  platformDescription: string;
  image: string;
  href: string;
}

export interface Pillar {
  title: string;
  description: string;
}

export interface CTA {
  title: string;
  supportingText: string;
  href: string;
}

export interface AdvisoryArea {
  title: string;
  description: string;
  image: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  shortLabel: string;
  category: string;
  year: string;
  description: string;
  image: string;
  href: string;
  outcome: string;
  tags: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Post {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
  excerpt: string;
}

export interface ContactDetails {
  title: string;
  description: string;
  phone: string;
  phoneRaw: string;
}

export interface FooterData {
  kicker: string;
  statement: string;
  navigateLinks: NavLink[];
  resourceLinks: NavLink[];
  connectLinks: NavLink[];
  copyright: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Capability {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
}

export interface AboutPage {
  mission: string;
  story: string[];
  vision: string;
  values: { title: string; description: string }[];
}

// ===== DATA =====

export const navigation: Navigation = {
  tagline: "Actionable intelligence for smallholder farmers in Tanzania.",
  phone: "+255 752 231 143",
  phoneRaw: "+255752231143",
  name: "Ecofy Solutions Ltd",
  subtitle: "Farm Intelligence Platform",
  logo: "/uploads/2023/03/logo-dark2.png",
  cta: { label: "Register Now", href: "/register" },
  links: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Our Team", href: "/our-team" },
    { label: "How We Help", href: "/how-we-help-clients" },
    { label: "News", href: "/blog-left-sidebar" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    {
      title: "Ecofy One",
      href: "/how-we-help-clients",
      description:
        "The complete platform combining Predict, Guide, and Reward — built for Tanzanian smallholder farmers.",
    },
    {
      title: "Predict",
      href: "/how-we-help-clients#predict",
      description:
        "Climate and crop price forecasting that helps farmers plan ahead before committing to a season.",
    },
    {
      title: "Guide",
      href: "/how-we-help-clients#guide",
      description:
        "An AI assistant and structured milestone system supporting every decision from planting to final sale.",
    },
    {
      title: "Reward",
      href: "/how-we-help-clients#reward",
      description:
        "A gamified incentive system that translates sound farming practices into real-world benefits.",
    },
  ],
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Predict · Guide · Reward",
    title: "Eliminate uncertainty for smallholder farmers in Tanzania",
    description:
      "Ecofy combines localized crop data, climate patterns, and market intelligence to deliver actionable insights tailored to each farmer's specific land and crop conditions.",
    image: "/uploads/2023/03/1-1.png",
    primary: { label: "Explore how it works", href: "/how-we-help-clients" },
    secondary: { label: "About us", href: "/about-us" },
  },
  {
    eyebrow: "Earn as you grow",
    title: "Structured milestones that turn good farming into real rewards",
    description:
      "From planting through harvest, farmers follow guided tasks and earn experience points (XP) that unlock real-world benefits like inputs, financing, and market access.",
    image: "/uploads/2023/03/2.png",
    primary: { label: "See capabilities", href: "/how-we-help-clients" },
    secondary: { label: "Contact us", href: "/contact" },
  },
];

export const services: Service[] = [
  {
    title: "Ecofy One",
    description:
      "The complete product combining Predict, Guide, and Reward in one platform — built for Tanzanian smallholder farmers to make confident decisions from planting to sale.",
    href: "/how-we-help-clients",
  },
  {
    title: "Predict",
    description:
      "Climate and crop price forecasting enables farmers to plan ahead before committing resources to a season, reducing risk and maximizing returns.",
    href: "/how-we-help-clients#predict",
  },
  {
    title: "Guide",
    description:
      "An AI assistant and structured milestone system supports farmers through every decision from planting to final sale, with actionable recommendations at each step.",
    href: "/how-we-help-clients#guide",
  },
  {
    title: "Reward",
    description:
      "A gamified incentive system that translates sound farming practices into real-world benefits like inputs, financing, and premium market access.",
    href: "/how-we-help-clients#reward",
  },
];

export const about: About = {
  title: "Ecofy Solutions Ltd",
  description:
    "Ecofy is a digital platform designed to eliminate agricultural uncertainty for smallholder farmers in Tanzania, delivering actionable insights tailored to each farmer's specific land and crop conditions.",
  platformTitle: "Ecofy Platform",
  platformDescription:
    "Ecofy delivers climate forecasting, guided milestones from planting to harvest, and a gamified reward system that turns good farming practices into real-world benefits.",
  image: "/uploads/2023/03/gerolds.png",
  href: "/about-us",
};

export const pillars: Pillar[] = [
  {
    title: "Predict",
    description:
      "Climate and crop price forecasting enables farmers to plan ahead before committing to a season, turning uncertainty into informed decisions.",
  },
  {
    title: "Guide",
    description:
      "An AI assistant and structured milestone system supports farmers through every decision from planting to final sale.",
  },
  {
    title: "Reward",
    description:
      "Sound farming practices earn experience points (XP) that unlock real-world benefits like inputs, financing, and premium market access.",
  },
];

export const cta: CTA = {
  title: "Ready to transform your farming outcomes?",
  supportingText:
    "Three capabilities that work together to remove uncertainty from farming.",
  href: "/contact",
};

export const advisoryAreas: AdvisoryArea[] = [
  {
    title: "Farmer Profiling",
    description:
      "Register your land, crops, and conditions. Ecofy builds a personalized profile to tailor every recommendation to your specific situation.",
    image: "/uploads/2023/03/corn-vs-maize-01.webp",
  },
  {
    title: "Seasonal Planning",
    description:
      "Get climate and price forecasts before you plant. Predict tools help you choose the right crops and timing for maximum returns.",
    image: "/uploads/2023/03/1-1.png",
  },
  {
    title: "Guided Milestones",
    description:
      "Follow structured tasks from planting through harvest. The Guide AI assistant helps you make smart decisions at every step along the way.",
    image: "/uploads/2023/03/corn-vs-maize-01.webp",
  },
  {
    title: "Rewards & Market Access",
    description:
      "Earn XP for completing milestones. Accumulated points unlock inputs, financing, and connections to verified offtakers and premium markets.",
    image: "/uploads/2021/03/5.png",
  },
];

export const stats: Stat[] = [
  { value: "83,000", label: "Profiled Farmers" },
  { value: "630+", label: "Active Mobilizers" },
  { value: "150", label: "Profiled Input Providers" },
  { value: "230+", label: "Profiled Offtakers" },
];

export const projects: Project[] = [
  {
    title: "Value Chain Mapping",
    shortLabel: "Field operations intelligence",
    category: "Platform Design",
    year: "2026",
    description:
      "A modern case-study format showing how Ecofy maps complex value chains with clarity and actionable insight.",
    image: "/uploads/2021/03/1-370x330.png",
    href: "/project/project1",
    outcome: "Clearer operational visibility",
    tags: ["Research", "Workflows", "Rural Systems"],
  },
  {
    title: "Market Access Interface",
    shortLabel: "Trade and buyer coordination",
    category: "Experience Systems",
    year: "2025",
    description:
      "A concept for showcasing how buyers, aggregators, and distribution partners can move through a coordinated digital journey instead of disconnected touchpoints.",
    image: "/uploads/2021/03/2-370x330.png",
    href: "/project/project2",
    outcome: "Stronger partner coordination",
    tags: ["Cross-border", "Trade", "Partner Tools"],
  },
  {
    title: "Farmer Enrollment Studio",
    shortLabel: "Onboarding at scale",
    category: "Service Experience",
    year: "2025",
    description:
      "A premium project card for the farmer onboarding story, emphasizing trust, legibility, and structured progression for registration and KYC-led flows.",
    image: "/uploads/2021/03/3-370x330.png",
    href: "/project/project3",
    outcome: "Faster onboarding journeys",
    tags: ["KYC", "Enrollment", "Farmer Profiles"],
  },
  {
    title: "Extension Outreach Network",
    shortLabel: "Messaging and engagement",
    category: "Comms Infrastructure",
    year: "2024",
    description:
      "A showcase for communication systems, using a cleaner interface language to express field messaging, alerts, and extension coordination.",
    image: "/uploads/2021/03/4-370x330.png",
    href: "/project/project4",
    outcome: "Better last-mile communication",
    tags: ["SMS", "Alerts", "Extension"],
  },
  {
    title: "Inventory and Agent Hub",
    shortLabel: "Dealer and stock control",
    category: "Operations Product",
    year: "2024",
    description:
      "An interface direction for dealer operations and inventory management, where transaction-heavy systems still feel modern and confidence-building.",
    image: "/uploads/2021/03/5-370x330.png",
    href: "/project/project5",
    outcome: "Cleaner stock visibility",
    tags: ["Inventory", "Agents", "Payments"],
  },
  {
    title: "Distribution Command View",
    shortLabel: "Movement across the network",
    category: "Network Visualization",
    year: "2023",
    description:
      "A visual concept for presenting distribution and fulfillment projects through a more cinematic product-story format rather than a plain gallery.",
    image: "/uploads/2021/03/7-370x330.png",
    href: "/project/project6",
    outcome: "Sharper distribution oversight",
    tags: ["Logistics", "Distribution", "Insights"],
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ecofy's Predict tools helped me choose the right crops for the season. I planned my planting with real climate data instead of guessing, and my yields improved significantly.",
    name: "Gerold Msemwa",
    location: "Dar es Salaam, Tanzania",
    image: "/uploads/2023/03/gero-round.png",
  },
  {
    quote:
      "The guided milestones kept me on track from planting to harvest. Every step was clear, and the XP I earned helped me access better inputs for the next season.",
    name: "Maria Shirima",
    location: "Mtwara, Tanzania",
    image: "/uploads/2023/03/Picture3.jpg",
  },
  {
    quote:
      "Ecofy's market intelligence showed me exactly when and where to sell. The reward points I earned unlocked financing I couldn't access before.",
    name: "Amina Kweka",
    location: "Morogoro, Tanzania",
    image: "/uploads/2023/03/Picture4.jpg",
  },
];

export const partners: Partner[] = [
  { name: "Azania Bank", logo: "/uploads/2023/03/azania.png" },
  { name: "Finca Microfinance Bank Ltd", logo: "/uploads/2023/03/admin-ajax.png" },
  { name: "Amana Bank", logo: "/uploads/2023/03/amana.png" },
  { name: "Visa", logo: "/uploads/2023/03/visa.png" },
  { name: "Government of Tanzania", logo: "/uploads/2023/03/tz.png" },
  { name: "Alliance Ginneries Limited", logo: "/uploads/2023/03/nn.png" },
  { name: "United Nations Capital Development Fund", logo: "/uploads/2023/03/un-1.png" },
  { name: "Sahara Ventures", logo: "/uploads/2023/03/cv.png" },
];

export const posts: Post[] = [
  {
    title: "Ecofy combines proprietary market outlooks",
    category: "AgriTech",
    date: "February 22, 2023",
    image: "/uploads/2023/02/1d-360x250.png",
    href: "/kilimo-maendeleo",
    excerpt:
      "A closer look at how Ecofy uses market intelligence and digital systems to support stronger farm decisions.",
  },
  {
    title: "Ecofy Center for Agricultural Transformation",
    category: "Field Intelligence",
    date: "February 22, 2023",
    image: "/uploads/2023/02/ng-360x250.png",
    href: "/kme-center-for-agricultural-transformation",
    excerpt:
      "How the center advances transformation through practical support, innovation, and coordination for agricultural stakeholders.",
  },
  {
    title: "Natural Capital and Nature",
    category: "AgriTech",
    date: "September 4, 2020",
    image: "/uploads/2020/09/3-360x250.png",
    href: "/natural-capital-and-nature",
    excerpt:
      "An older perspective piece on natural capital, sustainability, and long-term value creation in rural economies.",
  },
];

export const contactDetails: ContactDetails = {
  title: "Get in touch with the Ecofy team.",
  description:
    "Whether you are a farmer, field agent, or partner organization, we are here to help you get started with Ecofy.",
  phone: "(+255) 752 231 143",
  phoneRaw: "+255752231143",
};

export const footer: FooterData = {
  kicker: "// ECOFY SOLUTIONS LTD",
  statement: "Predict. Guide. Reward. — for every farmer.",
  navigateLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Team", href: "/our-team" },
    { label: "Solutions", href: "/how-we-help-clients" },
  ],
  resourceLinks: [
    { label: "Register Now", href: "/register" },
    { label: "Blog", href: "/blog-left-sidebar" },
    { label: "How We Help", href: "/how-we-help-clients" },
    { label: "Annual Report ↗", href: "/blog-left-sidebar" },
  ],
  connectLinks: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:info@ecofy.co" },
  ],
  copyright:
    "© Ecofy Solutions Ltd, 2026. All rights reserved. Empowering farmers with digital intelligence.",
};

// ===== INNER PAGE DATA =====

export const aboutPage: AboutPage = {
  mission:
    "To eliminate agricultural uncertainty for smallholder farmers in Tanzania by combining localized crop data, climate patterns, and market intelligence into actionable, personalized insights.",
  story: [
    "Ecofy Solutions Ltd was founded with a clear purpose: to give Tanzanian smallholder farmers the information and tools they need to make confident decisions. Too many farmers rely on generic forecasts and guesswork, leading to wasted resources and missed opportunities.",
    "We built Ecofy as a digital platform that combines localized crop data, climate patterns, and market intelligence — tailored to each farmer's specific land and crop conditions. Rather than offering broad advice, Ecofy delivers actionable insights that change how farmers plan, grow, and sell.",
    "From planting through to harvest, farmers are guided through structured milestones and tasks. Upon completing each milestone, farmers earn experience points (XP) that unlock real-world benefits, creating a dual incentive of improved farming outcomes and tangible rewards.",
  ],
  vision:
    "A Tanzania where every smallholder farmer has access to the intelligence they need to thrive — making informed decisions, earning fair returns, and building sustainable livelihoods.",
  values: [
    {
      title: "Farmer-First Design",
      description:
        "Every feature, every data point, every recommendation is built for the real needs of farmers in the field — not for dashboards in offices.",
    },
    {
      title: "Actionable Intelligence",
      description:
        "We don't just provide data. We deliver clear, specific guidance that farmers can act on immediately to improve their outcomes.",
    },
    {
      title: "Earned Rewards",
      description:
        "Good farming should pay off. Our gamified system ensures that sound practices translate into real-world benefits like inputs and financing.",
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Mathew Ngwahi",
    role: "CEO & Founder",
    bio: "BA, MA Development Management. Managing director in charge of corporate strategy with 15 years of experience in agribusiness and rural development project design and implementation.",
    image: "/uploads/2023/03/round-1.png",
  },
  {
    name: "Maria Shirima",
    role: "Senior Manager",
    bio: "BA, MA Community & Social Work. 8 years of experience in community development, rural development work, and gender mainstreaming in agricultural value chains.",
    image: "/uploads/2023/03/Picture3.jpg",
  },
  {
    name: "Hussein Haule",
    role: "Technical Director",
    bio: "B.Sc. Computer Science. Technical Director in charge of the Ecofy platform, with 13 years of experience in software development and systems architecture.",
    image: "/uploads/2023/03/Picture4.jpg",
  },
  {
    name: "Gerold Msemwa",
    role: "Director of Finance",
    bio: "BBA Finance & Accounting. Director of business development with 10 years of experience in finance, investment, agriculture lending, and rural business development.",
    image: "/uploads/2023/03/gero-round.png",
  },
];

export const capabilities: Capability[] = [
  {
    id: "predict",
    title: "Predict",
    tagline: "Plan ahead with confidence",
    description:
      "Ecofy's Predict capability combines localized climate data with crop price forecasting, enabling farmers to plan ahead before committing resources to a season. Instead of relying on generic weather reports or market rumors, farmers get tailored forecasts specific to their region, soil type, and crop selection.",
    features: [
      "Localized climate pattern analysis for your specific region",
      "Crop price forecasting based on historical and real-time market data",
      "Seasonal planning recommendations tailored to your land conditions",
      "Risk assessment before committing resources to a planting season",
      "Alerts for weather events that could impact your crops",
    ],
    image: "/uploads/2023/03/corn-vs-maize-01.webp",
  },
  {
    id: "guide",
    title: "Guide",
    tagline: "Expert support at every step",
    description:
      "Ecofy's Guide capability provides an AI assistant and structured milestone system that supports farmers through every decision from planting to final sale. Rather than leaving farmers to navigate the growing season alone, Guide breaks the journey into clear, actionable milestones with specific tasks at each stage.",
    features: [
      "AI-powered assistant for real-time farming questions and decisions",
      "Structured milestone system from planting through harvest",
      "Step-by-step task guidance at each growth stage",
      "Best practice recommendations based on your crop and conditions",
      "Progress tracking so you always know where you stand",
    ],
    image: "/uploads/2023/03/1-1.png",
  },
  {
    id: "reward",
    title: "Reward",
    tagline: "Good farming pays off",
    description:
      "Ecofy's Reward capability is a gamified incentive system that translates sound farming practices into real-world benefits. As farmers complete milestones and follow recommended practices, they earn experience points (XP) that accumulate and unlock tangible rewards — creating a dual incentive of better outcomes and concrete benefits.",
    features: [
      "Earn XP for completing farming milestones and following best practices",
      "Unlock real-world benefits: inputs, financing, and premium market access",
      "Track your progress and level up through the farming season",
      "Connect with verified offtakers through your earned reputation",
      "Access financing products tied to your verified farming performance",
    ],
    image: "/uploads/2021/03/5.png",
  },
];

export const blogCategories: string[] = [
  "All",
  "AgriTech",
  "Field Intelligence",
  "Platform Updates",
];
