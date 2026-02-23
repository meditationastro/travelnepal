'use client';
import { useState, Suspense } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';

// Inner component that uses useSearchParams — must be inside Suspense
function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const callbackUrl = params.get('callbackUrl') || '/dashboard';

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (mode === 'register') {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, password: form.password }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error || 'Registration failed'); setLoading(false); return; }
    }

    const result = await signIn('credentials', {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    if (result?.error) {
      setError('Invalid email or password');
      setLoading(false);
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <div className="w-full max-w-md">
      {/* Toggle */}
      <div className="flex rounded-2xl overflow-hidden border border-stone-200 mb-8">
        {(['login', 'register'] as const).map((m) => (
          <button
            key={m}
            onClick={() => { setMode(m); setError(''); }}
            className={`flex-1 py-3 text-sm font-medium transition-all ${
              mode === m ? 'text-white' : 'text-stone-500 hover:text-stone-700'
            }`}
            style={mode === m ? { background: 'linear-gradient(135deg, #C5A253, #E8891A)' } : {}}
          >
            {m === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        ))}
      </div>

      <h1 className="font-display text-3xl font-semibold text-stone-900 mb-2">
        {mode === 'login' ? 'Welcome back' : 'Create your account'}
      </h1>
      <p className="text-stone-500 mb-8">
        {mode === 'login' ? 'Sign in to access your dashboard and bookings.' : 'Join the Himalaya Retreat community.'}
      </p>

      {error && (
        <div className="mb-4 p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {mode === 'register' && (
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
            <input
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              className="input-himalaya w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm"
            />
          </div>
        )}
        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
            required
            className="input-himalaya w-full pl-11 pr-4 py-3.5 rounded-2xl text-sm"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
          <input
            type={showPass ? 'text' : 'password'}
            placeholder="Password"
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
            required
            minLength={6}
            className="input-himalaya w-full pl-11 pr-12 py-3.5 rounded-2xl text-sm"
          />
          <button type="button" onClick={() => setShowPass(!showPass)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
            {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-gold w-full py-4 rounded-2xl font-semibold text-white text-base flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : mode === 'login' ? 'Sign In' : 'Create Account'}
        </button>
      </form>

      <p className="text-center text-stone-400 text-sm mt-6">
        By continuing, you agree to our{' '}
        <Link href="/terms" className="underline hover:text-stone-600">Terms of Service</Link>
        {' '}and{' '}
        <Link href="/privacy" className="underline hover:text-stone-600">Privacy Policy</Link>
      </p>
    </div>
  );
}

// Fallback shown while LoginForm loads
function LoginSkeleton() {
  return (
    <div className="w-full max-w-md animate-pulse">
      <div className="h-12 bg-stone-200 rounded-2xl mb-8" />
      <div className="h-8 bg-stone-200 rounded-xl mb-4 w-48" />
      <div className="space-y-4">
        <div className="h-12 bg-stone-200 rounded-2xl" />
        <div className="h-12 bg-stone-200 rounded-2xl" />
        <div className="h-12 bg-stone-200 rounded-2xl" />
      </div>
    </div>
  );
}

// Page component wraps the form in Suspense (required by Next.js for useSearchParams)
export default function LoginPage() {
  return (
    <div className="min-h-screen pt-20 flex" style={{ background: '#fdf8f0' }}>
      {/* Left decorative panel */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1c1917, #1a0a00)' }}>
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative text-center px-12">
          <div className="text-6xl mb-6" style={{ color: '#C5A253' }}>ॐ</div>
          <h2 className="font-display text-3xl text-white font-semibold mb-4">Begin Your Journey</h2>
          <p className="text-stone-400 leading-relaxed">
            Join thousands of seekers who have found their path through meditation and Vedic wisdom in the sacred Himalayas.
          </p>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <Suspense fallback={<LoginSkeleton />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
}
