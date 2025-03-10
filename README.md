# University Library Management System

This project is a web-based university library management system built with Next.js, TypeScript, Tailwind CSS, and Drizzle ORM. It provides features for managing books, users, and borrowing records.

## Features

- **Book Management:**
  - Add, edit, and delete books.
  - Browse books by title, author, genre, and rating.
  - View book details, including cover image, description, and availability.
- **User Management:**
  - User authentication and authorization.
  - User profile management.
- **Borrowing Records:**
  - Track book borrowing and return dates.
  - Manage overdue books.
- **Admin Interface:**
  - Dashboard for managing books, users, and settings.

## Technologies Used

- **Next.js:** A React framework for building server-rendered and statically generated web applications.
- **TypeScript:** A superset of JavaScript that adds static typing.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Drizzle ORM:** A lightweight and type-safe Object-Relational Mapper for interacting with databases.
- **PostgreSQL:** A powerful, open-source relational database system.
- **NextAuth.js:** Authentication library for Next.js.
- **Upstash:** Serverless Redis for session management and workflow.
- **ImageKit:** Image CDN for image optimization and delivery.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/university-library.git
    cd university-library
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**

    - Create a `.env.local` file in the root directory.
    - Add the following environment variables, replacing the values with your actual credentials:

      ```bash
      NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
      NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
      IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key

      NEXT_PUBLIC_API_ENDPOINT=http://localhost:3000
      NEXT_PUBLIC_PROD_API_ENDPOINT=https://your-production-url.com

      DATABASE_URL=postgresql://your_database_url
      AUTH_SECRET=your_auth_secret

      UPSTASH_REDIS_URL=your_upstash_redis_url
      UPSTASH_REDIS_TOKEN=your_upstash_redis_token

      RESEND_TOKEN=your_resend_token
      ```

4.  **Run database migrations:**

    ```bash
    npx drizzle-kit generate:pg
    npx drizzle-kit push:pg
    ```

5.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
