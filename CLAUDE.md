# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a job application tracker built as a monorepo using pnpm workspaces. It's a learning project to explore modern web development practices with type-safe full-stack development.

## Architecture

- **Monorepo Structure**: Uses pnpm workspaces with apps and packages
- **Frontend**: TanStack Start (React SSR framework) with TanStack Router and TanStack Query
- **Backend**: Hono API server
- **Language**: TypeScript across the entire project
- **Styling**: Tailwind CSS v4

## Common Commands

### Development

- `pnpm dev:fe` - Start frontend development server (port 3000)
- `pnpm dev:be` - Start backend development server (port 4000)
- `pnpm dev` (from root) - Start both frontend and backend concurrently

### Building

- `pnpm build:fe` - Build frontend for production
- `pnpm build:be` - Build backend TypeScript to JavaScript

### Testing & Linting

- `pnpm test` (from apps/web) - Run tests using Vitest
- `pnpm lint` (from apps/web) - Run ESLint
- `pnpm check` (from apps/web) - Format with Prettier and fix ESLint issues
- `pnpm format` - Format code with Prettier

### Workspace Management

- All commands use pnpm workspace filtering (`--filter web` or `--filter api`)
- Shared TypeScript configuration in `@job-application-tracker/config-typescript`

## Key Directories

- `apps/web/` - TanStack Start frontend application
- `apps/api/` - Hono backend API
- `packages/config-typescript/` - Shared TypeScript configuration package

## Development Notes

- Frontend runs on port 3000, backend on port 4000
- Uses TanStack Devtools for development debugging
- The project is currently in early development with basic scaffolding
- Both apps use the shared TypeScript configuration from the workspace
- Package structure follows flat naming convention (config-typescript matches package name)
