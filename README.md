# Wild Traff - Simple Blog

A simple blog application built with Next.js and Firebase. This project allows users to create, view, and manage blog posts.

## Features

- View a list of all blog posts
- Create new blog posts with title and content
- View individual post details
- Responsive design with Tailwind CSS
- Firebase integration for data storage

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
   - Add your Firebase configuration to `src/lib/firebase.ts`

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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
