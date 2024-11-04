import { glob } from "glob";
import matter from "gray-matter";
import fs from "fs";

import { generateEmbeddings } from "@/ai";
import { getBlogContent, getSimilarBlogs } from "@/db/query/search";

export async function getBlogs() {
  const mdxFiles = await glob("src/content/**/*.mdx");
  const blogs = [];

  for (const file of mdxFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const { data: frontmatter, content: markdown } = matter(content);
    blogs.push({ frontmatter, markdown });
  }

  return blogs;
}

export async function getAllBlogsTitle() {
  const blogs = await getBlogs();

  return blogs.map((blog) => ({
    title: blog.frontmatter.title,
    slug: blog.frontmatter.slug,
  }));
}

export async function getRelatedBlogs(slug: string) {
  const blog = await getBlogContent(slug);

  const currentBlogEmbedding = await generateEmbeddings(blog[0].content);

  const relatedBlogs = await getSimilarBlogs(currentBlogEmbedding);

  return relatedBlogs;
}
