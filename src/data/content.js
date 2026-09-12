export const profile = {
  name: 'Rajeev Chaudhary',
  role: 'Backend Developer specializing in real-time systems',
  location: 'Rohini, New Delhi, India',
  email: 'rajeevchoudhary067@gmail.com',
  phone: '+91 93549 87017',
  phoneHref: 'tel:+919354987017',
  cv: '/Rajeevchaudhary.pdf',
  socials: [
    { label: 'GitHub', href: 'https://github.com/rajeevchaudhary-git/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajeev-chaudhary-dev' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/Rajeevchaudhary067/' },
  ],
}

export const bootLines = [
  { text: '> SYS.BOOT — mechanical control plane v3.0', delay: 0 },
  { text: '> Mounting modules: sockets · redis · ledger …', delay: 380 },
  { text: '> Handshake: WebRTC / TURN endpoints OK', delay: 760 },
  { text: '> Queue workers online · idempotency guards armed', delay: 1140 },
  { text: '> STATUS: READY — operator Rajeev Chaudhary', delay: 1520 },
]

export const about = {
  headline: 'Backend engineer who ships production real-time systems',
  paragraphs: [
    "I'm Rajeev Chaudhary — a Backend Developer (full stack capable) at Jaatak Astro Infotech. Most of my work lives where sockets, billing, and reliability meet: hardened Socket.IO call flows, WebRTC with a self-hosted TURN server, Redis as a speed layer over MongoDB, and double-entry wallets that actually reconcile.",
    "Outside the day job I build end-to-end platforms — live radio streaming (Radio Khera), multi-tenant CRM auth, and cache-safe APIs — and I've delivered 8+ production sites across fitness, e-commerce, and CRM for freelance clients.",
  ],
  credentials:
    'AWS Certified Cloud Practitioner · Semifinalist, Amazon Sambhav Hackathon 2024 · B.Tech CS, Maharshi Dayanand University (2024)',
  counters: [
    { key: 'YEARS', end: 3, suffix: '+', decimals: 0 },
    { key: 'MAU', end: 15, suffix: 'K+', decimals: 0 },
    { key: 'CONCURRENT', end: 3, suffix: 'K+', decimals: 0 },
    { key: 'UPTIME', end: 99.9, suffix: '%', decimals: 1 },
  ],
  capabilities: [
    'Real-time call & chat infrastructure',
    'WebRTC + Coturn TURN',
    'Ledger & wallet billing systems',
    'Redis / MongoDB production architecture',
  ],
}

/** Interactive circuit graph — nodes + edges for current-flow highlight */
export const circuitNodes = [
  { id: 'node', label: 'Node.js', group: 'backend', x: 18, y: 28 },
  { id: 'express', label: 'Express', group: 'backend', x: 32, y: 18 },
  { id: 'nest', label: 'NestJS', group: 'backend', x: 32, y: 38 },
  { id: 'bull', label: 'BullMQ', group: 'backend', x: 46, y: 28 },
  { id: 'socket', label: 'Socket.IO', group: 'realtime', x: 58, y: 18 },
  { id: 'webrtc', label: 'WebRTC', group: 'realtime', x: 72, y: 14 },
  { id: 'redis', label: 'Redis', group: 'databases', x: 58, y: 42 },
  { id: 'mongo', label: 'MongoDB', group: 'databases', x: 72, y: 48 },
  { id: 'pg', label: 'PostgreSQL', group: 'databases', x: 46, y: 52 },
  { id: 'docker', label: 'Docker', group: 'cloud', x: 84, y: 28 },
  { id: 'aws', label: 'AWS', group: 'cloud', x: 88, y: 46 },
  { id: 'nginx', label: 'Nginx', group: 'cloud', x: 84, y: 14 },
  { id: 'livekit', label: 'LiveKit', group: 'realtime', x: 72, y: 32 },
  { id: 'prisma', label: 'Prisma', group: 'backend', x: 32, y: 55 },
]

export const circuitEdges = [
  ['node', 'express'],
  ['node', 'nest'],
  ['node', 'bull'],
  ['express', 'socket'],
  ['nest', 'redis'],
  ['bull', 'redis'],
  ['socket', 'webrtc'],
  ['socket', 'redis'],
  ['redis', 'mongo'],
  ['redis', 'pg'],
  ['prisma', 'pg'],
  ['prisma', 'mongo'],
  ['socket', 'livekit'],
  ['livekit', 'nginx'],
  ['nginx', 'docker'],
  ['docker', 'aws'],
  ['node', 'docker'],
]

export const skillGroups = [
  {
    id: 'backend',
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'NestJS', 'JWT / OAuth2', 'BullMQ', 'Prisma', 'Drizzle'],
  },
  {
    id: 'realtime',
    title: 'Real-time / Infra',
    skills: ['Socket.IO', 'WebRTC', 'Coturn', 'Redis pub/sub', 'FCM / APNs', 'LiveKit', 'SSE'],
  },
  {
    id: 'databases',
    title: 'Databases',
    skills: ['MongoDB', 'PostgreSQL', 'Redis', 'Prisma ORM', 'Atomic ledgers'],
  },
  {
    id: 'cloud',
    title: 'Cloud / DevOps',
    skills: ['AWS', 'Docker', 'Nginx', 'GitHub Actions', 'PM2', 'Coolify'],
  },
]

