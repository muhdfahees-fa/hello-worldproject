# Hello World React App

A simple React app with a yellow gradient background.

## Prerequisites

Make sure you have the following installed:

```bash
node --version    # Node.js (v18 or above)
npm --version     # npm (comes with Node.js)
npx --version     # npx (comes with npm, used to run packages without installing)
docker --version  # Docker (for containerized run)
```

- Download Node.js: https://nodejs.org
- Download Docker: https://www.docker.com/products/docker-desktop

## Clone the Repository

```bash
git clone https://github.com/muhdfahees-fa/hello-worldproject.git
cd hello-worldproject
```

## Setup

```bash
npm install
```

## Development

```bash
npm run dev       # Starts a dev server with hot reload (no build needed)
```

## Production Build & Run

```bash
npm run build     # Builds the app into the dist/ folder
npx serve -s dist # Serves the built files on http://localhost:3000
```

- `npm run build` only creates the files, it does not start a server
- `npx serve -s dist` starts a server to serve those files to the browser

## Docker

```bash
docker build -t hello-world .
docker run -p 3000:3000 hello-world
```

App will be available at http://localhost:3000

## Dockerfile Explained

```dockerfile
FROM node:20-alpine           # Use lightweight Node.js 20 as the base image
WORKDIR /app                  # Set /app as the working directory inside the container
COPY package.json package-lock.json ./   # Copy dependency files first (for caching)
RUN npm ci                    # Clean install - installs exact versions from package-lock.json
                              #   npm ci vs npm install:
                              #   - npm ci deletes node_modules first, then installs fresh
                              #   - npm ci uses exact versions from package-lock.json (no surprises)
                              #   - npm install may update versions and modify package-lock.json
                              #   - npm ci is faster and safer for builds/CI pipelines
COPY . .                      # Copy the rest of the project files
RUN npm run build             # Build the React app (output goes to /app/dist)
RUN npm install -g serve      # Install 'serve' to host static files
EXPOSE 3000                   # Tell Docker the app will use port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]  # Start the server when container runs
                              #   serve  → the static file server we installed
                              #   -s     → single-page app mode (all routes serve index.html)
                              #   dist   → folder containing the built React files
                              #   -l 3000 → listen on port 3000
```
