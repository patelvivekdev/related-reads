import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SquareArrowOutUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const technologies = [
    'React',
    'Next.js',
    'AI',
    'Tailwind CSS',
    'Vercel AI SDK',
    'Mixedbread as embedding Model',
    'Mixedbread as reranking Model',
    'Google generative API (flash-02) for summary',
    'Drizzle ORM',
    'Turso',
  ];

  return (
    <div className="flex items-center justify-center  min-h-[100% - 3.5rem ] bg-gradient-to-r from-blue-100 to-purple-100 p-4">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-center text-blue-800">
            Project Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg mb-6 text-gray-700">
            In this project, I have developed a Next.js application that
            showcases related reads using AI algorithms. The application uses AI
            to summarize the content of the blog and then uses the summarized
            content to find related reads.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">
            Technologies Used
          </h2>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {technologies.map((tech, index) => (
              <Badge key={index} className="text-sm px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              Key Features
            </h3>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>AI-powered content summarization</li>
              <li>Related reads recommendation</li>
              <li>Responsive design with Tailwind CSS</li>
              <li>Server-side rendering with Next.js</li>
              <li>Integration with Google&apos;s generative API</li>
              <li>
                Embedding and reranking model from Mixedbread for related reads
              </li>
              <li>Drizzle ORM for database operations</li>
              <li>Turso for Vector Database</li>
            </ul>
            <p className="text-center font-semibold mt-2">
              Made with ❤️ by{' '}
              <Link className="text-blue-500" href="https://patelvivek.dev">
                <SquareArrowOutUpRight className="inline-block w-4 h-4" /> Vivek
                Patel{' '}
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
