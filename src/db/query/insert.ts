import { eq } from "drizzle-orm";
import { db } from "..";
import { blogs } from "../schema";

export async function storeEmbedding(
  slug: string,
  title: string,
  content: string,
  embedding: number[]
) {
  const existingBlog = await db
    .select()
    .from(blogs)
    .where(eq(blogs.slug, slug));

  if (existingBlog.length > 0) {
    await db
      .update(blogs)
      .set({
        title,
        content,
        embedding,
      })
      .where(eq(blogs.slug, slug))
      .returning();
  } else {
    await db
      .insert(blogs)
      .values({
        slug,
        content,
        embedding,
        title,
      })
      .returning();
  }
}
