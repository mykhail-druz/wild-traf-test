# Wild Traff - Simple Blog

A simple blog application built with Next.js and Firebase. This project allows users to create, view, and manage blog posts.

## Features

- View a list of all blog posts
- Create new blog posts with title and content
- View individual post details
- Responsive design with Tailwind CSS
- Firebase integration for data storage
- Custom 404 page for handling not found routes
- Skeleton loaders for content during loading states
- Minimalistic loading spinner with size variants

## Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [Firebase 11](https://firebase.google.com/) - Backend and database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/mykhail-druz/wild-traf-test.git
   cd wild-traf-test
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase
   - Create a Firebase project
   - Set up Firestore database
   - Add your Firebase configuration to `.env.local` file:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application

## Project Structure

- `/src/app` - Next.js app router pages
- `/src/components` - Reusable UI components
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility functions and Firebase setup
- `/src/types` - TypeScript type definitions
- `.eslintrc.json` - ESLint configuration with rules for unused variables

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
