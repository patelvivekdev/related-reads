import { getRelatedBlogs } from "@/lib/blogs";
import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface RelatedBlogsProps {
  currentSlug: string;
}

export async function RelatedBlogs({ currentSlug }: RelatedBlogsProps) {
  const relatedBlogs = await getRelatedBlogs(currentSlug);

  if (relatedBlogs.length === 0) {
    return (
      <p className="text-center text-muted-foreground">
        No related blogs found.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {relatedBlogs.map((blog) =>
        blog.slug === currentSlug ? null : (
          <Card
            key={blog.slug}
            className="flex flex-col hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-lg font-semibold line-clamp-2">
                <Link href={`/${blog.slug}`} className="hover:underline">
                  {blog.title}
                </Link>
              </CardTitle>
            </CardHeader>
          </Card>
        )
      )}
    </div>
  );
}
