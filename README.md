# Grocery Hub - Inventory Management & Billing System

A full-stack grocery retail solution for inventory tracking, stock controls, and POS billing.

## Tech Stack
- Frontend: React + Vite
- Backend: Node.js + Express
- Database: MySQL (with schema in `database/schema.sql`)

## Project Structure

```text
.
├── backend/
│   ├── src/
│   ├── .env.example
│   ├── package.json
│   └── README.md
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
├── database/
│   └── schema.sql
├── docs/
│   └── project-draft.md
├── README.md
├── .gitignore
└── package.json
```

## Features
- Inventory management
- Product stock tracking
- Supplier and purchase records
- POS billing and invoice flow
- Payment tracking and tax handling
- Dashboard and summary reports
- Role-based login

## Quick Start

1. Install backend dependencies:
   ```bash
   cd backend && npm install
   ```

2. Configure `.env` from `.env.example`.

3. Start backend:
   ```bash
   npm run dev
   ```

4. Install frontend dependencies:
   ```bash
   cd ../frontend && npm install
   ```

5. Start frontend:
   ```bash
   npm run dev
   ```

## Demo Credentials
- Admin: `admin@groceryhub.com` / `admin123`
- Cashier: `cashier@groceryhub.com` / `cashier123`

## Roadmap
- Multi-store support
- Barcode integration
- Reports export
- Cloud deployment
- Mobile app support
