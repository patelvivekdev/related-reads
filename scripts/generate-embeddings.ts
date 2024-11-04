import { glob } from 'glob';
import matter from 'gray-matter';
import fs from 'fs';
import path from 'path';
import { generateEmbeddings, getSummarizedBlog } from '@/ai';
import { storeEmbedding } from '@/db/query/insert';

async function init() {
  const mdxFiles = await glob('src/content/**/*.mdx');
  console.log(`Found ${mdxFiles.length} blog posts`);
  console.log('=================================');

  for (const file of mdxFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const { data: frontmatter } = matter(content);

    const stats = fs.statSync(file);
    const cacheFile = path.join('.cache', `${path.basename(file)}.json`);

    if (
      fs.existsSync(cacheFile) &&
      fs.statSync(cacheFile).mtime > stats.mtime
    ) {
      continue;
    }

    console.log(`Processing ${frontmatter.title}`);
    console.log('=================================');

    const summarizedBlog = await getSummarizedBlog(content);
    console.log(`--> 1. Summarized ${frontmatter.title}`);

    const embedding = await generateEmbeddings(summarizedBlog);
    console.log(`--> 2. Generated embedding for ${frontmatter.title}`);

    await storeEmbedding(
      frontmatter.slug,
      frontmatter.title,
      summarizedBlog,
      embedding
    );
    console.log(`--> 3. Stored embedding for ${frontmatter.title}`);

    fs.mkdirSync('.cache', { recursive: true });
    fs.writeFileSync(cacheFile, JSON.stringify({ generated: new Date() }));
  }

  console.log('=================================');
  console.log('Embeddings generated successfully!');
}

init();
