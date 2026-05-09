# 🚀 NexusAI: Intelligent Business OS

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?logo=mongodb)](https://www.mongodb.com/)
[![Gemini API](https://img.shields.io/badge/Google-Gemini%20API-orange?logo=google)](https://ai.google.dev/)

**NexusAI** is an all-in-one AI-driven Business Operating System built to empower Small to Medium Businesses (SMBs). It centralizes customer interactions, automating support queries via an intelligent context-aware chatbot, while simultaneously qualifying leads, drafting email responses, and generating actionable business insights via a unified smart dashboard.

---

## 📖 Table of Contents

- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [API Endpoints](#-api-endpoints)
- [Future Scope](#-future-scope)

---

## 💡 About the Project

### The Problem
Small to Medium Businesses (SMBs) often struggle with high operational costs for customer support and lead management. Current solutions are fragmented across multiple platforms, leading to data silos, delayed responses, and lost sales opportunities.

### The Solution
NexusAI provides a unified platform combining Chatbot, CRM, and Analytics, natively integrated with advanced LLMs (Google Gemini API). It seamlessly facilitates human-AI collaboration—not only automating routine tasks but also preparing contextually rich hand-offs to human agents when sentiment drops or complex issues arise.

---

## ✨ Key Features

- **Intelligent Chatbot:** Context-aware assistant powered by Google Gemini API for resolving customer queries and qualifying leads.
- **Unified Smart Dashboard:** Real-time metrics, AI insights, and interactive charts (powered by Recharts).
- **Automated Task Management:** AI summarization of tickets, automated email drafting, and lead qualification.
- **Sentiment Analysis:** Real-time sentiment tracking to trigger smooth handoffs to human agents when necessary.
- **Secure Authentication:** JWT-based stateless authentication with Role-Based Access Control (RBAC).

---

## 🛠 Tech Stack

### Frontend
- **Framework:** [Next.js 16](https://nextjs.org/) (React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons & Charts:** [Lucide React](https://lucide.dev/), [Recharts](https://recharts.org/)

### Backend
- **Runtime & Framework:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) (Mongoose)
- **AI Integration:** [Google Generative AI (Gemini)](https://ai.google.dev/)
- **Security:** `bcryptjs`, `jsonwebtoken`, `helmet`, `cors`
- **Language:** TypeScript across the entire stack

---

## 🏗 System Architecture

1. **Client Interaction:** User input received via Chat UI or Email integration.
2. **API Layer:** Input sent to Express backend (REST API).
3. **Contextual Retrieval:** Backend retrieves past conversation history from MongoDB to maintain context.
4. **AI Generation:** Prompt is augmented and sent to the Gemini API.
5. **Actionable Intents:** Response is parsed for intents (e.g., "Schedule Meeting", "Create Ticket").
6. **Delivery:** Text response streams back to the user with a low-latency experience.

---

## 🚀 Getting Started

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (or local MongoDB)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd FlowZint-AI-Hackathon
   ```

2. **Setup the Backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Setup the Frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

### Environment Variables

You need to create `.env` files in both `frontend` and `backend` directories.

**Backend (`backend/.env`):**
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
GEMINI_API_KEY=your_google_gemini_api_key
```

**Frontend (`frontend/.env.local`):**
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Running the App

1. **Start the Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   *(Server starts on http://localhost:5000)*

2. **Start the Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```
   *(App runs on http://localhost:3000)*

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user & get token
- `POST /api/auth/logout` - Logout user

### AI Integrations
- `POST /api/ai/chat` - Main conversational endpoint
- `POST /api/ai/summarize` - Summarizes tickets/conversations
- `POST /api/ai/draft-email` - Generates email drafts based on context

### Dashboard & Analytics
- `GET /api/analytics/overview` - Fetch overall metrics
- `GET /api/tickets/recent` - Get recent support tickets

---

## 🔮 Future Scope
- **CRM Integrations:** Direct hooks into Salesforce, HubSpot, etc.
- **Voice-AI Integration:** Automated handling of phone support with real-time AI transcription and response.
- **Local Fine-tuned Models:** Custom, on-premise model deployment for organizations prioritizing strict data privacy.

---
*Built by Pratik for the FlowZint AI Hackathon.*
