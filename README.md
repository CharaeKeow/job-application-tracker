# Job Application Tracker

A full-stack job application tracking system built as a learning project to explore modern web development practices, including monorepo architecture, type-safe frameworks, and robust authentication.

This project is a 2025 rebuild of an earlier version, focusing on learning new stacks that I am curious on.

## Tech Stack

- **Frontend:** TanStack Start, TypeScript, TanStack Query, Tailwind CSS v4
- **Backend:** Hono
- **Infrastructure:** `pnpm` workspaces, Shared packages

## Project Structure

```
job-application-tracker/
├── apps/
│   ├── web/              # TanStack Start frontend
│   └── api/              # Hono API server
├── packages/
│   ├── config-eslint/    # Shared ESLint configurations
│   └── config-typescript/ # Shared TypeScript configuration
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

```bash
git clone https://github.com/CharaeKeow/job-application-tracker.git
cd job-application-tracker
pnpm install
pnpm dev
```

## Features

### Current

- Monorepo architecture with shared configurations
- Local development environment with hot module reloading

### Planned

- **Database**: PostgreSQL with Docker Compose
- **Authentication**: Email/password login with session management
- **Job Management**: CRUD operations for job applications
- **Status Tracking**: Pipeline stages (applied, interviewing, offer, rejected)
- **LLM Integration**: Automated job detail extraction from URLs
- **Filtering & Search**: Query jobs by company, status, date range
- **Analytics**: Application success rates and timeline visualization

## Milestones

**Milestone 1: Local Development** ✅ In Progress

- [x] Project setup (monorepo setup, linting, formatting, & typing)
- [ ] Set up PostgreSQL database with Drizzle ORM
- [ ] Integrate Better Auth for authentication
- [ ] Design job application schema with status field
- [ ] Build API endpoints for job CRUD operations
- [ ] Create frontend forms and UI for job management
- [ ] Add filtering and search functionality
- [ ] Integrate LLM for automated job detail extraction

**Milestone 2: Deployment** (Future)

- [ ] Choose and configure hosting strategy (VPS, serverless, or hybrid)
- [ ] Set up CI/CD pipeline for automated deployments
- [ ] Configure monitoring and logging
- [ ] Set up production database
- [ ] Add analytics dashboard for application success rates

Each milestone provides standalone learning value - completion of Milestone 1 is sufficient to gain deep technical knowledge even without deployment.

## Contributing

This is a personal learning project, but suggestions and discussions are welcome. Feel free to open issues for questions or ideas.

## License

MIT
