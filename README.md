# CRM-Next

CRM-Next is a modern, lightweight Customer Relationship Management (CRM) system built using **Next.js**, **TypeScript**, **TailwindCSS**, and **React Query**. It is designed to help businesses manage customer interactions, streamline sales processes, and improve customer service with a user-friendly interface and efficient workflows.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Contact Management**: Store and manage customer contact information.
- **Sales Pipeline**: Track leads and manage opportunities throughout the sales cycle.
- **Task Management**: Create and assign tasks related to customers and opportunities.
- **Reporting**: Generate reports on sales performance and customer interactions.
- **Responsive UI**: Fully responsive design built with TailwindCSS for mobile and desktop usage.
- **SSR & SSG**: Server-side rendering and static site generation powered by Next.js for fast, SEO-friendly pages.

## Tech Stack

The project is built using the following technologies:

- **Next.js**: A React framework for server-side rendering and static site generation.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that adds static types.
- **TailwindCSS**: A utility-first CSS framework for designing responsive and customizable layouts.
- **React Query**: For handling data fetching and state management.
- **Axios**: For making HTTP requests to the backend.
- **ESLint & Prettier**: For code linting and formatting.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/crm-next.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd crm-next
   ```

3. **Install dependencies:**

   Make sure you have Node.js installed. Then, run the following command to install all required packages:

   ```bash
   npm install
   ```

4. **Start the development server:**

   Once the dependencies are installed, you can start the development server by running:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server, and the app will be accessible at `http://localhost:3000`.

## Configuration

To configure the CRM-Next project, you'll need to update the environment variables. Create a `.env.local` file in the root of the project and add the following:

```env
NEXT_PUBLIC_API_BASE_URL=https://api.yourcrm.com
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

- `NEXT_PUBLIC_API_BASE_URL`: The base URL of your CRM backend API.
- `NEXT_PUBLIC_ENABLE_DARK_MODE`: A flag to enable/disable dark mode (set to `true` or `false`).

## Usage

Once the server is running, you can access the following core features:

- **Dashboard**: View sales statistics, upcoming tasks, and recent customer interactions.
- **Contacts**: Manage all customer details, search, filter, and edit contact information.
- **Leads & Opportunities**: Track leads and opportunities through various stages.
- **Tasks**: Create, assign, and manage tasks related to sales and customer support.

### API Integration

CRM-Next uses Axios and React Query to fetch and manage data from the CRM API. The API configuration is controlled via environment variables, so ensure your API is available at the base URL defined in `.env.local`.

### Dark Mode

Dark mode can be enabled or disabled using the environment variable `NEXT_PUBLIC_ENABLE_DARK_MODE`. It is also user-controllable through a toggle in the UI.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint to lint the codebase.
- `npm run format`: Formats the codebase using Prettier.
- `npm run test`: Runs unit and integration tests (if applicable).

## Static Site Generation (SSG) & Server-Side Rendering (SSR)

Next.js provides both static generation (SSG) and server-side rendering (SSR) capabilities. You can configure your pages to use either depending on the requirements:

- **SSG**: Use `getStaticProps` and `getStaticPaths` for static generation.
- **SSR**: Use `getServerSideProps` for server-side rendering.

This allows you to optimize performance and improve SEO for key pages such as dashboards, reports, and customer profiles.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/my-feature`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/my-feature`).
5. Open a pull request.
