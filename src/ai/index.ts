import { mixedbread } from 'mixedbread-ai-provider';
import { google } from '@ai-sdk/google';
import { embed, generateText } from 'ai';
import {
  systemEmbeddingsPrompt,
  systemSummarizePrompt,
} from '../../prompts/blog_summarization';

export const embeddingModel = mixedbread.textEmbeddingModel(
  'mixedbread-ai/mxbai-embed-large-v1',
  {
    prompt: systemEmbeddingsPrompt,
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
