# CareerConnect – Job & Internship Portal
DG Interns Hub | Final Full-Stack Capstone | Deadline: 13 November 2026

This starter extends the job-portal theme from earlier internship weeks. Stack: React/Vite, Express, MongoDB/Mongoose, JWT, bcryptjs, REST APIs, role middleware, Jest/Supertest, Postman, Docker and GitHub Actions.

## Run locally
Backend: `cd backend && cp .env.example .env && npm install && npm run dev`
Frontend: `cd frontend && npm install && npm run dev`
Set `VITE_API_URL=http://localhost:5000/api` in `frontend/.env`.
Tests: `cd backend && npm test`.

## Roles
Candidate: browse jobs, apply, view own applications.
Recruiter: create/edit/delete own jobs, view applicants for own jobs.
Admin: authorization role foundation; full admin management UI remains to be built.

## API
POST `/api/auth/register`, POST `/api/auth/login`
GET `/api/jobs`, GET `/api/jobs/:id`
POST/PUT/DELETE `/api/jobs` and `/api/jobs/:id` (recruiter/admin)
POST `/api/applications`, GET `/api/applications/my`
GET `/api/applications/job/:jobId` (owner recruiter/admin)

## Important
This is a starter, not a finished or deployed production app. Configure MongoDB and secrets, run and verify features, complete dashboards, run the test plan, add genuine screenshots, and deploy before claiming completion. No live URLs or passing test results are fabricated. Never commit `.env` or credentials.
