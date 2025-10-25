# 🏠 Airbnb Clone

A fully functional **Airbnb Clone** built with **Next.js 13**, **TypeScript**, **Prisma**, **NextAuth**, and **Tailwind CSS**, featuring dynamic listings, authentication, reservations, favorites, and search functionality.

---

## 🚀 Features

- **User Authentication:** Sign up, login, logout with Email and GitHub OAuth.  
- **Listings:** Create, view, and delete property listings.  
- **Reservations:** Users can reserve listings and cancel reservations.  
- **Favorites:** Mark listings as favorites for quick access.  
- **Search & Filters:** Filter listings by location, date, guests, rooms, and bathrooms.  
- **Interactive Map:** View listing locations with **Leaflet.js**.  
- **Responsive Design:** Fully responsive with **Tailwind CSS**.  
- **Dynamic Pages:** Server-side rendering using **Next.js Dynamic Routes**.  

---

## 🧱 Tech Stack

- **Next.js 13** – App Router, Server Components, Dynamic Routing  
- **TypeScript** – Type safety across the app  
- **Prisma** – Database ORM  
- **PostgreSQL** – Stores users, listings, and reservations  
- **NextAuth.js** – Authentication (Email & GitHub OAuth)  
- **Tailwind CSS** – Styling  
- **React Hooks** – Local state management  
- **Zustand** – Global modal state management  
- **React Date Range** – Date selection for reservations  
- **Leaflet.js** – Interactive map for listings  
- **Axios** – API requests  
- **React Hot Toast** – Notifications  

---

## 📁 Project Structure

app/
- **├─ actions/            # Server-side API actions (get listings, users, reservations)** 
- **├─ components/         # Reusable components (modals, inputs, navbar, listings, etc.)** 
- **├─ hooks/               # Custom hooks (modal state, favorites, countries)** 
- **├─ providers/**          # Context providers (ToasterProvider)
- **├─ listings/**            # Listings pages and client components
- **├─ trips/**               # Trips pages
- **├─ properties/**          # User properties management
- **├─ reservations/**        # Reservations management
- **├─ types/               # Type definitions (SafeUser, SafeListing *SafeReservation)** 
- **├─ globals.css**         # Tailwind CSS base
- **├─ layout.tsx**          # Root layout with Navbar and Modals


## ⚙️ Installation

### Clone the repository

git clone <repo-url>
cd airbnb-clone

### Install dependencies

npm install

## Ste up environment variables

### Create a .env file in the project root:

DATABASE_URL=<your-database-url>
NEXTAUTH_SECRET=<random-secret>
GITHUB_ID=<your-github-client-id>
GITHUB_SECRET=<your-github-client-secret>


## Run Prisma migrations

npx prisma migrate dev

## Run the development server 

npm run dev


## Open in browser

http://localhost:3000


## 🧭 Usage

- Click **“Airbnb your home”** to create a new listing  
- Use the **search bar** to filter listings by location, date, and guests  
- **Favorite** listings by clicking the heart icon  
- View your **trips** and **reservations** from the profile menu  
- Manage your **properties** in the “Properties” section  

---

## 📝 Notes

- The app uses **Zustand** for modal state management  
- Dynamic pages fetch data on the **server** for SEO and performance  
- **Client-only components** ensure interactivity like modals, search, and maps  
- Date calculations for reservations use **date-fns**  
- Add image upload support for listings using **Cloudinary** or **AWS S3**  
---






