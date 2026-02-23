'use client';

import { useEffect, useMemo, useState } from 'react';
import { Package, ShoppingBag, Plus, Pencil, Trash2, X } from 'lucide-react';

type ShopOrderStatus = 'PENDING' | 'CONFIRMED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

type ShopOrder = {
  id: string;
  orderNumber: string;
  customerName: string;
  email: string;
  phone: string | null;
  country: string;
  city: string;
  address: string;
  paymentMethod: 'COD' | 'TRANSFER' | 'WHATSAPP';
  status: ShopOrderStatus;
  total: number;
  createdAt: string;
  items: Array<{ id: string; name: string; qty: number; price: number }>;
};

type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  price: number;
  originalPrice: number | null;
  rating: number;
  reviews: number;
  badge: string | null;
  imageUrl: string | null;
  icon: string;
  isActive: boolean;
  sortOrder: number;
};

const statusPill: Record<ShopOrderStatus, string> = {
  PENDING: 'bg-amber-100 text-amber-700',
  CONFIRMED: 'bg-green-100 text-green-700',
  SHIPPED: 'bg-blue-100 text-blue-700',
  DELIVERED: 'bg-purple-100 text-purple-700',
  CANCELLED: 'bg-red-100 text-red-700',
};

export default function AdminShopPage() {
  const [tab, setTab] = useState<'orders' | 'products'>('orders');
  const [orders, setOrders] = useState<ShopOrder[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState<ShopOrder | null>(null);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [creatingProduct, setCreatingProduct] = useState(false);

  const refresh = async () => {
    setLoading(true);
    try {
      const [oRes, pRes] = await Promise.all([
        fetch('/api/admin/shop/orders', { cache: 'no-store' }),
        fetch('/api/admin/shop/products', { cache: 'no-store' }),
      ]);
      if (oRes.ok) setOrders(await oRes.json());
      if (pRes.ok) setProducts(await pRes.json());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { refresh(); }, []);

  const orderCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: orders.length };
    for (const s of ['PENDING','CONFIRMED','SHIPPED','DELIVERED','CANCELLED'] as ShopOrderStatus[]) {
      counts[s] = orders.filter(o => o.status === s).length;
    }
    return counts;
  }, [orders]);

  const updateOrderStatus = async (id: string, status: ShopOrderStatus) => {
    await fetch(`/api/admin/shop/orders/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status }),
    });
    await refresh();
  };

  const saveProduct = async (p: Partial<Product> & { id?: string }) => {
    const payload = {
      ...p,
      price: Number(p.price || 0),
      originalPrice: (p.originalPrice as any) === '' ? null : (p.originalPrice === null || p.originalPrice === undefined ? null : Number(p.originalPrice)),
      rating: Number(p.rating || 4.8),
      reviews: Number(p.reviews || 0),
      sortOrder: Number(p.sortOrder || 0),
      features: Array.isArray(p.features) ? p.features : String(p.features || '').split('\n').map(s => s.trim()).filter(Boolean),
    };

    if (p.id) {
      await fetch(`/api/admin/shop/products/${p.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    } else {
      await fetch('/api/admin/shop/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
    }
    setEditingProduct(null);
    setCreatingProduct(false);
    await refresh();
  };

  const deleteProduct = async (id: string) => {
    if (!confirm('Delete this product?')) return;
    await fetch(`/api/admin/shop/products/${id}`, { method: 'DELETE' });
    await refresh();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-semibold text-stone-900">Shop</h1>
          <p className="text-stone-400 text-sm mt-0.5">Manage orders and products (used by checkout + admin).</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTab('orders')}
            className={`px-4 py-2 rounded-xl text-sm font-medium border ${tab === 'orders' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}
          >
            <ShoppingBag className="w-4 h-4 inline-block mr-2" /> Orders
          </button>
          <button
            onClick={() => setTab('products')}
            className={`px-4 py-2 rounded-xl text-sm font-medium border ${tab === 'products' ? 'bg-amber-50 border-amber-200 text-amber-800' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}
          >
            <Package className="w-4 h-4 inline-block mr-2" /> Products
          </button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-10 text-center text-stone-400">Loading…</div>
      ) : tab === 'orders' ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {(['ALL','PENDING','CONFIRMED','SHIPPED','DELIVERED','CANCELLED'] as const).map(k => (
              <div key={k} className="bg-white rounded-2xl p-4 shadow-sm border border-stone-100 text-center">
                <div className="text-xs text-stone-400 mb-1">{k}</div>
                <div className="font-display text-2xl font-semibold text-stone-900">{orderCounts[k]}</div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            {orders.length === 0 ? (
              <div className="p-12 text-center text-stone-400">No shop orders yet.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-100 bg-stone-50">
                      {['Order','Customer','Items','Total','Payment','Status','Action'].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {orders.map(o => (
                      <tr key={o.id} className="hover:bg-stone-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="font-mono text-sm font-semibold text-stone-900">{o.orderNumber}</div>
                          <div className="text-xs text-stone-400">{new Date(o.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-sm font-medium text-stone-900">{o.customerName}</div>
                          <div className="text-xs text-stone-400">{o.country} · {o.email}</div>
                        </td>
                        <td className="px-5 py-4 max-w-[260px]">
                          <div className="text-xs text-stone-600 line-clamp-2">
                            {o.items.map(i => `${i.name}×${i.qty}`).join(', ')}
                          </div>
                        </td>
                        <td className="px-5 py-4">
                          <div className="font-semibold text-stone-900 text-sm">${Number(o.total).toFixed(2)}</div>
                        </td>
                        <td className="px-5 py-4">
                          <span className="text-xs px-2.5 py-1 rounded-full bg-stone-100 text-stone-700 font-medium">
                            {o.paymentMethod}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${statusPill[o.status]}`}>{o.status}</span>
                        </td>
                        <td className="px-5 py-4">
                          <button onClick={() => setSelectedOrder(o)} className="text-xs px-2.5 py-1.5 rounded-lg bg-amber-50 text-amber-700 hover:bg-amber-100 font-medium">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {selectedOrder && (
            <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4" onClick={() => setSelectedOrder(null)}>
              <div className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-stone-900">{selectedOrder.orderNumber}</h3>
                    <p className="text-stone-400 text-sm">{new Date(selectedOrder.createdAt).toLocaleString()}</p>
                  </div>
                  <button onClick={() => setSelectedOrder(null)} className="p-2 rounded-full hover:bg-stone-100"><X className="w-5 h-5" /></button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-stone-400 mb-1">Customer</div>
                    <div className="font-medium">{selectedOrder.customerName}</div>
                    <div className="text-xs text-stone-500">{selectedOrder.email}{selectedOrder.phone ? ` · ${selectedOrder.phone}` : ''}</div>
                  </div>
                  <div>
                    <div className="text-xs text-stone-400 mb-1">Shipping</div>
                    <div className="font-medium">{selectedOrder.city}, {selectedOrder.country}</div>
                    <div className="text-xs text-stone-500">{selectedOrder.address}</div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs text-stone-400 mb-2">Items</div>
                  <div className="bg-stone-50 rounded-2xl p-4 text-sm">
                    <ul className="space-y-2">
                      {selectedOrder.items.map(i => (
                        <li key={i.id} className="flex items-center justify-between">
                          <span>{i.name} <span className="text-stone-400">×{i.qty}</span></span>
                          <span className="font-medium">${(i.price * i.qty).toFixed(2)}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 pt-3 border-t border-stone-200 flex items-center justify-between">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold" style={{ color: '#C5A253' }}>${Number(selectedOrder.total).toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="text-xs text-stone-400 mb-2">Update status</div>
                  <div className="flex flex-wrap gap-2">
                    {(['PENDING','CONFIRMED','SHIPPED','DELIVERED','CANCELLED'] as ShopOrderStatus[]).map(s => (
                      <button
                        key={s}
                        onClick={() => updateOrderStatus(selectedOrder.id, s)}
                        className={`px-3 py-1.5 rounded-xl text-xs font-semibold border ${selectedOrder.status === s ? 'bg-amber-50 border-amber-200 text-amber-800' : 'border-stone-200 text-stone-600 hover:bg-stone-50'}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-stone-500">{products.length} products</div>
            <button
              onClick={() => { setCreatingProduct(true); setEditingProduct(null); }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100 font-medium text-sm"
            >
              <Plus className="w-4 h-4" /> Add product
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            {products.length === 0 ? (
              <div className="p-12 text-center text-stone-400">No products yet. Add your first product.</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-stone-100 bg-stone-50">
                      {['Product','Category','Price','Active','Actions'].map(h => (
                        <th key={h} className="text-left px-5 py-3 text-xs uppercase tracking-wider text-stone-400 font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-50">
                    {products.map(p => (
                      <tr key={p.id} className="hover:bg-stone-50 transition-colors">
                        <td className="px-5 py-4">
                          <div className="font-medium text-stone-900 text-sm">{p.icon} {p.name}</div>
                          <div className="text-stone-400 text-xs">/{p.slug}</div>
                        </td>
                        <td className="px-5 py-4 text-sm text-stone-600">{p.category}</td>
                        <td className="px-5 py-4 text-sm text-stone-700">${Number(p.price).toFixed(2)}</td>
                        <td className="px-5 py-4">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${p.isActive ? 'bg-green-100 text-green-700' : 'bg-stone-100 text-stone-600'}`}>{p.isActive ? 'Active' : 'Hidden'}</span>
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-2">
                            <button onClick={() => { setEditingProduct(p); setCreatingProduct(false); }} className="p-2 rounded-xl border border-stone-200 hover:bg-stone-50">
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button onClick={() => deleteProduct(p.id)} className="p-2 rounded-xl border border-stone-200 hover:bg-red-50 hover:border-red-200">
                              <Trash2 className="w-4 h-4 text-red-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {(creatingProduct || editingProduct) && (
            <ProductModal
              initial={editingProduct || undefined}
              onClose={() => { setCreatingProduct(false); setEditingProduct(null); }}
              onSave={saveProduct}
            />
          )}
        </div>
      )}
    </div>
  );
}

function ProductModal({
  initial,
  onClose,
  onSave,
}: {
  initial?: Product;
  onClose: () => void;
  onSave: (p: Partial<Product> & { id?: string }) => Promise<void>;
}) {
  const [form, setForm] = useState<any>(() => ({
    id: initial?.id,
    slug: initial?.slug || '',
    name: initial?.name || '',
    category: initial?.category || 'Meditation Tools',
    price: initial?.price ?? 0,
    originalPrice: initial?.originalPrice ?? null,
    badge: initial?.badge || '',
    icon: initial?.icon || '🕉️',
    imageUrl: initial?.imageUrl || '',
    isActive: initial?.isActive ?? true,
    sortOrder: initial?.sortOrder ?? 0,
    description: initial?.description || '',
    features: (initial?.features || []).join('\n'),
  }));
  const [saving, setSaving] = useState(false);

  const save = async () => {
    setSaving(true);
    try {
      await onSave({
        ...form,
        originalPrice: (form.originalPrice as any) === '' ? null : (form.originalPrice === null ? null : Number(form.originalPrice)),
        features: String(form.features || '').split('\n').map((s: string) => s.trim()).filter(Boolean),
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] bg-black/50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl p-7 max-w-2xl w-full shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-display text-xl font-semibold text-stone-900">{form.id ? 'Edit product' : 'Add product'}</h3>
            <p className="text-stone-400 text-sm">Shown in admin + stored in DB for future shop improvements.</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-stone-100"><X className="w-5 h-5" /></button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Name">
            <input value={form.name} onChange={e => setForm((f: any) => ({ ...f, name: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
          </Field>
          <Field label="Slug">
            <input value={form.slug} onChange={e => setForm((f: any) => ({ ...f, slug: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" placeholder="tibetan-singing-bowl" />
          </Field>
          <Field label="Category">
            <input value={form.category} onChange={e => setForm((f: any) => ({ ...f, category: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
          </Field>
          <Field label="Icon">
            <input value={form.icon} onChange={e => setForm((f: any) => ({ ...f, icon: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" placeholder="📿" />
          </Field>
          <Field label="Price">
            <input type="number" value={form.price} onChange={e => setForm((f: any) => ({ ...f, price: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
          </Field>
          <Field label="Original price (optional)">
            <input type="number" value={form.originalPrice ?? ''} onChange={e => setForm((f: any) => ({ ...f, originalPrice: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" />
          </Field>
          <Field label="Badge (optional)">
            <input value={form.badge} onChange={e => setForm((f: any) => ({ ...f, badge: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" placeholder="Bestseller" />
          </Field>
          <Field label="Active">
            <select value={String(form.isActive)} onChange={e => setForm((f: any) => ({ ...f, isActive: e.target.value === 'true' }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </Field>
          <Field label="Image URL (optional)" full>
            <input value={form.imageUrl} onChange={e => setForm((f: any) => ({ ...f, imageUrl: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm" placeholder="https://..." />
          </Field>
          <Field label="Description" full>
            <textarea value={form.description} onChange={e => setForm((f: any) => ({ ...f, description: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm min-h-[90px]" />
          </Field>
          <Field label="Features (one per line)" full>
            <textarea value={form.features} onChange={e => setForm((f: any) => ({ ...f, features: e.target.value }))} className="w-full border border-stone-200 rounded-xl px-3 py-2 text-sm min-h-[110px]" />
          </Field>
        </div>

        <div className="flex items-center justify-end gap-2 mt-6">
          <button onClick={onClose} className="px-4 py-2 rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50 text-sm">Cancel</button>
          <button onClick={save} disabled={saving || !form.name || !form.slug} className="px-4 py-2 rounded-xl bg-amber-600 text-white hover:bg-amber-700 text-sm font-semibold disabled:opacity-60">
            {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

function Field({ label, children, full }: { label: string; children: any; full?: boolean }) {
  return (
    <label className={full ? 'sm:col-span-2' : ''}>
      <div className="text-xs text-stone-400 mb-1">{label}</div>
      {children}
    </label>
  );
}
