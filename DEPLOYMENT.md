# Deployment checklist
1. Provision managed MongoDB (e.g. MongoDB Atlas).
2. Deploy backend and set MONGO_URI, JWT_SECRET, JWT_EXPIRES_IN, CLIENT_URL and PORT as hosting environment variables.
3. Deploy frontend and set VITE_API_URL to the deployed backend `/api` URL.
4. Restrict CORS to the exact frontend origin and enable HTTPS.
5. Run live smoke tests for registration, login, job search and applications.
6. Add logs, monitoring and database backups.
7. Add real verified frontend/backend/GitHub URLs to README and report.
This package does not deploy the app or create hosting accounts.
