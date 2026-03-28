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
  icon: string;
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
  logo: "/ecoo full with text no boundaries logo.png",
  icon: "/ecofy icon.png",
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
      "Ecofy walks you through your entire crop season — from choosing what to plant, to daily tasks, to selling your harvest. Powered by local weather data, soil analysis, and AI guidance.",
    image: "/images/hero/hero-main.png",
    primary: { label: "Explore how it works", href: "/how-we-help-clients" },
    secondary: { label: "About us", href: "/about-us" },
  },
  {
    eyebrow: "Earn as you grow",
    title: "Structured milestones that turn good farming into real rewards",
    description:
      "From planting through harvest, farmers follow guided tasks and earn experience points (XP) that unlock real-world benefits like inputs, financing, and market access.",
    image: "/images/hero/hero-accent.png",
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
  image: "/images/about/about-team.png",
  href: "/about-us",
};

export const pillars: Pillar[] = [
  {
    title: "Predict",
    description:
      "Get real-time weather forecasts and AI-powered crop recommendations based on your farm's location, soil type, and season.",
  },
  {
    title: "Guide",
    description:
      "Follow a structured crop journey with weekly milestones, daily tasks, and an AI assistant that answers your farming questions anytime.",
  },
  {
    title: "Reward",
    description:
      "Earn XP for completing tasks and hitting milestones. Track your progress, level up from Seed Starter to Farming Legend, and maintain your daily streak.",
  },
];

export const cta: CTA = {
  title: "Ready to transform your farming outcomes?",
  supportingText:
    "Three capabilities that work together to remove uncertainty from farming.",
  href: "/contact",
};

export interface AppScreen {
  title: string;
  description: string;
  image: string;
}

export const appScreens: AppScreen[] = [
  {
    title: "Dashboard",
    description:
      "See your farm overview — weather, active tasks, crop health, and XP progress all in one place.",
    image: "/images/hero/hero-main.png",
  },
  {
    title: "Tasks",
    description:
      "Daily and weekly farming tasks tailored to your crop stage, with clear instructions and reminders.",
    image: "/images/app-screens/tasks.webp",
  },
  {
    title: "AI Chat",
    description:
      "Ask any farming question and get instant, personalized answers powered by agronomic AI.",
    image: "/images/app-screens/tasks.webp",
  },
  {
    title: "Milestones",
    description:
      "Track your crop journey from planting to harvest with structured weekly milestones and progress indicators.",
    image: "/images/app-screens/milestones.png",
  },
  {
    title: "Rewards",
    description:
      "Earn XP, level up, and unlock real-world benefits for completing tasks and hitting milestones.",
    image: "/images/hero/hero-accent.png",
  },
];

export const productHighlights: string[] = [
  "Track weather",
  "AI crop advice",
  "Weekly milestones",
  "Field data collection",
  "XP & leveling",
  "Market intelligence",
];

export const projects: Project[] = [
  {
    title: "Value Chain Mapping",
    shortLabel: "Field operations intelligence",
    category: "Platform Design",
    year: "2026",
    description:
      "A modern case-study format showing how Ecofy maps complex value chains with clarity and actionable insight.",
    image: "/images/projects/value-chain-mapping.png",
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
    image: "/images/projects/market-access.png",
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
    image: "/images/projects/farmer-enrollment.png",
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
    image: "/images/projects/extension-outreach.png",
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
    image: "/images/projects/inventory-agent-hub.png",
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
    image: "/images/projects/distribution-command.png",
    href: "/project/project6",
    outcome: "Sharper distribution oversight",
    tags: ["Logistics", "Distribution", "Insights"],
  },
];

export interface BetaCTA {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export const betaCta: BetaCTA = {
  title: "Join the Ecofy Beta",
  description:
    "Be among the first farmers to experience AI-powered crop guidance, real-time weather insights, and gamified farming rewards. Sign up now to get early access.",
  buttonLabel: "Join the Beta",
  href: "/register",
};

export const partners: Partner[] = [
  { name: "Azania Bank", logo: "/images/partners/azania-bank.png" },
  { name: "Finca Microfinance Bank Ltd", logo: "/images/partners/finca-microfinance.png" },
  { name: "Amana Bank", logo: "/images/partners/amana-bank.png" },
  { name: "Visa", logo: "/images/partners/visa.png" },
  { name: "Government of Tanzania", logo: "/images/partners/govt-tanzania.png" },
  { name: "Alliance Ginneries Limited", logo: "/images/partners/alliance-ginneries.png" },
  { name: "United Nations Capital Development Fund", logo: "/images/partners/uncdf.png" },
  { name: "Sahara Ventures", logo: "/images/partners/sahara-ventures.png" },
];

export const posts: Post[] = [
  {
    title: "Ecofy combines proprietary market outlooks",
    category: "AgriTech",
    date: "February 22, 2023",
    image: "/images/blog/market-outlooks.png",
    href: "/kilimo-maendeleo",
    excerpt:
      "A closer look at how Ecofy uses market intelligence and digital systems to support stronger farm decisions.",
  },
  {
    title: "Ecofy Center for Agricultural Transformation",
    category: "Field Intelligence",
    date: "February 22, 2023",
    image: "/images/blog/agri-transformation.png",
    href: "/kme-center-for-agricultural-transformation",
    excerpt:
      "How the center advances transformation through practical support, innovation, and coordination for agricultural stakeholders.",
  },
  {
    title: "Natural Capital and Nature",
    category: "AgriTech",
    date: "September 4, 2020",
    image: "/images/blog/natural-capital.png",
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
    name: "Isack Madaha Lugata",
    role: "CEO",
    bio: "Computer Science and Engineering student focused on machine learning, backend systems, and system design. Leads Ecofy's vision and product direction, driving the development of intelligent solutions that transform agricultural decision-making.",
    image: "/team/CEO.jpeg",
  },
  {
    name: "Benjamin Maziku Mashimba",
    role: "CTO",
    bio: "Specializes in AI integration and full-stack development. Responsible for building and scaling Ecofy's technology, ensuring seamless, reliable, and impactful user experiences.",
    image: "/team/CTO.jpg",
  },
  {
    name: "Dinales Joackim Mdollo",
    role: "COO",
    bio: "Brings expertise in network design and stakeholder engagement. Manages operations and partnerships, connecting Ecofy with institutions, experts, and key players in the agricultural ecosystem.",
    image: "/team/COO.png",
  },
  {
    name: "Camillia Saburi Lund",
    role: "CMO",
    bio: "Leads marketing and community growth, with strong experience in digital platforms like Instagram and TikTok. Drives brand visibility, user engagement, and creative outreach strategies.",
    image: "/team/CMO.jpeg",
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
    image: "/images/capabilities/predict.webp",
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
    image: "/images/capabilities/guide.png",
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
    image: "/images/capabilities/reward.png",
  },
];

export const blogCategories: string[] = [
  "All",
  "AgriTech",
  "Field Intelligence",
  "Platform Updates",
];
