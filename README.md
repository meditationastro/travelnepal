# 🏔️ Himalaya Retreat — Full Stack Web Application
..
A complete, production-ready website for a Meditation & Vedic Astrology Retreat in Nepal. Built with Next.js 14, Prisma, PostgreSQL, Stripe, and NextAuth.

---

## ✨ Features

### Public Website
- **Homepage** — Hero, programs, astrology services, testimonials, stats
- **Retreat Programs** — 3-day, 7-day, 14-day, private, group retreats
- **Individual Retreat Pages** — Full details, daily schedule, booking form
- **Astrology Services** — 6 Vedic astrology services with booking
- **Retreat Calendar** — All upcoming dates with availability
- **Spiritual Discovery Quiz** — 4-question assessment with personalized recommendations
- **Blog / Wisdom Library** — Meditation guides, astrology insights, travel tips
- **About Page** — Founder story, teachers, philosophy, location
- **Contact Page** — Contact form + WhatsApp integration

### User Dashboard
- Dashboard overview with countdown to retreat
- My Bookings — view, cancel, download ticket
- Astrology Reports — downloadable PDFs
- Payments — invoice history
- Preparation checklist

### Admin Panel
- Booking management with status updates
- Program management (add/edit retreats & dates)
- Astrology report uploads & astrologer assignment
- User management
- Revenue analytics

### Backend
- REST API with Next.js App Router API routes
- Authentication (NextAuth with credentials)
- Stripe payment processing + webhooks
- PostgreSQL database via Prisma ORM
- Email automation (Nodemailer)

---

## 🚀 Quick Start

### 1. Clone & Install

```bash
git clone https://github.com/yourusername/himalaya-retreat.git
cd himalaya-retreat
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

| Variable | Where to get it |
|----------|----------------|
| `DATABASE_URL` | [Neon](https://neon.tech) (free), [Supabase](https://supabase.com), or [Railway](https://railway.app) |
| `NEXTAUTH_SECRET` | Run: `openssl rand -base64 32` |
| `STRIPE_SECRET_KEY` | [Stripe Dashboard](https://dashboard.stripe.com) |
| `EMAIL_*` | Gmail App Password |

### 3. Set Up Database

```bash
# Push schema to database
npm run db:push

# Seed with sample data
npm run db:seed
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

**Admin Login:** `admin@himalayaretreat.com` / `admin123`

---

## 📦 Deploy to Vercel

### Option A: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/himalaya-retreat)

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Set environment variables in Vercel dashboard or:
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
# ... etc
```

### Option C: GitHub Actions CI/CD

1. Push to GitHub
2. Connect repo to Vercel
3. Add secrets to GitHub repo:
   - `VERCEL_TOKEN`
   - `VERCEL_ORG_ID`
   - `VERCEL_PROJECT_ID`
4. Every push to `main` auto-deploys!

---

## 🗄️ Database

We recommend **Neon** (free PostgreSQL):

1. Create account at [neon.tech](https://neon.tech)
2. Create a database
3. Copy the connection string to `DATABASE_URL`
4. Run `npm run db:push`

---

## 💳 Stripe Setup

1. Create account at [stripe.com](https://stripe.com)
2. Get API keys from Dashboard
3. For webhooks (local testing):
   ```bash
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```

---

## 📁 Project Structure

```
himalaya-retreat/
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── seed.js              # Sample data
├── src/
│   ├── app/
│   │   ├── api/             # API routes
│   │   │   ├── auth/        # NextAuth + Register
│   │   │   ├── bookings/    # Booking CRUD
│   │   │   ├── programs/    # Retreat programs
│   │   │   └── webhooks/    # Stripe webhooks
│   │   ├── admin/           # Admin dashboard
│   │   ├── astrology/       # Astrology pages
│   │   ├── auth/            # Login/Register
│   │   ├── blog/            # Blog pages
│   │   ├── calendar/        # Retreat calendar
│   │   ├── dashboard/       # User dashboard
│   │   ├── quiz/            # Spiritual assessment
│   │   ├── retreats/        # Retreat pages
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── booking/         # Booking form
│   │   ├── home/            # Homepage sections
│   │   ├── layout/          # Navbar, Footer
│   │   └── providers/       # Auth provider
│   ├── lib/
│   │   ├── auth.ts          # NextAuth config
│   │   └── prisma.ts        # Prisma client
│   └── types/
│       └── next-auth.d.ts   # Type extensions
├── .env.example
├── next.config.js
├── tailwind.config.js
├── vercel.json
└── package.json
```

---

## 🎨 Design System

- **Font Display:** Playfair Display (headings)
- **Font Body:** DM Sans
- **Font Italic:** Cormorant Garamond
- **Gold:** `#C5A253`
- **Saffron:** `#E8891A`
- **Sage Green:** `#4a7e50`
- **Terracotta:** `#C4663A`
- **Deep Earth:** `#1c1917`
- **Parchment:** `#fdf8f0`

---

## 🔒 Security

- Passwords hashed with bcrypt
- JWT-based sessions
- Admin routes server-side protected
- Stripe webhook signature verification
- CSRF protection via NextAuth

---

## 📧 Email Templates

Emails sent automatically for:
- Booking confirmation
- 30-day reminder
- 7-day reminder
- Post-retreat feedback
- Astrology session reminders

Configure via `EMAIL_*` environment variables.

---

## 🌐 Internationalization (Future)

Structure supports adding: English, Hindi, Nepali, German

---

Made with 🙏 for seekers everywhere.