export const projects = [
  {
    id: 'radiokhera',
    code: 'MOD-01',
    title: 'Radio Khera',
    subtitle: 'Live internet radio pipeline',
    stack: ['LiveKit', 'Icecast', 'Redis', 'SSE', 'React Native'],
    problem:
      'Community radio needed a real broadcast pipeline — not just a playlist page — with live now-playing and a mobile listener app.',
    solution:
      'Built end-to-end: LiveKit Egress → Nginx RTMP → Liquidsoap → Icecast. Real-time now-playing via SSE, Redis-backed queue, React Native Android app, and CI/CD with GitHub Actions + PM2.',
    link: 'https://globalkhera.com',
    linkLabel: 'globalkhera.com',
  },
  {
    id: 'jaatak',
    code: 'MOD-02',
    title: 'JaatakAstro',
    subtitle: 'Real-time consultation platform',
    stack: ['Socket.IO', 'WebRTC', 'Redis', 'MongoDB', 'Razorpay'],
    problem:
      'Astrology consultations needed reliable call/chat state, concurrent scaling, and billing tied to actual connection state.',
    solution:
      'Owned Socket.IO call lifecycle with Redis idempotency, WebRTC + Coturn, FCM push, Razorpay wallets, and a double-entry ledger. Platform hits 15K+ MAU with 3K+ concurrent connections.',
    link: null,
    linkLabel: null,
  },
  {
    id: 'chatapp',
    code: 'MOD-03',
    title: 'Real-Time Chat',
    subtitle: 'Socket.IO messaging system',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    problem: 'Needed a full chat product with auth, friend graph, and instant one-on-one messaging.',
    solution:
      'React + Tailwind client with Node/Express backend, MongoDB persistence, authentication, friend requests, and real-time message notifications.',
    link: null,
    linkLabel: null,
  },
  {
    id: 'fitspot',
    code: 'MOD-04',
    title: 'FitSpot.in',
    subtitle: 'Gym discovery & listing',
    stack: ['CodeIgniter', 'SQL', 'Bootstrap'],
    problem: 'Users needed local gym discovery; owners needed a way to list and get visibility.',
    solution:
      'SEO-driven fitness platform with gym listings and discovery — 2K+ monthly users in production.',
    link: null,
    linkLabel: null,
  },
]

export const experience = [
  {
    ts: '2024 — PRESENT',
    level: 'INFO',
    role: 'Backend Developer',
    org: 'Jaatak Astro Infotech · New Delhi',
    body: 'Building and scaling JaatakAstro — real-time astrology consultations. Own Socket.IO call lifecycle, WebRTC + Coturn, FCM push, Razorpay wallets, and double-entry ledger. 15K+ MAU, 99.9% uptime, 3K+ concurrent connections.',
  },
  {
    ts: '2023 — 2025',
    level: 'INFO',
    role: 'Freelance Full Stack',
    org: 'WebHubpoint',
    body: 'Delivered 8+ production platforms across fitness, e-commerce, and CRM — including Fitspot.in and payment gateway integrations handling ₹10L+ monthly volume.',
  },
  {
    ts: '2022 — 2023',
    level: 'INFO',
    role: 'Backend Intern',
    org: 'DRDO',
    body: 'Built backend APIs and secure internal workflows used by 50+ researchers — auth, approval flows, and reliable data handling for sensitive environments.',
  },
  {
    ts: '2021 — 2024',
    level: 'SYS',
    role: 'B.Tech — Computer Science',
    org: 'Maharshi Dayanand University',
    body: 'Software engineering, networking, and systems foundation for production backend work. AWS CCP · Amazon Sambhav Hackathon 2024 semifinalist.',
  },
]
