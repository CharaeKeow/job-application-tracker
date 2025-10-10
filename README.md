# Job Application Tracker

A modern full-stack job application tracking system built as a learning project to explore monorepo architecture, modern web frameworks, and production-grade authentication patterns.

## Overview

This project serves as a practical exploration of:
- **Monorepo management** with pnpm workspaces
- **TanStack Start** for type-safe full-stack React development
- **Hono** for lightweight, web-standards-compliant backend APIs
- **Better Auth** for production-ready authentication flows
- **LLM integration** for automated job posting data extraction

Built in 2025 to replace the original 2023 version (separate Express + Next.js repos) with modern tooling and improved developer experience.

## Tech Stack

### Frontend
- **TanStack Start** - Full-stack React framework with server functions
- **TypeScript** - End-to-end type safety
- **TanStack Query** - Data fetching and state management

### Backend
- **Hono** - Fast, lightweight web framework following web standards
- **Better Auth** - Framework-agnostic authentication with built-in security features
- **PostgreSQL** - Relational database
- **Drizzle ORM** - Type-safe database client

### Infrastructure
- **pnpm workspaces** - Monorepo package management
- **Docker Compose** - Local development environment
- **Shared packages** - Common types, validators, and configs

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

```bash
# Clone the repository
git clone <repo-url>
cd job-application-tracker

# Install dependencies
pnpm install

# Start local Postgres
pnpm db:up

# Run database migrations
pnpm --filter backend migrate

# Start development servers
pnpm dev
```

The application will be available at:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:4000`

### Useful Commands

```bash
# Development
pnpm dev              # Start all apps in parallel
pnpm dev:fe           # Start frontend only
pnpm dev:be           # Start backend only

# Database
pnpm db:up            # Start Postgres container
pnpm db:down          # Stop Postgres container
pnpm db:reset         # Reset database (destructive)

# Build
pnpm build            # Build all packages
pnpm --filter web build   # Build specific package

# Linting & Type Checking
pnpm lint             # Run ESLint on all packages
pnpm typecheck        # Run TypeScript compiler checks
```

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

## Development Philosophy

This project follows a **milestone-based approach**:

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

## Architecture Decisions

### Why Monorepo?
Enables shared types and validators between frontend and backend, eliminating API contract drift. Simplifies development workflow with single command to run entire stack.

### Why TanStack Start?
Modern alternative to Next.js with better type safety for server functions, framework-agnostic deployment, and Vite-powered development experience.

### Why Hono?
Web standards-compliant APIs (Request/Response objects) that work across Node.js, Bun, Deno, and edge runtimes. Built-in RPC support provides end-to-end type safety without GraphQL/tRPC complexity.

### Why Better Auth?
Superior to NextAuth for framework-agnostic projects. Built-in MFA, passkeys, rate limiting, and better TypeScript integration with modern ORMs.

## Contributing

This is a personal learning project, but suggestions and discussions are welcome. Feel free to open issues for questions or ideas.

## License

MIT
