import { eq, sql } from 'drizzle-orm';
import { db } from '..';
import { blogs } from '../schema';

export const getBlogContent = async (slug: string) => {
  return await db
    .select({
      slug: blogs.slug,
      title: blogs.title,
      content: blogs.content,
    })
    .from(blogs)
    .where(eq(blogs.slug, slug));
};

export const getSimilarBlogs = async (embedding: number[]) => {
  return await db
    .select({
      slug: blogs.slug,
      title: blogs.title,
    })
    .from(
      sql`vector_top_k('blogs_idx', vector32(${JSON.stringify(embedding)}), 3) as v`
    )
    .leftJoin(blogs, sql`${blogs}.rowid = v.id`);
};
