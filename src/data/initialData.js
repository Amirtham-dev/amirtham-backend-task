export const INITIAL_DAILY_TASKS = [
  {
    id: "daily-1",
    title: "Implement Amirtham responsive header & navigation bar",
    category: "Coding",
    priority: "High",
    dueTime: "11:00 AM",
    completed: true,
    description: "Ensure pixel-perfect brand logo alignment, desktop menu, and mobile hamburger drawer.",
    createdAt: new Date().toISOString()
  },
  {
    id: "daily-2",
    title: "Deep-dive into React 19 hooks and compiler optimizations",
    category: "Learning",
    priority: "High",
    dueTime: "02:30 PM",
    completed: true,
    description: "Read documentation on useActionState, useOptimistic, and asset loading improvements.",
    createdAt: new Date().toISOString()
  },
  {
    id: "daily-3",
    title: "Solve Daily LeetCode Challenge: Dynamic Programming",
    category: "Coding",
    priority: "Medium",
    dueTime: "04:45 PM",
    completed: false,
    description: "Practice subproblem memoization and bottom-up space optimization techniques.",
    createdAt: new Date().toISOString()
  },
  {
    id: "daily-4",
    title: "Read 20 pages of 'Designing Data-Intensive Applications'",
    category: "Growth",
    priority: "Medium",
    dueTime: "06:30 PM",
    completed: false,
    description: "Chapter on partition rebalancing and consensus protocols.",
    createdAt: new Date().toISOString()
  },
  {
    id: "daily-5",
    title: "Explore Web Audio API & Canvas visualization ideas",
    category: "Exploration",
    priority: "Low",
    dueTime: "08:00 PM",
    completed: false,
    description: "Prototype interactive audio wave visualizer for future tech showcase.",
    createdAt: new Date().toISOString()
  },
  {
    id: "daily-6",
    title: "30-minute mindfulness & evening running session",
    category: "Live",
    priority: "Medium",
    dueTime: "09:15 PM",
    completed: false,
    description: "Recharge energy and step away from screens for mental clarity.",
    createdAt: new Date().toISOString()
  }
];

export const TEAM_MEMBERS = [
  {
    id: "mem-1",
    name: "Ananya Sharma",
    avatar: "AS",
    role: "Lead Architect",
    color: "bg-indigo-600",
    email: "ananya@amirtham.org"
  },
  {
    id: "mem-2",
    name: "Rahul Verma",
    avatar: "RV",
    role: "Backend Lead",
    color: "bg-blue-600",
    email: "rahul@amirtham.org"
  },
  {
    id: "mem-3",
    name: "Priya Nair",
    avatar: "PN",
    role: "Cloud & DevOps",
    color: "bg-emerald-600",
    email: "priya@amirtham.org"
  },
  {
    id: "mem-4",
    name: "Vignesh K.",
    avatar: "VK",
    role: "Frontend Engineer",
    color: "bg-amber-600",
    email: "vignesh@amirtham.org"
  },
  {
    id: "mem-5",
    name: "Kavya Raman",
    avatar: "KR",
    role: "UI/UX & QA",
    color: "bg-purple-600",
    email: "kavya@amirtham.org"
  }
];

export const INITIAL_TEAM_TASKS = [
  {
    id: "team-1",
    title: "Design & implement unified Brand Design System",
    description: "Incorporate the Amirtham logo palette: deep navy, indigo, golden sunrise, and nature emerald.",
    assignee: "Kavya Raman",
    status: "completed",
    priority: "High",
    dueDate: "2026-10-06",
    tag: "Design",
    commentsCount: 5
  },
  {
    id: "team-2",
    title: "Setup Auth0 / OAuth2 authentication flow with RBAC",
    description: "Configure role-based access for team members and admin dash with token caching.",
    assignee: "Rahul Verma",
    status: "in-progress",
    priority: "High",
    dueDate: "2026-10-08",
    tag: "Security",
    commentsCount: 8
  },
  {
    id: "team-3",
    title: "Automate GitHub Actions CI/CD with Docker containerization",
    description: "Build pipeline with linting, unit test coverage minimum 85%, and automated staging deploy.",
    assignee: "Priya Nair",
    status: "review",
    priority: "Medium",
    dueDate: "2026-10-09",
    tag: "DevOps",
    commentsCount: 3
  },
  {
    id: "team-4",
    title: "Build real-time Task Synchronization engine",
    description: "Use WebSockets or server-sent events for collaborative instant board status updates.",
    assignee: "Vignesh K.",
    status: "in-progress",
    priority: "High",
    dueDate: "2026-10-10",
    tag: "Frontend",
    commentsCount: 4
  },
  {
    id: "team-5",
    title: "Perform system vulnerability & rate-limiting audit",
    description: "Test Redis token bucket algorithm under simulated 10k request/min load spikes.",
    assignee: "Rahul Verma",
    status: "todo",
    priority: "Medium",
    dueDate: "2026-10-12",
    tag: "Backend",
    commentsCount: 2
  },
  {
    id: "team-6",
    title: "Document v2.0 Developer SDK & API specifications",
    description: "Generate interactive OpenAPI / Swagger specs with sample code snippets for TypeScript and Python.",
    assignee: "Ananya Sharma",
    status: "todo",
    priority: "Low",
    dueDate: "2026-10-15",
    tag: "Docs",
    commentsCount: 1
  }
];

export const CATEGORIES = [
  { name: "Coding", color: "bg-blue-100 text-blue-700 border-blue-200" },
  { name: "Learning", color: "bg-purple-100 text-purple-700 border-purple-200" },
  { name: "Growth", color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { name: "Exploration", color: "bg-amber-100 text-amber-700 border-amber-200" },
  { name: "Live", color: "bg-rose-100 text-rose-700 border-rose-200" }
];
