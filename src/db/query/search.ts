import { eq, sql } from 'drizzle-orm';
import { db } from '..';
import { blogs } from '../schema';
import { rerankBlogs, generateSearchQueryEmbeddings } from '@/ai';

export const getSimilarBlogs = async (slug: string, embedding: number[]) => {
  const data = await db
    .select({
      slug: blogs.slug,
      title: blogs.title,
      content: blogs.content,
    })
    .from(
      sql`vector_top_k('blogs_idx', vector32(${JSON.stringify(embedding)}), 5) as v`
    )
    .leftJoin(blogs, sql`${blogs}.rowid = v.id`);

  const { data: rerankedData } = await rerankBlogs(
    data.map((blog) => blog.slug!),
    slug
  );

  return rerankedData.map(({ index }) => data[index]);
};

export async function getRelatedBlogs(slug: string) {
  const [currentBlog] = await db
    .select({
      content: blogs.content,
    })
    .from(blogs)
    .where(eq(blogs.slug, slug));

  const embedding = await generateSearchQueryEmbeddings(currentBlog.content);
  return getSimilarBlogs(slug, embedding);
}
