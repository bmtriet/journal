import { getCollection } from 'astro:content';

const postMetaModules = import.meta.glob('../content/post-meta/*.json', { eager: true });

export type Category = 'AI Daily' | 'Vision' | 'Life';

export const CATEGORY_TO_SLUG: Record<Category, string> = {
  'AI Daily': 'ai-daily',
  Vision: 'vision',
  Life: 'life'
};

export const SLUG_TO_CATEGORY: Record<string, Category> = {
  'ai-daily': 'AI Daily',
  vision: 'Vision',
  life: 'Life'
};

export async function getAllPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostMeta(metaFile?: string) {
  if (!metaFile) return null;
  const entry = Object.entries(postMetaModules).find(([path]) => path.endsWith(`/${metaFile}`));
  return entry ? (entry[1] as Record<string, unknown>).default : null;
}
