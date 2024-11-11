# Related Reads

Welcome to the Related Reads project! This project showcases a Next.js application that uses AI algorithms to summarize blog content and recommend related reads.

## Project Summary

In this project, I have developed a Next.js application that showcases related reads using AI algorithms. The application uses AI to summarize the content of the blog and then uses the summarized content to find related reads.

## Technologies Used

- React
- Next.js
- AI
- Tailwind CSS
- Vercel AI SDK
- Mixedbread as embedding Model
- Mixedbread as reranking Model
- Google generative API (flash-02) for summary
- Drizzle ORM
- Turso

## Key Features

- AI-powered content summarization
- Related reads recommendation
- Responsive design with Tailwind CSS
- Server-side rendering with Next.js
- Integration with Google's generative API
- Embedding and reranking model from Mixedbread for related reads
- Drizzle ORM for database operations
- Turso for Vector Database

## Setup and Installation

1. Clone the repository:
```bash
git clone https://github.com/patelvivekdev/related-reads.git
cd related-reads
```

2. Install dependencies:
```bash
bun i
```

3. Set up environment variables:
    Create a `.env.local` file in the root directory and add the following variables:
```env
TURSO_CONNECTION_URL=your_turso_connection_url
TURSO_AUTH_TOKEN=your_turso_auth_token

GOOGLE_GENERATIVE_AI_API_KEY=your_google_generative_ai_api_key
MIXEDBREAD_API_KEY=your_mixedbread_api_key
```

4. Run the development server:
```bash
bun run dev
```

5. Open your browser and navigate to `http://localhost:3000`.

## Scripts


- `bun run db:migrate`: Applies database migrations.
- `bun run db:generate`: Generates types and schema from the database.
- `bun run generate-embeddings`: Generates embeddings for blog posts.
- 
- `bun run dev`: Runs the development server.

- `bun run build`: Builds the application for production.
- `bun run start`: Starts the production server.
- `bun run db:studio`: Opens the database studio for interactive management.

## Folder Structure

- `src/app`: Contains the main application components and pages.
- `src/components`: Contains reusable UI components.
- `src/content`: Contains blog content in MDX format.
- `src/db`: Contains database-related files and configurations.
- `scripts`: Contains utility scripts for generating embeddings.

## Read More About Turso vector search
- [turso-vector-search](https://patelvivek.dev/projects/turso-vector-search)

## Author

Made with ❤️ by [Vivek Patel](https://patelvivek.dev)

## License

This project is licensed under the MIT License.

## Links

- [Live Demo](https://related-reads.vercel.app)
- [Vivek Patel](https://patelvivek.dev)
- [Turso](https://turso.tech/)
- [Mixedbread](https://mixedbread.ai)
- [Google AI](https://ai.google.dev/)