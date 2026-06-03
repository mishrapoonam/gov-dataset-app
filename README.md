# ONS Dataset Explorer

A Next.js app to browse Office for National Statistics (ONS) datasets using GOV.UK styling.

## Prerequisites

- Node.js 20 or later
- npm (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

## Clone And Install

```bash
git clone https://github.com/mishrapoonam/gov-dataset-app.git
cd gov-dataset-app
npm install
```

## Run Locally (Development)

```bash
npm run dev
```

Open:

- http://localhost:3000

The app reloads automatically when you edit files.

## Build And Run (Production)

Build:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production bundle
- `npm run start`: Start production server

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- GOV.UK Frontend

## Project Structure

```text
app/          Route pages (App Router)
components/   Reusable UI components
lib/          API helpers and utilities
public/       Static files (fonts, images, manifest)
```

## Troubleshooting

- Port already in use:

	```bash
	lsof -i :3000
	```

	Stop the process using that port, then run `npm run dev` again.

- Dependencies missing after unzip/download:

	```bash
	npm install
	```

- If build fails, use a clean install:

	```bash
	rm -rf node_modules package-lock.json
	npm install
	npm run build
	```
