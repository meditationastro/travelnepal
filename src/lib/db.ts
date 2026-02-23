// src/lib/db.ts
// Unified db helpers — wraps Prisma for the legacy app/ routes and new src/app/ routes
import { prisma } from '@/lib/prisma';

export { prisma };

// ─── Blog Posts ───────────────────────────────────────────────────────────────

function normalizePost(post: any) {
  return {
    ...post,
    published: post.isPublished,
    created_at: post.createdAt,
    views: 0,
    author: '',
    featured_image: post.imageUrl,
  };
}

export async function getAllPosts(publishedOnly = true) {
  const posts = await prisma.blogPost.findMany({
    where: publishedOnly ? { isPublished: true } : undefined,
    orderBy: { createdAt: 'desc' },
  });
  return posts.map(normalizePost);
}

export async function getPostById(id: string | number) {
  const post = await prisma.blogPost.findUnique({ where: { id: String(id) } });
  return post ? normalizePost(post) : null;
}

export async function getPostBySlug(slug: string) {
  const post = await prisma.blogPost.findUnique({ where: { slug } });
  return post ? normalizePost(post) : null;
}

export async function createPost(data: {
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  category?: string;
  featured_image?: string;
  published?: boolean;
  author?: string;
}) {
  const post = await prisma.blogPost.create({
    data: {
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
      category: data.category,
      imageUrl: data.featured_image,
      isPublished: data.published ?? false,
      publishedAt: data.published ? new Date() : null,
    },
  });
  return normalizePost(post);
}

export async function updatePost(id: string | number, data: any) {
  const post = await prisma.blogPost.update({
    where: { id: String(id) },
    data: {
      ...(data.title !== undefined && { title: data.title }),
      ...(data.slug !== undefined && { slug: data.slug }),
      ...(data.excerpt !== undefined && { excerpt: data.excerpt }),
      ...(data.content !== undefined && { content: data.content }),
      ...(data.category !== undefined && { category: data.category }),
      ...(data.featured_image !== undefined && { imageUrl: data.featured_image }),
      ...(data.published !== undefined && {
        isPublished: data.published,
        publishedAt: data.published ? new Date() : null,
      }),
    },
  });
  return normalizePost(post);
}

export async function deletePost(id: string | number) {
  await prisma.blogPost.delete({ where: { id: String(id) } });
}

export async function incrementViews(id: string | number) {
  // BlogPost model has no views field; no-op for compatibility
  return;
}

// ─── Contacts ─────────────────────────────────────────────────────────────────

export async function createContact(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}) {
  return prisma.contact.create({ data });
}

export async function getAllContacts() {
  return prisma.contact.findMany({ orderBy: { createdAt: 'desc' } });
}

export async function markContactRead(id: string) {
  return prisma.contact.update({ where: { id }, data: { read: true } });
}

// ─── Users (via Prisma User model) ───────────────────────────────────────────

export async function getUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: string, password: string, name: string) {
  return prisma.user.create({
    data: { email, password, name, role: 'ADMIN' },
  });
}

export async function initDB() {
  // Prisma manages schema via migrations/push — no manual init needed
  return;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export async function getStats() {
  const [totalPosts, publishedPosts, totalContacts, unreadContacts] = await Promise.all([
    prisma.blogPost.count(),
    prisma.blogPost.count({ where: { isPublished: true } }),
    prisma.contact.count(),
    prisma.contact.count({ where: { read: false } }),
  ]);
  return { totalPosts, publishedPosts, totalContacts, unreadContacts };
}
