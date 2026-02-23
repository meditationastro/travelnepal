import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { format } from 'date-fns';
import { Plus, Edit, Eye, EyeOff } from 'lucide-react';
import { DeleteBlogButton } from '@/components/admin/DeleteBlogButton';

async function getPosts() {
  try {
    return await prisma.blogPost.findMany({ orderBy: { createdAt: 'desc' } });
  } catch { return []; }
}

export default async function AdminBlogPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Blog Posts</h1>
          <p className="text-stone-400 text-sm mt-1">{posts.length} total posts</p>
        </div>
        <Link href="/admin/blog/new"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white text-sm btn-gold">
          <Plus className="w-4 h-4" /> New Post
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
        {posts.length === 0 ? (
          <div className="p-16 text-center">
            <div className="text-5xl mb-4">✍️</div>
            <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">No blog posts yet</h3>
            <p className="text-stone-400 mb-6">Share your wisdom with the world.</p>
            <Link href="/admin/blog/new" className="btn-gold inline-block px-6 py-3 rounded-xl font-semibold text-white">
              Write First Post
            </Link>
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="border-b border-stone-100 bg-stone-50">
                <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Title</th>
                <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Category</th>
                <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Status</th>
                <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Created</th>
                <th className="text-left px-6 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {posts.map(post => (
                <tr key={post.id} className="hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-stone-900 text-sm line-clamp-1">{post.title}</div>
                    <div className="text-stone-400 text-xs mt-0.5">/{post.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
                      {post.category || 'Uncategorized'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`flex items-center gap-1.5 text-xs font-medium ${post.isPublished ? 'text-green-600' : 'text-stone-400'}`}>
                      {post.isPublished ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                      {post.isPublished ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-stone-400 text-xs">
                    {format(new Date(post.createdAt), 'MMM d, yyyy')}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link href={`/admin/blog/${post.id}/edit`}
                        className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors">
                        <Edit className="w-4 h-4" />
                      </Link>
                      <Link href={`/blog/${post.slug}`} target="_blank"
                        className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition-colors">
                        <Eye className="w-4 h-4" />
                      </Link>
                      <DeleteBlogButton postId={post.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
