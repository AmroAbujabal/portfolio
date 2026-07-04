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
  repoUrl: string;
  demoUrl?: string;
  status?: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  href: string;
}

// ── Hero ──────────────────────────────────────────────────────
export const hero = {
  name: "Amr Abujabal",
  tagline: "Computer Science  |  Cloud & Backend  |  Computer Vision",
  intro:
    "I build end-to-end systems — from computer-vision pipelines that turn raw footage into analytics, to full-stack apps that ship to production.",
  resumePath: "/AmrAbujabal_CV.pdf",
} as const;

// ── About ─────────────────────────────────────────────────────
export const about = {
  paragraphs: [
    "I'm a 4th-year Computer Science student at the University of British Columbia (Okanagan), graduating May 2027. My focus is on backend and cloud engineering, but I enjoy working across the entire stack.",
    "I've built computer-vision pipelines that track soccer players from a single camera, full-stack match predictors used during a live World Cup, and food-delivery backends with layered architectures and CI/CD pipelines.",
    "I'm drawn to projects where engineering decisions have real impact — whether that's making sports analytics accessible to amateur clubs or putting ML models into production.",
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
  },
  {
    title: "World Cup 2026 Predictor",
    subtitle: "Full-Stack ML App",
    description:
      "Live match outcome predictor for the 2026 FIFA World Cup. XGBoost classifier trained on 49,000+ historical matches with ELO-based features predicts every knockout match. Includes a live bracket, user predictions, leaderboard, and auto-polling from football-data.org during the tournament.",
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
