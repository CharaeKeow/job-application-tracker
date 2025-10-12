# Job Application Tracker

A full-stack job application tracking system built as a learning project to explore modern web development practices, including monorepo architecture, type-safe frameworks, and robust authentication.

This project is a 2025 rebuild of an earlier version, focusing on learning new stacks that I am curious on.

## Tech Stack

- **Frontend:** TanStack Start, TypeScript, TanStack Query
- **Backend:** Hono, Better Auth, PostgreSQL, Drizzle ORM
- **Infrastructure:** `pnpm` workspaces, Docker Compose, Shared packages

## Project Structure

```
job-application-tracker/
├── apps/
│   ├── web/              # TanStack Start frontend
│   └── backend/          # Hono API server
├── packages/
│   ├── types/            # Shared TypeScript types
│   ├── validators/       # Zod schemas for validation
│   └── config/           # ESLint, TypeScript, Prettier configs
├── docker-compose.yml    # Local Postgres container
├── pnpm-workspace.yaml   # Workspace configuration
└── package.json          # Root scripts
```

## Getting Started

### Prerequisites
- Node.js 20+
- pnpm 9+
- Docker (for local Postgres)

### Installation

// TODO:

## Features

### Current
- Monorepo architecture with shared configurations
- Local development environment with hot module reloading
- PostgreSQL database with Docker Compose

### Planned
- **Authentication**: Email/password login with session management
- **Job Management**: CRUD operations for job applications
- **Status Tracking**: Pipeline stages (applied, interviewing, offer, rejected)
- **LLM Integration**: Automated job detail extraction from URLs
- **Filtering & Search**: Query jobs by company, status, date range
- **Analytics**: Application success rates and timeline visualization

## Milestones

**Milestone 1: Local Development** ✅ In Progress
- Set up monorepo with pnpm workspace
- Implement core features locally
- Achieve full-stack type safety
- Test authentication flows

**Milestone 2: Deployment** (Future)
- Choose hosting strategy (VPS, serverless, or hybrid)
- Configure CI/CD pipeline
- Set up monitoring and logging
- Production database setup

Each milestone provides standalone learning value - completion of Milestone 1 is sufficient to gain deep technical knowledge even without deployment.

## Contributing

This is a personal learning project, but suggestions and discussions are welcome. Feel free to open issues for questions or ideas.

## License

MIT
