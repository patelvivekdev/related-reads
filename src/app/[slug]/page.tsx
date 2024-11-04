import { Markdown } from '@/components/Markdown';
import { RelatedBlogs } from '@/components/RelatedPosts';
import { getBlogs } from '@/lib/blogs';
import { notFound } from 'next/navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export async function generateStaticParams() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    slug: blog.frontmatter.slug,
  }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blogs = await getBlogs();
  const blog = blogs.find((blog) => blog.frontmatter.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="shadow-lg">
        <CardContent className="p-4">
          <Markdown>{blog.markdown as string}</Markdown>
        </CardContent>
      </Card>

      <Separator className="my-8" />

      <h3 className="text-2xl font-semibold text-primary text-center">
        Related Posts
      </h3>
      <RelatedBlogs currentSlug={slug} />
    </div>
  );
}
