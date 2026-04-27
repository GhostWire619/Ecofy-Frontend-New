// ===== TYPE DEFINITIONS =====

export type SiteLocale = "en" | "sw";

export interface NavLink {
  label: string;
  href: string;
}

export interface Breadcrumb {
  label: string;
  href?: string;
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

export interface AppScreen {
  title: string;
  description: string;
  image: string;
}

export interface BetaCTA {
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface BannerContent {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs: Breadcrumb[];
  backgroundImage: string;
}

export interface HeaderCopy {
  primaryNavLabel: string;
  mobileNavLabel: string;
  solutionsLabel: string;
  openMenuLabel: string;
  closeMenuLabel: string;
}

export interface TopBarCopy {
  selectLanguageLabel: string;
  englishLabel: string;
  swahiliLabel: string;
  switchToLightLabel: string;
  switchToDarkLabel: string;
}

export interface FooterCopy {
  navigateHeading: string;
  resourcesHeading: string;
  connectHeading: string;
}

export interface HeroCopy {
  scrollLabel: string;
}

export interface AboutSectionCopy {
  eyebrow: string;
  readMoreLabel: string;
  imageAlt: string;
}

export interface PillarsSectionCopy {
  eyebrow: string;
  title: string;
  ctaEyebrow: string;
  ctaButtonLabel: string;
}

export interface AppWalkthroughCopy {
  eyebrow: string;
  title: string;
  description: string;
  tabListLabel: string;
}

export interface ProductHighlightsCopy {
  eyebrow: string;
  title: string;
}

export interface JoinBetaCopy {
  eyebrow: string;
}

export interface NewsSectionCopy {
  eyebrow: string;
  title: string;
  viewAllLabel: string;
  readArticleLabel: string;
  exploreLabel: string;
}

export interface ContactSectionCopy {
  eyebrow: string;
  title: string;
  fullNamePlaceholder: string;
  workEmailPlaceholder: string;
  phonePlaceholder: string;
  organizationPlaceholder: string;
  countryPlaceholder: string;
  messagePlaceholder: string;
  checkboxLabel: string;
  submitLabel: string;
  supportEyebrow: string;
  supportTitle: string;
  supportTags: string[];
}

export interface BlogListCopy {
  allCategoryLabel: string;
}

export interface ProjectsSectionCopy {
  eyebrow: string;
  title: string;
  description: string;
  outcomeLabel: string;
  viewCaseStudyLabel: string;
  projectListLabel: string;
}

export interface ServiceGridCopy {
  eyebrow: string;
  title: string;
  description: string;
  spotlightLabel: string;
  openModuleLabel: string;
  detailsLabel: string;
  tickerAriaLabel: string;
}

export interface TestimonialsSectionCopy {
  eyebrow: string;
  title: string;
}

export interface StatsSectionCopy {
  eyebrow: string;
  title: string;
}

export interface AdvisoryTabsCopy {
  eyebrow: string;
  title: string;
  description: string;
  tabListLabel: string;
  currentFocusLabel: string;
  tags: string[];
}

export interface HomePageCopy {
  partnersAriaLabel: string;
}

export interface AboutRouteCopy {
  banner: BannerContent;
  missionEyebrow: string;
  visionEyebrow: string;
  valuesEyebrow: string;
  valuesTitle: string;
  imageAlt: string;
}

export interface HowWeHelpRouteCopy {
  banner: BannerContent;
  ctaTitle: string;
  ctaDescription: string;
  signInLabel: string;
  getStartedLabel: string;
}

export interface ContactRouteCopy {
  banner: BannerContent;
}

export interface TeamRouteCopy {
  banner: BannerContent;
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
}

export interface BlogRouteCopy {
  banner: BannerContent;
}

export interface SiteUi {
  topBar: TopBarCopy;
  header: HeaderCopy;
  footer: FooterCopy;
  hero: HeroCopy;
  aboutSection: AboutSectionCopy;
  pillarsSection: PillarsSectionCopy;
  appWalkthrough: AppWalkthroughCopy;
  productHighlights: ProductHighlightsCopy;
  joinBeta: JoinBetaCopy;
  newsSection: NewsSectionCopy;
  contactSection: ContactSectionCopy;
  blogList: BlogListCopy;
  projectsSection: ProjectsSectionCopy;
  serviceGrid: ServiceGridCopy;
  testimonialsSection: TestimonialsSectionCopy;
  statsSection: StatsSectionCopy;
  advisoryTabs: AdvisoryTabsCopy;
  pages: {
    home: HomePageCopy;
    about: AboutRouteCopy;
    howWeHelp: HowWeHelpRouteCopy;
    contact: ContactRouteCopy;
    team: TeamRouteCopy;
    blog: BlogRouteCopy;
  };
}

export interface SiteContent {
  navigation: Navigation;
  heroSlides: HeroSlide[];
  services: Service[];
  about: About;
  pillars: Pillar[];
  cta: CTA;
  appScreens: AppScreen[];
  productHighlights: string[];
  projects: Project[];
  betaCta: BetaCTA;
  partners: Partner[];
  posts: Post[];
  contactDetails: ContactDetails;
  footer: FooterData;
  aboutPage: AboutPage;
  teamMembers: TeamMember[];
  capabilities: Capability[];
  blogCategories: string[];
  ui: SiteUi;
}

// ===== SHARED CONSTANTS =====

export const APP_BASE_URL = "https://app.ecofy.co.tz";
export const APP_LOGIN_URL = `${APP_BASE_URL}/login`;
export const APP_REGISTER_URL = `${APP_BASE_URL}/register`;
export const defaultSiteLocale: SiteLocale = "en";

export function isSiteLocale(value: string | null | undefined): value is SiteLocale {
  return value === "en" || value === "sw";
}

const siteContentByLocale: Record<SiteLocale, SiteContent> = {
  en: {
    navigation: {
      tagline: "Actionable intelligence for smallholder farmers in Tanzania.",
      phone: "+255 749 498 117",
      phoneRaw: "+255749498117",
      name: "Ecofy Africa",
      subtitle: "Farm Intelligence Platform",
      logo: "/ecoo full with text no boundaries logo.png",
      icon: "/ecofy icon.png",
      cta: { label: "Open App", href: APP_LOGIN_URL },
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
          title: "Ecofy",
          href: "/how-we-help-clients",
          description:
            "The complete platform combining Predict, Guide, and Reward for Tanzanian smallholder farmers.",
        },
        {
          title: "Predict",
          href: "/how-we-help-clients#predict",
          description:
            "Climate and crop price forecasting that helps farmers plan before a season begins.",
        },
        {
          title: "Guide",
          href: "/how-we-help-clients#guide",
          description:
            "An AI assistant and milestone workflow that supports decisions from planting to sale.",
        },
        {
          title: "Reward",
          href: "/how-we-help-clients#reward",
          description:
            "A gamified incentive system that turns strong farming practice into real-world benefits.",
        },
      ],
    },
    heroSlides: [
      {
        eyebrow: "Predict · Guide · Reward",
        title: "Eliminate uncertainty for smallholder farmers in Tanzania",
        description:
          "Ecofy walks farmers through the full crop season, from choosing what to plant to tracking tasks and selling harvests with more confidence.",
        image: "/uploads/2023/03/1-1.png",
        primary: { label: "Explore how it works", href: "/how-we-help-clients" },
        secondary: { label: "About us", href: "/about-us" },
      },
      {
        eyebrow: "Earn as you grow",
        title: "Structured milestones that turn good farming into real rewards",
        description:
          "From planting through harvest, farmers follow guided tasks and earn experience points that unlock inputs, financing, and market access.",
        image: "/uploads/2023/03/2.png",
        primary: { label: "See capabilities", href: "/how-we-help-clients" },
        secondary: { label: "Meet Ecofy", href: "/about-us" },
      },
    ],
    services: [
      {
        title: "Ecofy One",
        description:
          "The complete product combining Predict, Guide, and Reward in one platform for confident decisions from planting to sale.",
        href: "/how-we-help-clients",
      },
      {
        title: "Predict",
        description:
          "Climate and crop price forecasting helps farmers plan ahead before committing resources to a season.",
        href: "/how-we-help-clients#predict",
      },
      {
        title: "Guide",
        description:
          "An AI assistant and milestone workflow support every decision from planting to final sale.",
        href: "/how-we-help-clients#guide",
      },
      {
        title: "Reward",
        description:
          "A gamified incentive system translates strong farming practice into benefits like inputs and financing.",
        href: "/how-we-help-clients#reward",
      },
    ],
    about: {
      title: "Ecofy Africa",
      description:
        "Ecofy is a digital platform built to remove uncertainty from everyday farm decisions for smallholder farmers in Tanzania.",
      platformTitle: "Ecofy Platform",
      platformDescription:
        "Ecofy combines climate forecasting, farm guidance, milestone tracking, and market intelligence in one workflow.",
      image: "/uploads/2023/03/gerolds.png",
      href: "/about-us",
    },
    pillars: [
      {
        title: "Predict",
        description:
          "Get weather forecasts and crop recommendations shaped by your location, soil, and season.",
      },
      {
        title: "Guide",
        description:
          "Follow a structured crop journey with weekly milestones, daily tasks, and an AI assistant.",
      },
      {
        title: "Reward",
        description:
          "Earn XP as you complete tasks, hit milestones, and build a stronger farming reputation.",
      },
    ],
    cta: {
      title: "Start with the product flow that fits your role",
      supportingText:
        "Predict, Guide, and Reward work together to help farmers plan better, act faster, and sell with more confidence.",
      href: APP_REGISTER_URL,
    },
    appScreens: [
      {
        title: "Farm workspace",
        description:
          "Open one farm workspace with weather, monitoring, tasks, and progress in one focused view.",
        image: "/uploads/2023/03/1-1.png",
      },
      {
        title: "Operations log",
        description:
          "Capture field work, keep records current, and stay aligned with what needs to happen next.",
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        title: "AI Chat",
        description:
          "Ask farming questions and get fast, personalized answers powered by agronomic AI.",
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        title: "Crop journey",
        description:
          "Track progress from planting to harvest with structured milestones and stage-by-stage guidance.",
        image: "/uploads/2021/03/5.png",
      },
      {
        title: "Market intelligence",
        description:
          "Review price direction, compare regions, and make better selling decisions with live market insight.",
        image: "/uploads/2023/03/2.png",
      },
    ],
    productHighlights: [
      "Farm monitoring",
      "AI crop guidance",
      "Operations logging",
      "Weekly milestones",
      "Remote sensing signals",
      "Market intelligence",
    ],
    projects: [
      {
        title: "Value Chain Mapping",
        shortLabel: "Field operations intelligence",
        category: "Platform Design",
        year: "2026",
        description:
          "A case-study format showing how Ecofy maps complex value chains with clarity and actionable insight.",
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
          "A concept for showcasing how buyers, aggregators, and partners move through one coordinated digital journey.",
        image: "/uploads/2021/03/2-370x330.png",
        href: "/project/project2",
        outcome: "Stronger partner coordination",
        tags: ["Trade", "Partners", "Buyer Tools"],
      },
      {
        title: "Farmer Enrollment Studio",
        shortLabel: "Onboarding at scale",
        category: "Service Experience",
        year: "2025",
        description:
          "A product direction for registration, KYC, and trust-building in farmer onboarding flows.",
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
          "A communication system for alerts, field messaging, and extension coordination.",
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
          "A cleaner interface direction for inventory management and dealer operations.",
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
          "A visual concept for distribution and fulfillment through a stronger product-story format.",
        image: "/uploads/2021/03/7-370x330.png",
        href: "/project/project6",
        outcome: "Sharper distribution oversight",
        tags: ["Logistics", "Distribution", "Insights"],
      },
    ],
    betaCta: {
      title: "Open the Ecofy App",
      description:
        "Sign in if you already have access, or create your account to start managing farms, monitoring fields, and using market intelligence in the live product.",
      buttonLabel: "Create account",
      href: APP_REGISTER_URL,
    },
    partners: [
      { name: "Azania Bank", logo: "/uploads/2023/03/azania.png" },
      { name: "Finca Microfinance Bank Ltd", logo: "/uploads/2023/03/admin-ajax.png" },
      { name: "Amana Bank", logo: "/uploads/2023/03/amana.png" },
      { name: "Visa", logo: "/uploads/2023/03/visa.png" },
      { name: "Government of Tanzania", logo: "/uploads/2023/03/tz.png" },
      { name: "Alliance Ginneries Limited", logo: "/uploads/2023/03/nn.png" },
      { name: "United Nations Capital Development Fund", logo: "/uploads/2023/03/un-1.png" },
      { name: "Sahara Ventures", logo: "/uploads/2023/03/cv.png" },
    ],
    posts: [
      {
        title: "How Ecofy turns market signals into selling decisions",
        category: "AgriTech",
        date: "February 22, 2023",
        image: "/uploads/2023/02/1d-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "A look at how Ecofy uses price direction, regional comparisons, and timing signals to support better selling choices.",
      },
      {
        title: "What a farm workspace should show every day",
        category: "Field Intelligence",
        date: "February 22, 2023",
        image: "/uploads/2023/02/ng-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "Why weather, operations, crop progress, and monitoring should live in one place for faster field decisions.",
      },
      {
        title: "Why guided milestones matter for smallholder farmers",
        category: "Platform Updates",
        date: "September 4, 2020",
        image: "/uploads/2020/09/3-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "A practical view of how structured weekly milestones can reduce missed actions and improve season outcomes.",
      },
    ],
    contactDetails: {
      title: "Get in touch with the Ecofy team.",
      description:
        "Whether you are a farmer, field agent, or partner organization, we are here to help you get started with Ecofy.",
      phone: "(+255) 749 498 117",
      phoneRaw: "+255749498117",
    },
    footer: {
      kicker: "// ECOFY AFRICA",
      statement: "Predict. Guide. Reward. — for every farmer.",
      navigateLinks: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about-us" },
        { label: "Team", href: "/our-team" },
        { label: "How We Help", href: "/how-we-help-clients" },
      ],
      resourceLinks: [
        { label: "Open App", href: APP_LOGIN_URL },
        { label: "Blog", href: "/blog-left-sidebar" },
        { label: "How We Help", href: "/how-we-help-clients" },
        { label: "Create Account ↗", href: APP_REGISTER_URL },
      ],
      connectLinks: [
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Email", href: "mailto:info@ecofy.co.tz" },
      ],
      copyright:
        "© Ecofy Africa, 2026. All rights reserved. Empowering farmers with digital intelligence.",
    },
    aboutPage: {
      mission:
        "To eliminate agricultural uncertainty for smallholder farmers in Tanzania by combining localized crop data, climate patterns, and market intelligence into actionable, personalized insights.",
      story: [
        "Ecofy Africa was founded to give Tanzanian smallholder farmers the information and tools they need to make confident decisions.",
        "We built Ecofy as a digital platform that combines localized crop data, climate patterns, and market intelligence tailored to each farmer's land and crop conditions.",
        "From planting through harvest, farmers are guided through structured milestones and tasks that improve outcomes and unlock tangible rewards.",
      ],
      vision:
        "A Tanzania where every smallholder farmer has access to the intelligence they need to thrive.",
      values: [
        {
          title: "Farmer-First Design",
          description:
            "Every feature, data point, and recommendation is built for real needs in the field, not dashboards in offices.",
        },
        {
          title: "Actionable Intelligence",
          description:
            "We do not stop at data. We deliver clear guidance that farmers can act on immediately.",
        },
        {
          title: "Earned Rewards",
          description:
            "Good farming should pay off, so sound practices translate into real-world benefits like inputs and financing.",
        },
      ],
    },
    teamMembers: [
      {
        name: "Isack Madaha Lugata",
        role: "CEO",
        bio: "Computer Science and Engineering student focused on machine learning, backend systems, and system design. Leads Ecofy's vision and product direction.",
        image: "/team/CEO.jpeg",
      },
      {
        name: "Benjamin Maziku Mashimba",
        role: "CTO",
        bio: "Specializes in AI integration and full-stack development. Responsible for building and scaling Ecofy's technology.",
        image: "/team/CTO.jpg",
      },
      {
        name: "Dinales Joackim Mdollo",
        role: "COO",
        bio: "Brings expertise in network design and stakeholder engagement, managing operations and partnerships across the ecosystem.",
        image: "/team/COO.png",
      },
      {
        name: "Camillia Saburi Lund",
        role: "CMO",
        bio: "Leads marketing and community growth with strong experience in digital outreach and brand storytelling.",
        image: "/team/CMO.jpeg",
      },
    ],
    capabilities: [
      {
        id: "predict",
        title: "Predict",
        tagline: "Plan ahead with confidence",
        description:
          "Ecofy's Predict capability combines localized climate data with crop price forecasting so farmers can plan before committing resources to a season.",
        features: [
          "Localized climate pattern analysis for your specific region",
          "Crop price forecasting based on historical and live market data",
          "Seasonal planning recommendations tailored to your land conditions",
          "Risk checks before committing resources to a planting season",
          "Alerts for weather events that could impact crops",
        ],
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        id: "guide",
        title: "Guide",
        tagline: "Expert support at every step",
        description:
          "Ecofy's Guide capability provides an AI assistant and milestone workflow that supports farmers through decisions from planting to final sale.",
        features: [
          "AI assistant for real-time farming questions and decisions",
          "Structured milestones from planting through harvest",
          "Step-by-step task guidance at each growth stage",
          "Best practice recommendations based on crop and conditions",
          "Progress tracking so you always know where you stand",
        ],
        image: "/uploads/2023/03/1-1.png",
      },
      {
        id: "reward",
        title: "Reward",
        tagline: "Good farming pays off",
        description:
          "Ecofy's Reward capability is a gamified incentive system that turns strong farming practices into tangible benefits.",
        features: [
          "Earn XP for completing milestones and following best practices",
          "Unlock benefits like inputs, financing, and premium market access",
          "Track your progress and level up through the farming season",
          "Connect with verified offtakers through earned reputation",
          "Access financing tied to verified farming performance",
        ],
        image: "/uploads/2021/03/5.png",
      },
    ],
    blogCategories: ["AgriTech", "Field Intelligence", "Platform Updates"],
    ui: {
      topBar: {
        selectLanguageLabel: "Select language",
        englishLabel: "English",
        swahiliLabel: "Kiswahili",
        switchToLightLabel: "Switch to light mode",
        switchToDarkLabel: "Switch to dark mode",
      },
      header: {
        primaryNavLabel: "Primary",
        mobileNavLabel: "Mobile navigation",
        solutionsLabel: "Solutions",
        openMenuLabel: "Open menu",
        closeMenuLabel: "Close menu",
      },
      footer: {
        navigateHeading: "Navigate",
        resourcesHeading: "Resources",
        connectHeading: "Connect",
      },
      hero: {
        scrollLabel: "Scroll to explore",
      },
      aboutSection: {
        eyebrow: "About our company",
        readMoreLabel: "Read more",
        imageAlt: "Ecofy Solutions leadership",
      },
      pillarsSection: {
        eyebrow: "How it works",
        title: "Three pillars powering every farming decision",
        ctaEyebrow: "Get started",
        ctaButtonLabel: "Create account →",
      },
      appWalkthrough: {
        eyebrow: "App walkthrough",
        title: "See how Ecofy works across the full farm workflow",
        description:
          "Follow the farmer journey from farm setup and monitoring to operations, guidance, and market insight.",
        tabListLabel: "App screens",
      },
      productHighlights: {
        eyebrow: "What's inside",
        title: "Everything a farmer needs in one app",
      },
      joinBeta: {
        eyebrow: "Early access",
      },
      newsSection: {
        eyebrow: "Journal",
        title: "Field intelligence, platform notes, and transformation updates",
        viewAllLabel: "View all posts",
        readArticleLabel: "Read article",
        exploreLabel: "Explore",
      },
      contactSection: {
        eyebrow: "Get in touch",
        title: "Tell us how we can help you grow",
        fullNamePlaceholder: "Full name",
        workEmailPlaceholder: "Work email",
        phonePlaceholder: "Phone",
        organizationPlaceholder: "Organization",
        countryPlaceholder: "Country",
        messagePlaceholder: "Briefly describe your challenge",
        checkboxLabel: "I agree to receive Ecofy product updates and onboarding support.",
        submitLabel: "Send inquiry",
        supportEyebrow: "Direct support line",
        supportTitle: "Need help getting started?",
        supportTags: ["24/7 response", "Regional coordination", "Rapid escalation"],
      },
      blogList: {
        allCategoryLabel: "All",
      },
      projectsSection: {
        eyebrow: "Case explorer",
        title: "Experience projects as connected product narratives",
        description:
          "Hover or tap any case to transition the main stage and inspect outcomes, tags, and category context.",
        outcomeLabel: "Outcome",
        viewCaseStudyLabel: "View case study",
        projectListLabel: "Project list",
      },
      serviceGrid: {
        eyebrow: "Platform suite",
        title: "A modern operating stack for agriculture and rural commerce",
        description:
          "Each module can run standalone or as part of one coordinated product ecosystem.",
        spotlightLabel: "Spotlight module",
        openModuleLabel: "Open module →",
        detailsLabel: "Details →",
        tickerAriaLabel: "Service highlights",
      },
      testimonialsSection: {
        eyebrow: "Client voices",
        title: "Stories from institutions and entrepreneurs using our platforms",
      },
      statsSection: {
        eyebrow: "Impact metrics",
        title: "Field outcomes across enrollment, distribution, and partner operations",
      },
      advisoryTabs: {
        eyebrow: "Advisory studio",
        title: "Navigate advisory capabilities like a product console",
        description:
          "Switch between domains to preview the outcomes and delivery focus for each advisory stream.",
        tabListLabel: "Advisory areas",
        currentFocusLabel: "Current focus",
        tags: ["Sector intelligence", "Execution frameworks", "Delivery partnership"],
      },
      pages: {
        home: {
          partnersAriaLabel: "Partner logos",
        },
        about: {
          banner: {
            eyebrow: "About Us",
            title: "Eliminating agricultural uncertainty for smallholder farmers",
            subtitle:
              "Ecofy combines localized crop data, climate patterns, and market intelligence into actionable, personalized insights.",
            breadcrumbs: [{ label: "Home", href: "/" }, { label: "About Us" }],
            backgroundImage: "/uploads/2023/03/corn-vs-maize-01.webp",
          },
          missionEyebrow: "Our mission",
          visionEyebrow: "Our vision",
          valuesEyebrow: "Our values",
          valuesTitle: "What drives everything we build",
          imageAlt: "Ecofy team in the field",
        },
        howWeHelp: {
          banner: {
            eyebrow: "How We Help",
            title: "Predict. Guide. Reward.",
            subtitle:
              "Three core capabilities that work together to eliminate uncertainty and empower smallholder farmers from planting through harvest.",
            breadcrumbs: [{ label: "Home", href: "/" }, { label: "How We Help" }],
            backgroundImage: "/uploads/2021/03/hm-2-counter-bg.jpg",
          },
          ctaTitle: "Ready to move from learning to using Ecofy?",
          ctaDescription:
            "Start in the live app. Sign in if your account already exists, or create one and begin setting up your first farm workspace.",
          signInLabel: "Sign in",
          getStartedLabel: "Get started",
        },
        contact: {
          banner: {
            eyebrow: "Contact",
            title: "Get in touch with the Ecofy team",
            subtitle:
              "Whether you are a farmer, field agent, or partner organization, we are here to help.",
            breadcrumbs: [{ label: "Home", href: "/" }, { label: "Contact" }],
            backgroundImage: "/uploads/2021/03/get-a-quote-home-1-bg.jpg",
          },
        },
        team: {
          banner: {
            eyebrow: "Our Team",
            title: "The people building Ecofy",
            breadcrumbs: [{ label: "Home", href: "/" }, { label: "Our Team" }],
            backgroundImage: "/uploads/2023/03/gerolds.png",
          },
          ctaTitle: "Join us",
          ctaDescription:
            "We are always looking for talented people who share our mission of empowering smallholder farmers with actionable intelligence.",
          ctaLabel: "Get in touch",
        },
        blog: {
          banner: {
            eyebrow: "Blog",
            title: "Field intelligence and platform updates",
            breadcrumbs: [{ label: "Home", href: "/" }, { label: "Blog" }],
            backgroundImage: "/uploads/2023/03/Picture3.jpg",
          },
        },
      },
    },
  },
  sw: {
    navigation: {
      tagline: "Akili ya vitendo kwa wakulima wadogo Tanzania.",
      phone: "+255 749 498 117",
      phoneRaw: "+255749498117",
      name: "Ecofy Africa",
      subtitle: "Jukwaa la Akili ya Shamba",
      logo: "/ecoo full with text no boundaries logo.png",
      icon: "/ecofy icon.png",
      cta: { label: "Fungua App", href: APP_LOGIN_URL },
      links: [
        { label: "Nyumbani", href: "/" },
        { label: "Kuhusu", href: "/about-us" },
        { label: "Timu", href: "/our-team" },
        { label: "Tunavyosaidia", href: "/how-we-help-clients" },
        { label: "Habari", href: "/blog-left-sidebar" },
        { label: "Wasiliana", href: "/contact" },
      ],
      solutions: [
        {
          title: "Ecofy",
          href: "/how-we-help-clients",
          description:
            "Jukwaa kamili linalounganisha Predict, Guide, na Reward kwa wakulima wadogo Tanzania.",
        },
        {
          title: "Predict",
          href: "/how-we-help-clients#predict",
          description:
            "Utabiri wa hali ya hewa na bei za mazao unaosaidia kupanga kabla ya msimu kuanza.",
        },
        {
          title: "Guide",
          href: "/how-we-help-clients#guide",
          description:
            "Msaidizi wa AI na mtiririko wa hatua za shamba unaosaidia maamuzi kuanzia kupanda hadi kuuza.",
        },
        {
          title: "Reward",
          href: "/how-we-help-clients#reward",
          description:
            "Mfumo wa motisha unaobadili kilimo bora kuwa manufaa halisi.",
        },
      ],
    },
    heroSlides: [
      {
        eyebrow: "Predict · Guide · Reward",
        title: "Ondoa sintofahamu kwa wakulima wadogo Tanzania",
        description:
          "Ecofy humsaidia mkulima kupitia msimu mzima wa mazao, kuanzia uchaguzi wa zao hadi kazi za kila siku na maamuzi ya kuuza.",
        image: "/uploads/2023/03/1-1.png",
        primary: { label: "Ona jinsi inavyofanya kazi", href: "/how-we-help-clients" },
        secondary: { label: "Kuhusu sisi", href: "/about-us" },
      },
      {
        eyebrow: "Jipatie faida unapokua",
        title: "Hatua zilizopangwa zinazogeuza kilimo bora kuwa zawadi halisi",
        description:
          "Kuanzia kupanda hadi mavuno, wakulima hufuata kazi zilizoelekezwa na kupata pointi za uzoefu zinazofungua pembejeo, fedha, na masoko.",
        image: "/uploads/2023/03/2.png",
        primary: { label: "Ona uwezo wa jukwaa", href: "/how-we-help-clients" },
        secondary: { label: "Mfahamu Ecofy", href: "/about-us" },
      },
    ],
    services: [
      {
        title: "Ecofy One",
        description:
          "Bidhaa kamili inayounganisha Predict, Guide, na Reward katika jukwaa moja kwa maamuzi bora ya shamba.",
        href: "/how-we-help-clients",
      },
      {
        title: "Predict",
        description:
          "Utabiri wa hali ya hewa na bei za mazao unamsaidia mkulima kupanga kabla ya kuwekeza kwenye msimu.",
        href: "/how-we-help-clients#predict",
      },
      {
        title: "Guide",
        description:
          "Msaidizi wa AI na mtiririko wa hatua humsaidia mkulima katika kila uamuzi kutoka kupanda hadi kuuza.",
        href: "/how-we-help-clients#guide",
      },
      {
        title: "Reward",
        description:
          "Mfumo wa motisha hubadili mbinu bora za kilimo kuwa manufaa kama pembejeo na ufadhili.",
        href: "/how-we-help-clients#reward",
      },
    ],
    about: {
      title: "Ecofy Africa",
      description:
        "Ecofy ni jukwaa la kidijitali lililojengwa kuondoa sintofahamu kwenye maamuzi ya kila siku ya shamba kwa wakulima wadogo Tanzania.",
      platformTitle: "Jukwaa la Ecofy",
      platformDescription:
        "Ecofy linaunganisha utabiri wa hali ya hewa, mwongozo wa shamba, ufuatiliaji wa hatua, na akili ya soko katika mtiririko mmoja.",
      image: "/uploads/2023/03/gerolds.png",
      href: "/about-us",
    },
    pillars: [
      {
        title: "Predict",
        description:
          "Pata utabiri wa hali ya hewa na mapendekezo ya mazao kulingana na eneo, udongo, na msimu wako.",
      },
      {
        title: "Guide",
        description:
          "Fuata safari ya zao iliyo na hatua za kila wiki, kazi za kila siku, na msaidizi wa AI.",
      },
      {
        title: "Reward",
        description:
          "Pata XP unapokamilisha kazi na hatua muhimu na ujenge sifa bora ya mkulima.",
      },
    ],
    cta: {
      title: "Anza na mtiririko wa bidhaa unaokufaa",
      supportingText:
        "Predict, Guide, na Reward hufanya kazi pamoja ili kuwasaidia wakulima kupanga vizuri, kutenda haraka, na kuuza kwa uhakika zaidi.",
      href: APP_REGISTER_URL,
    },
    appScreens: [
      {
        title: "Eneo la shamba",
        description:
          "Fungua eneo moja la kazi la shamba lenye hali ya hewa, ufuatiliaji, kazi, na maendeleo katika mwonekano mmoja.",
        image: "/uploads/2023/03/1-1.png",
      },
      {
        title: "Kumbukumbu za kazi",
        description:
          "Rekodi kazi za shambani, weka taarifa zako sahihi, na ujue kinachofuata.",
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        title: "Mazungumzo ya AI",
        description:
          "Uliza swali lolote la kilimo na upate majibu ya haraka yanayokufaa.",
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        title: "Safari ya zao",
        description:
          "Fuatilia maendeleo kutoka kupanda hadi kuvuna kwa hatua zilizopangwa na mwongozo wa kila hatua.",
        image: "/uploads/2021/03/5.png",
      },
      {
        title: "Akili ya soko",
        description:
          "Angalia mwelekeo wa bei, linganisha maeneo, na fanya maamuzi bora ya kuuza.",
        image: "/uploads/2023/03/2.png",
      },
    ],
    productHighlights: [
      "Ufuatiliaji wa shamba",
      "Mwongozo wa AI",
      "Kumbukumbu za kazi",
      "Hatua za kila wiki",
      "Ishara za remote sensing",
      "Akili ya soko",
    ],
    projects: [
      {
        title: "Ramani ya Mnyororo wa Thamani",
        shortLabel: "Akili ya kazi za uwanjani",
        category: "Muundo wa Jukwaa",
        year: "2026",
        description:
          "Muundo wa visa unaoonyesha jinsi Ecofy inavyoweka wazi mifumo changamani ya mnyororo wa thamani.",
        image: "/uploads/2021/03/1-370x330.png",
        href: "/project/project1",
        outcome: "Mwonekano bora wa uendeshaji",
        tags: ["Utafiti", "Mtiririko", "Mifumo ya Vijijini"],
      },
      {
        title: "Kiolesura cha Ufikiaji wa Soko",
        shortLabel: "Uratibu wa wanunuzi",
        category: "Mfumo wa Uzoefu",
        year: "2025",
        description:
          "Dhana ya kuonyesha jinsi wanunuzi, wakusanyaji, na washirika wanavyoweza kupitia safari moja ya kidijitali.",
        image: "/uploads/2021/03/2-370x330.png",
        href: "/project/project2",
        outcome: "Uratibu bora wa washirika",
        tags: ["Biashara", "Washirika", "Wanunuzi"],
      },
      {
        title: "Studio ya Usajili wa Mkulima",
        shortLabel: "Uandikishaji kwa kiwango",
        category: "Uzoefu wa Huduma",
        year: "2025",
        description:
          "Mwelekeo wa bidhaa kwa usajili, KYC, na kujenga uaminifu kwa wakulima.",
        image: "/uploads/2021/03/3-370x330.png",
        href: "/project/project3",
        outcome: "Safari za usajili zilizo haraka",
        tags: ["KYC", "Usajili", "Wasifu wa Mkulima"],
      },
      {
        title: "Mtandao wa Ugani",
        shortLabel: "Ujumbe na ushiriki",
        category: "Miundombinu ya Mawasiliano",
        year: "2024",
        description:
          "Mfumo wa mawasiliano kwa tahadhari, ujumbe wa shambani, na uratibu wa ugani.",
        image: "/uploads/2021/03/4-370x330.png",
        href: "/project/project4",
        outcome: "Mawasiliano bora ya hatua ya mwisho",
        tags: ["SMS", "Tahadhari", "Ugani"],
      },
      {
        title: "Kitovu cha Wakala na Stoo",
        shortLabel: "Udhibiti wa stoo",
        category: "Bidhaa ya Uendeshaji",
        year: "2024",
        description:
          "Mwelekeo safi wa kiolesura kwa usimamizi wa stoo na kazi za mawakala.",
        image: "/uploads/2021/03/5-370x330.png",
        href: "/project/project5",
        outcome: "Mwonekano safi wa stoo",
        tags: ["Stoo", "Mawakala", "Malipo"],
      },
      {
        title: "Mwonekano wa Usambazaji",
        shortLabel: "Mzunguko wa mtandao",
        category: "Uoneshaji wa Mtandao",
        year: "2023",
        description:
          "Dhana ya kuona usambazaji na utekelezaji kupitia simulizi bora la bidhaa.",
        image: "/uploads/2021/03/7-370x330.png",
        href: "/project/project6",
        outcome: "Usimamizi bora wa usambazaji",
        tags: ["Lojistiki", "Usambazaji", "Maarifa"],
      },
    ],
    betaCta: {
      title: "Fungua App ya Ecofy",
      description:
        "Ingia kama tayari una akaunti, au tengeneza akaunti yako ili uanze kusimamia mashamba, kufuatilia maeneo, na kutumia akili ya soko.",
      buttonLabel: "Tengeneza akaunti",
      href: APP_REGISTER_URL,
    },
    partners: [
      { name: "Azania Bank", logo: "/uploads/2023/03/azania.png" },
      { name: "Finca Microfinance Bank Ltd", logo: "/uploads/2023/03/admin-ajax.png" },
      { name: "Amana Bank", logo: "/uploads/2023/03/amana.png" },
      { name: "Visa", logo: "/uploads/2023/03/visa.png" },
      { name: "Government of Tanzania", logo: "/uploads/2023/03/tz.png" },
      { name: "Alliance Ginneries Limited", logo: "/uploads/2023/03/nn.png" },
      { name: "United Nations Capital Development Fund", logo: "/uploads/2023/03/un-1.png" },
      { name: "Sahara Ventures", logo: "/uploads/2023/03/cv.png" },
    ],
    posts: [
      {
        title: "Jinsi Ecofy inavyogeuza ishara za soko kuwa maamuzi ya kuuza",
        category: "AgriTech",
        date: "22 Februari 2023",
        image: "/uploads/2023/02/1d-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "Mtazamo wa jinsi Ecofy inavyotumia mwelekeo wa bei na tofauti za maeneo kusaidia maamuzi bora ya kuuza.",
      },
      {
        title: "Kitu gani eneo la kazi la shamba linapaswa kuonyesha kila siku",
        category: "Akili ya Shambani",
        date: "22 Februari 2023",
        image: "/uploads/2023/02/ng-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "Kwa nini hali ya hewa, kazi, maendeleo ya zao, na ufuatiliaji vinapaswa kuonekana sehemu moja.",
      },
      {
        title: "Kwa nini hatua zilizoongozwa ni muhimu kwa wakulima wadogo",
        category: "Maboresho ya Jukwaa",
        date: "4 Septemba 2020",
        image: "/uploads/2020/09/3-360x250.png",
        href: "/blog-left-sidebar",
        excerpt:
          "Mtazamo wa vitendo juu ya jinsi hatua za kila wiki zinavyopunguza makosa na kuboresha matokeo ya msimu.",
      },
    ],
    contactDetails: {
      title: "Wasiliana na timu ya Ecofy.",
      description:
        "Iwe wewe ni mkulima, afisa wa shamba, au taasisi mshirika, tupo hapa kukusaidia kuanza na Ecofy.",
      phone: "(+255) 749 498 117",
      phoneRaw: "+255749498117",
    },
    footer: {
      kicker: "// ECOFY AFRICA",
      statement: "Predict. Guide. Reward. — kwa kila mkulima.",
      navigateLinks: [
        { label: "Nyumbani", href: "/" },
        { label: "Kuhusu", href: "/about-us" },
        { label: "Timu", href: "/our-team" },
        { label: "Tunavyosaidia", href: "/how-we-help-clients" },
      ],
      resourceLinks: [
        { label: "Fungua App", href: APP_LOGIN_URL },
        { label: "Blogu", href: "/blog-left-sidebar" },
        { label: "Tunavyosaidia", href: "/how-we-help-clients" },
        { label: "Tengeneza Akaunti ↗", href: APP_REGISTER_URL },
      ],
      connectLinks: [
        { label: "Instagram", href: "#" },
        { label: "LinkedIn", href: "#" },
        { label: "Barua pepe", href: "mailto:info@ecofy.co.tz" },
      ],
      copyright:
        "© Ecofy Africa, 2026. Haki zote zimehifadhiwa. Tunawawezesha wakulima kwa akili ya kidijitali.",
    },
    aboutPage: {
      mission:
        "Kuondoa sintofahamu ya kilimo kwa wakulima wadogo Tanzania kwa kuunganisha data ya mazao, hali ya hewa, na akili ya soko kuwa mwongozo wa vitendo.",
      story: [
        "Ecofy Africa ilianzishwa ili kuwapa wakulima wadogo Tanzania taarifa na zana zinazowasaidia kufanya maamuzi kwa uhakika.",
        "Tulijenga Ecofy kama jukwaa la kidijitali linalounganisha data ya mazao, mifumo ya hali ya hewa, na akili ya soko kulingana na ardhi na zao la kila mkulima.",
        "Kuanzia kupanda hadi mavuno, wakulima huongozwa kupitia hatua na kazi zinazoboresha matokeo na kufungua zawadi halisi.",
      ],
      vision:
        "Tanzania ambayo kila mkulima mdogo anaweza kupata akili anayohitaji ili kustawi.",
      values: [
        {
          title: "Muundo unaomweka mkulima mbele",
          description:
            "Kila kipengele, kila data, na kila pendekezo hujengwa kwa mahitaji halisi ya shambani, si kwa maofisi.",
        },
        {
          title: "Akili ya kutekelezeka",
          description:
            "Hatuishii kwenye data. Tunatoa mwongozo wazi ambao mkulima anaweza kutumia mara moja.",
        },
        {
          title: "Zawadi zinazostahiliwa",
          description:
            "Kilimo bora kinapaswa kulipa, hivyo mbinu nzuri hubadilika kuwa manufaa kama pembejeo na ufadhili.",
        },
      ],
    },
    teamMembers: [
      {
        name: "Isack Madaha Lugata",
        role: "CEO",
        bio: "Mwanafunzi wa Sayansi ya Kompyuta na Uhandisi anayelenga machine learning, backend, na usanifu wa mifumo. Anaongoza maono ya Ecofy.",
        image: "/team/CEO.jpeg",
      },
      {
        name: "Benjamin Maziku Mashimba",
        role: "CTO",
        bio: "Mtaalamu wa ujumuishaji wa AI na full-stack development. Anajenga na kukuza teknolojia ya Ecofy.",
        image: "/team/CTO.jpg",
      },
      {
        name: "Dinales Joackim Mdollo",
        role: "COO",
        bio: "Ana uzoefu katika muundo wa mitandao na ushirikiano wa wadau, akisimamia operesheni na mahusiano ya Ecofy.",
        image: "/team/COO.png",
      },
      {
        name: "Camillia Saburi Lund",
        role: "CMO",
        bio: "Anaongoza masoko na ukuaji wa jamii kwa uzoefu mkubwa wa utoaji wa ujumbe wa kidijitali na hadithi ya chapa.",
        image: "/team/CMO.jpeg",
      },
    ],
    capabilities: [
      {
        id: "predict",
        title: "Predict",
        tagline: "Panga mapema kwa uhakika",
        description:
          "Predict ya Ecofy huunganisha data ya hali ya hewa ya eneo husika na utabiri wa bei za mazao ili mkulima apange kabla ya kutumia rasilimali.",
        features: [
          "Uchambuzi wa hali ya hewa kwa eneo lako mahususi",
          "Utabiri wa bei za mazao kwa kutumia data ya soko ya kihistoria na ya sasa",
          "Mapendekezo ya msimu kulingana na hali ya ardhi yako",
          "Ukaguzi wa hatari kabla ya kuwekeza kwenye msimu",
          "Tahadhari za matukio ya hali ya hewa yanayoweza kuathiri mazao",
        ],
        image: "/uploads/2023/03/corn-vs-maize-01.webp",
      },
      {
        id: "guide",
        title: "Guide",
        tagline: "Msaada wa kitaalamu kila hatua",
        description:
          "Guide ya Ecofy hutoa msaidizi wa AI na mtiririko wa hatua unaomsaidia mkulima katika maamuzi kuanzia kupanda hadi kuuza.",
        features: [
          "Msaidizi wa AI kwa maswali na maamuzi ya kilimo kwa wakati halisi",
          "Hatua zilizopangwa kutoka kupanda hadi mavuno",
          "Mwongozo wa kazi hatua kwa hatua katika kila kipindi cha ukuaji",
          "Mapendekezo ya mbinu bora kulingana na zao na mazingira",
          "Ufuatiliaji wa maendeleo ili ujue uko wapi kila wakati",
        ],
        image: "/uploads/2023/03/1-1.png",
      },
      {
        id: "reward",
        title: "Reward",
        tagline: "Kilimo bora kinalipa",
        description:
          "Reward ya Ecofy ni mfumo wa motisha unaogeuza mbinu bora za kilimo kuwa manufaa yanayoonekana.",
        features: [
          "Pata XP kwa kukamilisha hatua na kufuata mbinu bora",
          "Fungua manufaa kama pembejeo, ufadhili, na masoko bora",
          "Fuatilia maendeleo na panda ngazi msimu mzima",
          "Ungana na wanunuzi waliothibitishwa kupitia sifa uliyoijenga",
          "Pata ufadhili unaotegemea utendaji wa shamba uliothibitishwa",
        ],
        image: "/uploads/2021/03/5.png",
      },
    ],
    blogCategories: ["AgriTech", "Akili ya Shambani", "Maboresho ya Jukwaa"],
    ui: {
      topBar: {
        selectLanguageLabel: "Chagua lugha",
        englishLabel: "Kiingereza",
        swahiliLabel: "Kiswahili",
        switchToLightLabel: "Badili kwenda mwonekano wa mwanga",
        switchToDarkLabel: "Badili kwenda mwonekano wa giza",
      },
      header: {
        primaryNavLabel: "Urambazaji mkuu",
        mobileNavLabel: "Urambazaji wa simu",
        solutionsLabel: "Suluhisho",
        openMenuLabel: "Fungua menyu",
        closeMenuLabel: "Funga menyu",
      },
      footer: {
        navigateHeading: "Urambazaji",
        resourcesHeading: "Rasilimali",
        connectHeading: "Unganika",
      },
      hero: {
        scrollLabel: "Tembeza kuona zaidi",
      },
      aboutSection: {
        eyebrow: "Kuhusu kampuni yetu",
        readMoreLabel: "Soma zaidi",
        imageAlt: "Viongozi wa Ecofy Solutions",
      },
      pillarsSection: {
        eyebrow: "Jinsi inavyofanya kazi",
        title: "Nguzo tatu zinazoongoza kila uamuzi wa kilimo",
        ctaEyebrow: "Anza sasa",
        ctaButtonLabel: "Tengeneza akaunti →",
      },
      appWalkthrough: {
        eyebrow: "Mwongozo wa app",
        title: "Ona jinsi Ecofy inavyofanya kazi kwenye mtiririko mzima wa shamba",
        description:
          "Fuata safari ya mkulima kutoka uanzishaji wa shamba na ufuatiliaji hadi kazi, mwongozo, na akili ya soko.",
        tabListLabel: "Skrini za app",
      },
      productHighlights: {
        eyebrow: "Vilivyomo ndani",
        title: "Kila kitu ambacho mkulima anahitaji katika app moja",
      },
      joinBeta: {
        eyebrow: "Ufikiaji wa mapema",
      },
      newsSection: {
        eyebrow: "Jarida",
        title: "Maarifa ya shambani, taarifa za jukwaa, na maboresho ya mabadiliko",
        viewAllLabel: "Ona machapisho yote",
        readArticleLabel: "Soma makala",
        exploreLabel: "Chunguza",
      },
      contactSection: {
        eyebrow: "Wasiliana nasi",
        title: "Tuambie jinsi tunavyoweza kukusaidia kukua",
        fullNamePlaceholder: "Jina kamili",
        workEmailPlaceholder: "Barua pepe ya kazi",
        phonePlaceholder: "Namba ya simu",
        organizationPlaceholder: "Taasisi",
        countryPlaceholder: "Nchi",
        messagePlaceholder: "Eleza kwa kifupi changamoto yako",
        checkboxLabel: "Nakubali kupokea taarifa za bidhaa ya Ecofy na msaada wa kuanza.",
        submitLabel: "Tuma ombi",
        supportEyebrow: "Namba ya msaada",
        supportTitle: "Unahitaji msaada wa kuanza?",
        supportTags: ["Mwitikio wa 24/7", "Uratibu wa kikanda", "Utoaji wa haraka"],
      },
      blogList: {
        allCategoryLabel: "Yote",
      },
      projectsSection: {
        eyebrow: "Mchunguzi wa visa",
        title: "Pitia miradi kama simulizi za bidhaa zilizounganishwa",
        description:
          "Gusa au elekeza kila kisa ili kuona matokeo, lebo, na muktadha wa kategoria.",
        outcomeLabel: "Matokeo",
        viewCaseStudyLabel: "Ona kisa",
        projectListLabel: "Orodha ya miradi",
      },
      serviceGrid: {
        eyebrow: "Mfumo wa jukwaa",
        title: "Mkusanyiko wa kisasa wa zana kwa kilimo na biashara ya vijijini",
        description:
          "Kila moduli inaweza kufanya kazi yenyewe au kama sehemu ya mfumo mmoja unaoratibiwa.",
        spotlightLabel: "Moduli kuu",
        openModuleLabel: "Fungua moduli →",
        detailsLabel: "Maelezo →",
        tickerAriaLabel: "Vivutio vya huduma",
      },
      testimonialsSection: {
        eyebrow: "Sauti za wateja",
        title: "Hadithi kutoka taasisi na wajasiriamali wanaotumia majukwaa yetu",
      },
      statsSection: {
        eyebrow: "Vipimo vya athari",
        title: "Matokeo ya uwanjani katika usajili, usambazaji, na operesheni za washirika",
      },
      advisoryTabs: {
        eyebrow: "Studio ya ushauri",
        title: "Pitia uwezo wa ushauri kama paneli ya bidhaa",
        description:
          "Badili maeneo tofauti ili kuona matokeo na mwelekeo wa utoaji kwa kila mkondo wa ushauri.",
        tabListLabel: "Maeneo ya ushauri",
        currentFocusLabel: "Mwelekeo wa sasa",
        tags: ["Maarifa ya sekta", "Mifumo ya utekelezaji", "Ushirikiano wa utoaji"],
      },
      pages: {
        home: {
          partnersAriaLabel: "Nembo za washirika",
        },
        about: {
          banner: {
            eyebrow: "Kuhusu",
            title: "Kuondoa sintofahamu ya kilimo kwa wakulima wadogo",
            subtitle:
              "Ecofy linaunganisha data ya mazao, hali ya hewa, na akili ya soko kuwa mwongozo wa vitendo unaomfaa mkulima.",
            breadcrumbs: [{ label: "Nyumbani", href: "/" }, { label: "Kuhusu" }],
            backgroundImage: "/uploads/2023/03/corn-vs-maize-01.webp",
          },
          missionEyebrow: "Dhamira yetu",
          visionEyebrow: "Maono yetu",
          valuesEyebrow: "Thamani zetu",
          valuesTitle: "Kinachoongoza kila tunachojenga",
          imageAlt: "Timu ya Ecofy shambani",
        },
        howWeHelp: {
          banner: {
            eyebrow: "Tunavyosaidia",
            title: "Predict. Guide. Reward.",
            subtitle:
              "Uwezo mkuu wa jukwaa unaofanya kazi pamoja kuondoa sintofahamu na kumwezesha mkulima kuanzia kupanda hadi mavuno.",
            breadcrumbs: [{ label: "Nyumbani", href: "/" }, { label: "Tunavyosaidia" }],
            backgroundImage: "/uploads/2021/03/hm-2-counter-bg.jpg",
          },
          ctaTitle: "Uko tayari kuhamia kutoka kujifunza hadi kutumia Ecofy?",
          ctaDescription:
            "Anza kwenye app ya moja kwa moja. Ingia kama tayari una akaunti, au tengeneza moja na uanze kuweka shamba lako la kwanza.",
          signInLabel: "Ingia",
          getStartedLabel: "Anza sasa",
        },
        contact: {
          banner: {
            eyebrow: "Wasiliana",
            title: "Wasiliana na timu ya Ecofy",
            subtitle:
              "Iwe wewe ni mkulima, afisa wa shamba, au taasisi mshirika, tuko hapa kusaidia.",
            breadcrumbs: [{ label: "Nyumbani", href: "/" }, { label: "Wasiliana" }],
            backgroundImage: "/uploads/2021/03/get-a-quote-home-1-bg.jpg",
          },
        },
        team: {
          banner: {
            eyebrow: "Timu yetu",
            title: "Watu wanaojenga Ecofy",
            breadcrumbs: [{ label: "Nyumbani", href: "/" }, { label: "Timu yetu" }],
            backgroundImage: "/uploads/2023/03/gerolds.png",
          },
          ctaTitle: "Jiunge nasi",
          ctaDescription:
            "Daima tunatafuta watu wenye vipaji wanaoshiriki dhamira yetu ya kuwawezesha wakulima wadogo kwa akili ya vitendo.",
          ctaLabel: "Wasiliana nasi",
        },
        blog: {
          banner: {
            eyebrow: "Blogu",
            title: "Maarifa ya shambani na maboresho ya jukwaa",
            breadcrumbs: [{ label: "Nyumbani", href: "/" }, { label: "Blogu" }],
            backgroundImage: "/uploads/2023/03/Picture3.jpg",
          },
        },
      },
    },
  },
};

export function getSiteContent(locale: SiteLocale): SiteContent {
  return siteContentByLocale[locale] ?? siteContentByLocale[defaultSiteLocale];
}

