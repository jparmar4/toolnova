// Re-export all blog data and utilities for backward compatibility
export type { BlogPost } from './types';

export {
  blogPosts,
  getAllBlogPosts,
  getBlogPostBySlug,
  getRelatedPosts,
  getRecentPosts,
  getFeaturedPosts,
  getAllCategories,
  getAllKeywords,
  getPostsByAuthor,
  // Legacy compatibility exports
  getAllPosts,
  getPostBySlug,
  getAllTags,
} from './articles';
