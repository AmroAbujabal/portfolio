// ============================================================
// content.ts — Single source of truth for all portfolio content.
// To add a project: push a new object to `projects`.
// To update bio/skills: edit the relevant export below.
// ============================================================

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
  status?: string;
  image?: { src: string; alt: string };
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

// ── Site ──────────────────────────────────────────────────────
// Production URL — drives metadataBase, sitemap, robots, and JSON-LD.
export const siteUrl = "https://amrabujabal.com";

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  name: "Amr Abujabal",
  tagline: "Computer Science  |  Cloud & Backend  |  Computer Vision",
  intro:
    "I build computer-vision pipelines that turn match footage into player analytics, and I ship full-stack apps to production.",
  resumePath: "/AmrAbujabal_CV.pdf",
} as const;

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a fourth-year Computer Science student at UBC Okanagan, graduating in May 2027. Backend and cloud work is home base, but I'll go wherever the project needs me in the stack.",
    "Most of my projects mix ML with sports. I built a system that tracks every soccer player on the pitch from a single camera, and a World Cup predictor, trained on 49,000 historical matches, that ran live through the 2026 tournament.",
    "PitchVision exists because pro-level player tracking costs more than most amateur clubs can spend. One camera and the right models close most of that gap. That is the kind of problem I want to keep working on.",
  ],
} as const;

// ── Projects ──────────────────────────────────────────────────
export const projects: Project[] = [
  {
    title: "PitchVision",
    subtitle: "Computer Vision / ML + Cloud",
    description:
      "Single-camera player identification and performance analytics for amateur soccer clubs. Detects and tracks every player frame-by-frame, computes per-player physical and tactical metrics (distance, speed zones, heatmaps, pressing), and serves them through a REST API to a coach-facing dashboard. 126 tests passing.",
    stack: [
      "YOLOv10",
      "SAM 2",
      "TransReID",
      "OSNet",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    repoUrl: "https://github.com/AmroAbujabal/Pitch-Vision",
    status: "In Progress",
    image: {
      src: "/projects/pitch-vision.png",
      alt: "Tactical diagram of a soccer pitch with player bounding boxes, trajectory lines, and a heatmap contour",
    },
  },
  {
    title: "World Cup 2026 Predictor",
    subtitle: "Full-Stack ML App",
    description:
      "Live match outcome predictor for the 2026 FIFA World Cup. An XGBoost classifier trained on 49,000+ historical matches with ELO-based features predicts every knockout tie. Features an interactive bracket, user predictions, and a live leaderboard — with a self-updating sync that pulls real results from football-data.org and advances the bracket automatically as each match finishes.",
    stack: [
      "XGBoost",
      "scikit-learn",
      "FastAPI",
      "React",
      "SQLAlchemy",
      "Tailwind",
      "Vercel",
      "Railway",
    ],
    repoUrl: "https://github.com/AmroAbujabal/world-cup-2026-predictor",
    demoUrl: "https://frontend-nine-alpha-56.vercel.app",
    image: {
      src: "/projects/world-cup-predictor.png",
      alt: "Live World Cup 2026 knockout bracket with a black-and-gold 'Road to the Final' hero and the AI model's Round-of-16 win probabilities",
    },
  },
  {
    title: "Reproducing ResNet",
    subtitle: "Deep Learning / Paper Reproduction",
    description:
      "From-scratch reproduction of the CIFAR-10 experiments in Deep Residual Learning for Image Recognition (He et al., 2015): model, data pipeline, and training loop rebuilt from the paper alone under strict test-driven development. Goal: match the paper's error within ±0.5% over 3 seeds, then a controlled 2×2 ablation of original vs. pre-activation ResNet-56 on CIFAR-10 and CIFAR-100.",
    stack: [
      "PyTorch",
      "Deep Learning",
      "Paper Reproduction",
      "Computer Vision",
      "Reproducibility",
      "TDD",
    ],
    repoUrl: "https://github.com/AmroAbujabal/resnet-cifar-repro",
    status: "In Progress",
  },
  {
    title: "ByteBites",
    subtitle: "COSC 310 Software Engineering",
    description:
      "RESTful food-delivery backend using a 3-layer architecture (API -> Service -> Repository) spanning 8 features: auth, menu management, ordering, delivery tracking, pricing, payment, and notifications. JWT authentication with role-based access control (User / Manager / Admin).",
    stack: [
      "FastAPI",
      "Python",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "Pytest",
    ],
    repoUrl: "https://github.com/Vinu3000/COSC310-Team9-ByteBites",
  },
];

// ── Skills ────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "Java", "C", "C++", "SQL", "JavaScript"],
  },
  {
    label: "Backend & Web",
    items: ["FastAPI", "React", "PostgreSQL", "MySQL", "REST APIs", "JWT"],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "Google Cloud Platform",
      "Docker",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Linux",
    ],
  },
  {
    label: "ML & Data",
    items: [
      "NumPy",
      "pandas",
      "scikit-learn",
      "XGBoost",
      "YOLOv10",
      "SAM 2",
      "TransReID/OSNet",
      "Vision-Language Models",
      "Multi-Object Tracking",
    ],
  },
];

// ── Social / Contact ──────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/AmroAbujabal",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/amr-abujabal-bb63b5195",
  },
  {
    label: "Amrabujabal35@gmail.com",
    href: "mailto:Amrabujabal35@gmail.com",
  },
];

// ── Nav Links ─────────────────────────────────────────────────
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
