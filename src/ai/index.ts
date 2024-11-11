import { mixedbread } from 'mixedbread-ai-provider';
import { google } from '@ai-sdk/google';
import { embed, generateText } from 'ai';
import {
  systemEmbeddingsPrompt,
  systemSearchPrompt,
  systemSummarizePrompt,
} from '../../prompts/blog_summarization';
import { MixedbreadAIClient } from '@mixedbread-ai/sdk';

export const mxbai = new MixedbreadAIClient({
  apiKey: process.env.MIXEDBREAD_API_KEY!,
});

export const embeddingModel = mixedbread.textEmbeddingModel(
  'mixedbread-ai/mxbai-embed-large-v1',
  {
    prompt: systemEmbeddingsPrompt,
  }
);

export const searchQueryEmbeddingModel = mixedbread.textEmbeddingModel(
  'mixedbread-ai/mxbai-embed-large-v1',
  {
    prompt: systemSearchPrompt,
  }
);

export const textSummarizationModel = google('gemini-1.5-flash-002');

export const getSummarizedBlog = async (content: string): Promise<string> => {
  const { text } = await generateText({
    model: textSummarizationModel,
    system: systemSummarizePrompt,
    prompt: content,
  });

  return text;
};

export const generateEmbeddings = async (text: string): Promise<number[]> => {
  const { embedding } = await embed({
    model: embeddingModel,
    value: text,
  });

  return embedding;
};

export const generateSearchQueryEmbeddings = async (
  text: string
): Promise<number[]> => {
  const { embedding } = await embed({
    model: searchQueryEmbeddingModel,
    value: text,
  });

  return embedding;
};

export const rerankBlogs = async (blogs: string[], query: string) => {
  return await mxbai.reranking({
    model: 'mixedbread-ai/mxbai-rerank-large-v1',
    query,
    input: blogs,
    topK: 3,
    returnInput: false,
  });
};
