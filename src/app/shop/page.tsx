'use client';
import { useState, useEffect, useRef } from 'react';
import { ShoppingBag, Star, Package, Truck, Shield, Plus, Minus, X, CheckCircle, Loader2, ArrowRight, ArrowLeft, MessageCircle, Heart, Eye } from 'lucide-react';
import { useCurrency } from '@/components/providers/CurrencyProvider';
import { formatMoney, usdToNpr } from '@/lib/currency';

interface Product {
  id: string; category: string; name: string; price: number; originalPrice: number | null;
  nprPrice?: number | null;
  rating: number; reviews: number; badge: string | null; description: string; icon: string; img: string;
  features: string[];
}

const categories = [
  'All',
  'Meditation Tools',
  'Astrology Books',
  'Malas & Crystals',
  'Sacred Oils',
  'Incense & Herbs',
  'Yantras & Puja',
  'Digital Courses',
  'Audio & Mantras',
];

const fallbackProducts: Product[] = [
  { id:'1', category:'Malas & Crystals', name:'Himalayan Crystal Mala (108 beads)', price:65, originalPrice:85, rating:4.9, reviews:43, badge:'Bestseller', icon:'📿', img:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop', description:'Hand-knotted 108-bead mala with Himalayan rock crystal quartz. Each bead hand-selected and blessed by our meditation teachers. Perfect for Japa meditation and mantra repetition.', features:['108 hand-selected beads','Himalayan rock crystal','Blessed by teachers','Free bead counter'] },
  { id:'2', category:'Sacred Oils', name:'Panchagavya Meditation Oil', price:35, originalPrice:null, rating:4.8, reviews:28, badge:null, icon:'🧴', img:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=400&fit=crop', description:'Traditional Ayurvedic meditation oil blended with sandalwood, camphor, and sacred Himalayan herbs. Apply to third eye and crown chakra before practice for deepened concentration.', features:['100% natural ingredients','Traditional Ayurvedic recipe','Sandalwood & camphor blend','60ml amber bottle'] },
  { id:'3', category:'Meditation Tools', name:'Tibetan Singing Bowl Set', price:145, originalPrice:180, rating:5.0, reviews:62, badge:'Premium', icon:'🔔', img:'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop', description:'Authentic hand-hammered Tibetan singing bowl from Patan artisans. Includes wooden striker and silk cushion. 7-metal alloy for rich, sustained harmonics. Size: 5 inch.', features:['Hand-hammered in Patan','7-metal alloy','Wooden striker included','Silk cushion & bag'] },
  { id:'4', category:'Astrology Books', name:'Brihat Parashara Hora Shastra', price:55, originalPrice:null, rating:4.7, reviews:19, badge:null, icon:'📚', img:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop', description:'The foundational Vedic astrology text translated into English with commentary. Covers planetary characteristics, house significations, and Dasha timing systems.', features:['English translation','Sanskrit original included','Expert commentary','600+ pages'] },
  { id:'5', category:'Malas & Crystals', name:'Black Tourmaline & Rudraksha Mala', price:78, originalPrice:null, rating:4.8, reviews:31, badge:null, icon:'📿', img:'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=400&fit=crop', description:'Protection mala combining black tourmaline for grounding and 5-mukhi Rudraksha — sacred seed of Shiva — for spiritual evolution and inner peace.', features:['Protection & grounding','5-mukhi Rudraksha','108+1 beads','Silk tassel'] },
  { id:'6', category:'Incense & Herbs', name:'Himalayan Puja Incense (12 varieties)', price:28, originalPrice:null, rating:4.9, reviews:87, badge:'Popular', icon:'🌿', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop', description:'Collection of 12 traditional Himalayan incense varieties — sandalwood, cedar, juniper, nag champa, and more. Hand-rolled using ancient Tibetan recipes. 10 sticks each.', features:['12 distinct varieties','Hand-rolled in Nepal','120 sticks total','Traditional Tibetan recipes'] },
  { id:'7', category:'Meditation Tools', name:'7-Chakra Alignment Stone Set', price:55, originalPrice:70, rating:4.6, reviews:24, badge:'Sale', icon:'💎', img:'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop', description:'Seven hand-polished gemstones for each chakra: red jasper, carnelian, citrine, aventurine, sodalite, amethyst, and clear quartz. Comes in a beautiful wooden box with guide.', features:['7 genuine gemstones','Hand-polished','Wooden gift box','Chakra guide included'] },
  { id:'8', category:'Astrology Books', name:'Vedic Astrology for Beginners', price:38, originalPrice:null, rating:4.7, reviews:45, badge:null, icon:'📚', img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', description:'Practical introduction to Jyotish by our resident astrologer. Covers birth chart reading, the 9 planets, 12 houses, nakshatras, and how to interpret your own chart.', features:['Written by Pt. Krishnamurthy','Birth chart basics','Nakshatra system','Practice exercises'] },
  { id:'9', category:'Sacred Oils', name:'Chakra Healing Essential Oil Set', price:89, originalPrice:110, rating:4.9, reviews:36, badge:'Bestseller', icon:'🧴', img:'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=400&fit=crop', description:'Seven pure essential oil blends — one for each chakra. Formulated with traditional Ayurvedic herbs and carrier oils. For massage, meditation, or diffusion.', features:['7 individual bottles','Pure essential oils','Ayurvedic formulas','10ml each'] },
  { id:'10', category:'Meditation Tools', name:'Rudraksha Prayer Beads (5-mukhi)', price:48, originalPrice:null, rating:4.8, reviews:52, badge:null, icon:'📿', img:'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=400&fit=crop', description:'Traditional 5-mukhi Rudraksha mala, sacred to Lord Shiva. These seeds from the Elaeocarpus ganitrus tree carry potent vibration for meditation, health, and clarity.', features:['Authentic 5-mukhi seeds','Tested & certified','108 beads + guru bead','Blessed by our pandit'] },
  { id:'11', category:'Incense & Herbs', name:'Nag Champa & Sandalwood Bundle', price:22, originalPrice:null, rating:4.9, reviews:118, badge:'Popular', icon:'🌿', img:'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop', description:'The iconic Nag Champa paired with pure Indian sandalwood incense. A classic combination for meditation, yoga, and creating sacred space. Two 40-stick boxes.', features:['2×40 sticks','Nag Champa + Sandalwood','Hand-rolled','Burns 45 min each'] },
  { id:'12', category:'Astrology Books', name:'Nakshatras: The Lunar Mansions', price:44, originalPrice:null, rating:4.6, reviews:21, badge:null, icon:'📚', img:'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=400&fit=crop', description:'Deep dive into the 27 Nakshatras — the lunar mansions that are the heartbeat of Vedic astrology. Understand how they modify planetary significations and shape destiny.', features:['All 27 Nakshatras covered','Deity & symbol analysis','Pada system explained','Predictive techniques'] },

  // ── Seed: puja/yantra + digital content ──
  { id:'13', category:'Yantras & Puja', name:'Sri Yantra Copper Plate (Energized)', price:49, nprPrice:6500, originalPrice:null, rating:4.9, reviews:15, badge:'Popular', icon:'🔱', img:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=400&h=400&fit=crop', description:'Traditional Sri Yantra copper plate for meditation, prosperity practices, and sacred space. Includes simple daily puja guide.', features:['Copper yantra plate','Daily puja guide included','Traditionally energized','Protective storage pouch'] },
  { id:'14', category:'Audio & Mantras', name:'Mantra Meditation Audio Pack (8 tracks)', price:12, nprPrice:1200, originalPrice:null, rating:4.8, reviews:58, badge:null, icon:'🎧', img:'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop', description:'A short, powerful library of mantra tracks for Japa, breath-led chanting, and morning focus.', features:['8 guided tracks','Morning & evening practices','Downloadable','Beginner friendly'] },
  { id:'15', category:'Digital Courses', name:'21‑Day Meditation Reset (Self‑Paced)', price:35, nprPrice:4500, originalPrice:49, rating:4.9, reviews:102, badge:'Bestseller', icon:'🧘', img:'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop', description:'A structured 21‑day reset: breathwork, mindfulness, journaling prompts, and weekly integration calls (optional add‑on).', features:['21 daily lessons','Progress tracking','Journaling prompts','Integration checklist'] },
  { id:'16', category:'Digital Courses', name:'Vedic Astrology Basics (Jyotish Foundations)', price:65, nprPrice:8500, originalPrice:null, rating:4.8, reviews:41, badge:'Premium', icon:'🪐', img:'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=400&fit=crop', description:'Learn the core building blocks: 9 grahas, 12 houses, nakshatras, and how to read a chart ethically.', features:['Video + worksheets','Nakshatra overview','Interpretation practice','Printable reference sheets'] },
];

interface CartItem extends Product { qty: number }
type CheckoutStep = 'cart' | 'details' | 'confirm' | 'success';

export default function ShopPage() {
  const { currency } = useCurrency();
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<CheckoutStep>('cart');
  const [paymentMethod, setPaymentMethod] = useState<'cod'|'transfer'|'whatsapp'>('cod');
  const [submitting, setSubmitting] = useState(false);
  const [orderResult, setOrderResult] = useState<{orderNumber:string}|null>(null);
  const [details, setDetails] = useState({ name:'', email:'', phone:'', address:'', city:'', country:'', postalCode:'', notes:'' });
  const [detailsError, setDetailsError] = useState('');
  const [hoveredId, setHoveredId] = useState<string|null>(null);
  const [quickView, setQuickView] = useState<Product|null>(null);
  const [wishlist, setWishlist] = useState<Set<string>>(new Set());
  const [justAdded, setJustAdded] = useState<string|null>(null);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Load admin-managed products from DB (fallback to built-in catalog).
    fetch('/api/shop/products', { cache: 'no-store' })
      .then(r => r.ok ? r.json() : [])
      .then((rows: any[]) => {
        const mapped: Product[] = (rows || []).map((p: any) => ({
          id: String(p.id),
          category: p.category,
          name: p.name,
          price: Number(p.price),
          originalPrice: p.originalPrice ?? null,
          rating: Number(p.rating || 4.8),
          reviews: Number(p.reviews || 0),
          badge: p.badge ?? null,
          description: p.description || '',
          icon: p.icon || '🕉️',
          img: p.imageUrl || 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
          features: Array.isArray(p.features) ? p.features : [],
        }));
        setDbProducts(mapped);
      })
      .catch(() => setDbProducts([]));
  }, []);

  const products = dbProducts.length ? dbProducts : fallbackProducts;

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);
  const cartTotal = cart.reduce((s,i) => s + i.price*i.qty, 0);
  const cartCount = cart.reduce((s,i) => s + i.qty, 0);
  const shipping = cartTotal >= 100 ? 0 : 15;

  const money = (usd: number, nprOverride?: number | null) => {
    if (currency === 'NPR') return formatMoney(Math.round(Number(nprOverride ?? usdToNpr(usd))), 'NPR');
    return formatMoney(usd, 'USD');
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const ex = prev.find(i => i.id === product.id);
      if (ex) return prev.map(i => i.id===product.id ? {...i, qty:i.qty+1} : i);
      return [...prev, {...product, qty:1}];
    });
    setJustAdded(product.id);
    setTimeout(() => setJustAdded(null), 1200);
    setCartOpen(true);
  };

  const updateQty = (id:string, delta:number) => setCart(prev => prev.map(i=>i.id===id?{...i,qty:i.qty+delta}:i).filter(i=>i.qty>0));

  const buildWaText = () => {
    const items = cart.map(i => `• ${i.name} ×${i.qty} — ${money(i.price*i.qty, (i as any).nprPrice ? Number((i as any).nprPrice) * i.qty : null)}`).join('\n');
    return `Namaste! I'd like to order from Himalya Retreat Nepal Shop:\n\n${items}\n\n💱 Currency: ${currency}\n📦 Subtotal: ${money(cartTotal)}\n🚚 Shipping: ${shipping===0?'Free':money(shipping)}\n💰 Total: ${money(cartTotal+shipping)}\n\n📍 Ship to: ${details.name||'[name]'}, ${details.address||'[address]'}, ${details.city||'[city]'}, ${details.country||'[country]'}\n📧 Email: ${details.email||'[email]'}\n📞 Phone: ${details.phone||'[phone]'}\n\n💳 Payment: ${paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod === 'transfer' ? 'Bank Transfer' : 'via WhatsApp'}\n\n${details.notes?'Notes: '+details.notes:''}`;
  };

  const handleWhatsAppCheckout = () => {
    window.open(`https://wa.me/9779851187267?text=${encodeURIComponent(buildWaText())}`, '_blank');
    setOrderResult({ orderNumber: `WA-${Date.now().toString().slice(-6)}` });
    setCheckoutStep('success');
    setCart([]);
  };

  const handleSubmit = async () => {
    if (!details.name||!details.email||!details.address||!details.city||!details.country) { setDetailsError('Please fill all required fields.'); return; }
    if (paymentMethod === 'whatsapp') { handleWhatsAppCheckout(); return; }
    setDetailsError(''); setSubmitting(true);
    try {
      const res = await fetch('/api/shop/order', { method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ ...details, currency, items: cart.map(i=>({name:i.name,qty:i.qty,price:i.price, nprPrice:(i as any).nprPrice ?? null})), total:(cartTotal+shipping).toFixed(2), paymentMethod }) });
      const data = await res.json();
      if (data.success) { setOrderResult(data); setCheckoutStep('success'); setCart([]); }
      else setDetailsError('Failed. Please try WhatsApp.');
    } catch { setDetailsError('Error. Please use WhatsApp checkout.'); }
    finally { setSubmitting(false); }
  };



  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      {/* Hero */}
      <section className="pt-20">
        <div className="py-20 px-4 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#1c1917,#2d1a00)' }}>
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse at 20% 50%, rgba(197,162,83,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(232,137,26,0.1) 0%, transparent 60%)" }} />
          <div className="relative max-w-6xl mx-auto text-center">
            <ShoppingBag className="w-12 h-12 mx-auto mb-5" style={{ color: '#C5A253' }} />
            <h1 className="font-display text-5xl md:text-6xl text-white font-semibold mb-4">Sacred Shop</h1>
            <p className="text-stone-400 text-lg max-w-xl mx-auto mb-6">Authentic Himalayan tools, Ayurvedic products & spiritual texts — blessed by our teachers and shipped from Lalitpur, Nepal</p>
            {cartCount > 0 && (
              <button onClick={() => setCartOpen(true)} className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-stone-900 shadow-xl hover:opacity-90 transition-all" style={{ background: 'linear-gradient(135deg,#C5A253,#E8C870)' }}>
                <ShoppingBag className="w-5 h-5" /> {cartCount} items · {money(cartTotal)}
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap justify-center gap-8 text-sm text-stone-600">
          {[{icon:Package,text:'Ships Worldwide from Nepal'},{icon:Shield,text:'Authentic Himalayan Products'},{icon:Truck,text:`Free Shipping over ${money(100)}`},{icon:MessageCircle,text:'WhatsApp Support'}].map(b=>(
            <div key={b.text} className="flex items-center gap-2"><b.icon className="w-4 h-4" style={{color:'#C5A253'}}/>{b.text}</div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 pt-8 pb-4">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(cat=>(
            <button key={cat} onClick={()=>setActiveCategory(cat)}
              className="px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap border-2 transition-all"
              style={activeCategory===cat ? {background:'rgba(197,162,83,0.15)',borderColor:'#C5A253',color:'#92400e'} : {borderColor:'#e7e5e4',color:'#78716c'}}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map(product=>{
            const inCart = cart.find(i=>i.id===product.id);
            const isHovered = hoveredId===product.id;
            const isAdded = justAdded===product.id;
            return (
              <div key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-100 transition-all duration-300 cursor-pointer group"
                style={{ boxShadow: isHovered ? '0 20px 60px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.04)', transform: isHovered ? 'translateY(-4px)' : 'translateY(0)' }}
                onMouseEnter={()=>setHoveredId(product.id)} onMouseLeave={()=>setHoveredId(null)}>
                {/* Image with zoom + overlay */}
                <div className="relative overflow-hidden" style={{height:220, background:'linear-gradient(135deg,#fdf4e3,#f0e4c8)'}}>
                  <img src={product.img} alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                    style={{ transform: isHovered ? 'scale(1.08)' : 'scale(1)', filter: isHovered ? 'brightness(0.85)' : 'brightness(1)' }}
                    onError={e=>{(e.target as HTMLImageElement).style.display='none'}} />
                  {/* Fallback emoji */}
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-30">{product.icon}</div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 transition-opacity duration-300 flex items-center justify-center gap-3" style={{opacity: isHovered ? 1 : 0, background:'rgba(28,25,23,0.35)'}}>
                    <button onClick={e=>{e.stopPropagation();setQuickView(product)}}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-semibold text-stone-900 bg-white/95 hover:bg-white shadow-lg">
                      <Eye className="w-3.5 h-3.5"/> Quick View
                    </button>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold text-white shadow-md"
                      style={{background: product.badge==='Sale'?'#ef4444':product.badge==='Premium'?'#7c3aed':'#C5A253'}}>
                      {product.badge}
                    </div>
                  )}
                  {/* Wishlist */}
                  <button onClick={e=>{e.stopPropagation();setWishlist(w=>{const n=new Set(w);n.has(product.id)?n.delete(product.id):n.add(product.id);return n;})}}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow-md hover:bg-white transition-all"
                    style={{color: wishlist.has(product.id)?'#ef4444':'#9ca3af'}}>
                    <Heart className="w-4 h-4" fill={wishlist.has(product.id)?'currentColor':'none'}/>
                  </button>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="text-xs text-stone-400 font-medium mb-1">{product.category}</div>
                  <h3 className="font-semibold text-stone-900 leading-snug mb-2 text-sm">{product.name}</h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_,i)=><Star key={i} className="w-3.5 h-3.5" fill={i<Math.floor(product.rating)?'#C5A253':'none'} style={{color:'#C5A253'}}/>)}
                    <span className="text-xs text-stone-400 ml-1">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-bold" style={{color:'#C5A253'}}>{money(product.price, product.nprPrice ?? null)}</span>
                      {product.originalPrice && <span className="text-xs text-stone-400 line-through">{money(product.originalPrice, product.nprPrice ?? null)}</span>}
                    </div>
                    {inCart ? (
                      <div className="flex items-center gap-1.5 bg-stone-100 rounded-full px-2 py-1">
                        <button onClick={()=>updateQty(product.id,-1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-stone-200"><Minus className="w-3 h-3"/></button>
                        <span className="text-sm font-bold w-4 text-center">{inCart.qty}</span>
                        <button onClick={()=>updateQty(product.id,1)} className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-stone-200"><Plus className="w-3 h-3"/></button>
                      </div>
                    ) : (
                      <button onClick={()=>addToCart(product)}
                        className="px-4 py-2 rounded-full text-xs font-semibold text-stone-900 transition-all hover:opacity-90 relative overflow-hidden"
                        style={{ background: isAdded ? '#10b981' : 'linear-gradient(135deg,#C5A253,#E8C870)', color: isAdded ? 'white' : '#1c1917' }}>
                        {isAdded ? <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5"/>Added!</span> : '+ Add'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Quick View Modal ── */}
      {quickView && (
        <div className="fixed inset-0 z-[200] bg-black/60 flex items-center justify-center p-4" onClick={()=>setQuickView(null)}>
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl" onClick={e=>e.stopPropagation()}>
            <div className="grid sm:grid-cols-2">
              <div className="relative" style={{minHeight:280,background:'linear-gradient(135deg,#fdf4e3,#f0e4c8)'}}>
                <img src={quickView.img} alt={quickView.name} className="w-full h-full object-cover absolute inset-0" onError={e=>{(e.target as HTMLImageElement).style.display='none'}}/>
                <div className="absolute inset-0 flex items-center justify-center text-7xl opacity-30">{quickView.icon}</div>
              </div>
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <div className="text-xs text-stone-400 mb-1">{quickView.category}</div>
                  <h3 className="font-display text-xl font-semibold text-stone-900 mb-2">{quickView.name}</h3>
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-bold" style={{color:'#C5A253'}}>{money(quickView.price, quickView.nprPrice ?? null)}</span>
                    {quickView.originalPrice && <span className="text-stone-400 line-through text-sm">{money(quickView.originalPrice, quickView.nprPrice ?? null)}</span>}
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4">{quickView.description}</p>
                  <ul className="space-y-1 mb-4">
                    {quickView.features.map(f=><li key={f} className="flex items-center gap-2 text-xs text-stone-600"><CheckCircle className="w-3.5 h-3.5 flex-shrink-0" style={{color:'#4a7e50'}}/>{f}</li>)}
                  </ul>
                </div>
                <div className="flex gap-2 mt-auto">
                  <button onClick={()=>{addToCart(quickView);setQuickView(null);}} className="flex-1 py-3 rounded-2xl font-semibold text-stone-900 text-sm hover:opacity-90" style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>Add to Cart</button>
                  <button onClick={()=>setQuickView(null)} className="p-3 rounded-2xl border-2 border-stone-200 text-stone-600 hover:bg-stone-50"><X className="w-4 h-4"/></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Cart / Checkout drawer ── */}
      {cartOpen && (
        <div className="fixed inset-0 z-[250] flex justify-end">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={()=>{setCartOpen(false);setCheckoutStep('cart');}}/>
          <div className="relative w-full max-w-md bg-white shadow-2xl flex flex-col h-full overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-stone-100 bg-white sticky top-0 z-10">
              <div>
                <h2 className="font-display text-lg font-semibold text-stone-900">
                  {checkoutStep==='cart'?'Your Cart':checkoutStep==='details'?'Delivery Details':checkoutStep==='confirm'?'Review Order':'Order Confirmed!'}
                </h2>
                {checkoutStep!=='success' && <p className="text-xs text-stone-400">{cartCount} item{cartCount!==1?'s':''} · {money(cartTotal+shipping)}</p>}
              </div>
              <button onClick={()=>{setCartOpen(false);setCheckoutStep('cart');}} className="p-2 rounded-full hover:bg-stone-100"><X className="w-5 h-5"/></button>
            </div>

            {/* Progress bar */}
            {checkoutStep!=='success' && (
              <div className="px-5 pt-3 pb-0">
                <div className="flex items-center gap-1 mb-1">
                  {['cart','details','confirm'].map((s,i)=>(
                    <div key={s} className="flex items-center gap-1 flex-1">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                        style={['cart','details','confirm'].indexOf(checkoutStep)>=i?{background:'linear-gradient(135deg,#C5A253,#E8C870)',color:'#1c1917'}:{background:'#f0ede8',color:'#9ca3af'}}>{i+1}</div>
                      {i<2&&<div className="flex-1 h-0.5 rounded-full" style={{background:['cart','details','confirm'].indexOf(checkoutStep)>i?'#C5A253':'#e5e7eb'}}/>}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-[10px] text-stone-400 mb-3"><span>Cart</span><span>Details</span><span>Confirm</span></div>
              </div>
            )}

            <div className="flex-1 overflow-y-auto px-5 pb-5">
              {/* Cart step */}
              {checkoutStep==='cart' && (
                <>
                  {cart.length===0 ? (
                    <div className="text-center py-16 text-stone-400">
                      <ShoppingBag className="w-14 h-14 mx-auto mb-4 opacity-20"/>
                      <p className="font-medium mb-1">Your cart is empty</p>
                      <p className="text-sm">Add some sacred items!</p>
                    </div>
                  ) : (
                    <div className="space-y-4 pt-2">
                      {cart.map(item=>(
                        <div key={item.id} className="flex gap-3 p-3 rounded-2xl border border-stone-100 bg-stone-50 group hover:border-stone-200 transition-all">
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative" style={{background:'linear-gradient(135deg,#fdf4e3,#f0e4c8)'}}>
                            <img src={item.img} alt={item.name} className="w-full h-full object-cover" onError={e=>{(e.target as HTMLImageElement).style.display='none'}}/>
                            <div className="absolute inset-0 flex items-center justify-center text-2xl">{item.icon}</div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-medium text-stone-900 leading-tight line-clamp-2 mb-1">{item.name}</div>
                            <div className="text-xs text-stone-400 mb-2">${item.price} each</div>
                            <div className="flex items-center gap-2">
                              <button onClick={()=>updateQty(item.id,-1)} className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-50"><Minus className="w-3 h-3"/></button>
                              <span className="text-sm font-bold w-5 text-center">{item.qty}</span>
                              <button onClick={()=>updateQty(item.id,1)} className="w-7 h-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-50"><Plus className="w-3 h-3"/></button>
                            </div>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <div className="font-bold text-sm" style={{color:'#C5A253'}}>{money(item.price*item.qty, item.nprPrice ? Number(item.nprPrice) * item.qty : null)}</div>
                            <button onClick={()=>updateQty(item.id,-item.qty)} className="mt-2 text-stone-300 hover:text-red-500 transition-colors"><X className="w-3.5 h-3.5"/></button>
                          </div>
                        </div>
                      ))}
                      <div className="border-t border-stone-200 pt-3 space-y-1.5 text-sm">
                        <div className="flex justify-between text-stone-500"><span>Subtotal</span><span>{money(cartTotal)}</span></div>
                        <div className="flex justify-between text-stone-500"><span>Shipping</span><span className={shipping===0?'text-green-600 font-medium':''}>{shipping===0?'Free 🎉':'$'+shipping}</span></div>
                        <div className="flex justify-between font-bold text-stone-900 text-base pt-2 border-t border-stone-100">
                          <span>Total</span><span style={{color:'#C5A253'}}>{money(cartTotal+shipping)}</span>
                        </div>
                      </div>
                      {shipping>0 && <p className="text-xs text-stone-400 text-center">Add {money(100-cartTotal)} more for free shipping!</p>}
                      
                      {/* WhatsApp Quick Order */}
                      <button onClick={()=>{setCheckoutStep('details');setPaymentMethod('whatsapp');}}
                        className="w-full py-3.5 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                        style={{background:'#25D366'}}>
                        <MessageCircle className="w-4 h-4"/> Order via WhatsApp
                      </button>
                      <button onClick={()=>setCheckoutStep('details')}
                        className="w-full py-3.5 rounded-2xl font-semibold text-stone-900 flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                        style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
                        Standard Checkout <ArrowRight className="w-4 h-4"/>
                      </button>
                    </div>
                  )}
                </>
              )}

              {/* Details step */}
              {checkoutStep==='details' && (
                <div className="space-y-3 pt-2">
                  {paymentMethod==='whatsapp' && (
                    <div className="p-3 rounded-xl text-sm flex items-center gap-2" style={{background:'rgba(37,211,102,0.1)',color:'#166534',border:'1px solid rgba(37,211,102,0.3)'}}>
                      <MessageCircle className="w-4 h-4 flex-shrink-0"/><span>Fill your details and we'll open WhatsApp with your pre-filled order.</span>
                    </div>
                  )}
                  {[{label:'Full Name *',key:'name',type:'text',placeholder:'Your full name'},{label:'Email *',key:'email',type:'email',placeholder:'your@email.com'},{label:'Phone / WhatsApp',key:'phone',type:'tel',placeholder:'+1 234 567 8900'},{label:'Street Address *',key:'address',type:'text',placeholder:'123 Main Street'},{label:'City *',key:'city',type:'text',placeholder:'New York'},{label:'Country *',key:'country',type:'text',placeholder:'United States'},{label:'Postal Code',key:'postalCode',type:'text',placeholder:'10001'}].map(f=>(
                    <div key={f.key}>
                      <label className="block text-xs font-medium text-stone-600 mb-1">{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={(details as any)[f.key]} onChange={e=>setDetails(d=>({...d,[f.key]:e.target.value}))}
                        className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:ring-2 focus:ring-amber-300"/>
                    </div>
                  ))}
                  <div>
                    <label className="block text-xs font-medium text-stone-600 mb-1">Order Notes</label>
                    <textarea rows={2} placeholder="Special instructions…" value={details.notes} onChange={e=>setDetails(d=>({...d,notes:e.target.value}))}
                      className="w-full px-3 py-2.5 rounded-xl border border-stone-200 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-amber-300"/>
                  </div>

                  {paymentMethod!=='whatsapp' && (
                    <div>
                      <label className="block text-xs font-medium text-stone-600 mb-2">💳 Payment Method</label>
                      {[{id:'cod',label:'💵 Cash on Delivery',desc:'Pay when package arrives'},{id:'transfer',label:'🏦 Bank Transfer',desc:'We send details after confirmation'},{id:'whatsapp',label:'💬 WhatsApp Order',desc:'Direct order via WhatsApp'}].map(m=>(
                        <label key={m.id} className={`flex items-start gap-3 p-3 rounded-xl border-2 cursor-pointer mb-2 transition-all ${paymentMethod===m.id?'border-amber-400':' border-stone-200'}`}
                          style={paymentMethod===m.id?{background:'rgba(197,162,83,0.08)'}:{}}>
                          <input type="radio" name="pm" value={m.id} checked={paymentMethod===m.id} onChange={()=>setPaymentMethod(m.id as any)} className="accent-amber-600 mt-0.5"/>
                          <div><div className="text-sm font-semibold text-stone-800">{m.label}</div><div className="text-xs text-stone-400">{m.desc}</div></div>
                        </label>
                      ))}
                    </div>
                  )}

                  {detailsError && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{detailsError}</div>}

                  <div className="flex gap-2 pt-2">
                    <button onClick={()=>setCheckoutStep('cart')} className="flex-1 py-3 rounded-2xl border-2 border-stone-200 text-stone-600 font-semibold flex items-center justify-center gap-1 hover:bg-stone-50">
                      <ArrowLeft className="w-4 h-4"/>Back
                    </button>
                    <button onClick={()=>{
                      if(!details.name||!details.email||!details.address||!details.city||!details.country){setDetailsError('Fill all required fields.');return;}
                      setDetailsError('');
                      if(paymentMethod==='whatsapp'){handleWhatsAppCheckout();return;}
                      setCheckoutStep('confirm');
                    }} className="flex-1 py-3 rounded-2xl font-semibold text-stone-900 flex items-center justify-center gap-1 hover:opacity-90"
                      style={{background: paymentMethod==='whatsapp'?'#25D366':'linear-gradient(135deg,#C5A253,#E8C870)', color: paymentMethod==='whatsapp'?'white':'#1c1917'}}>
                      {paymentMethod==='whatsapp'?<><MessageCircle className="w-4 h-4"/>Open WhatsApp</>:<>Review <ArrowRight className="w-4 h-4"/></>}
                    </button>
                  </div>
                </div>
              )}

              {/* Confirm step */}
              {checkoutStep==='confirm' && (
                <div className="space-y-4 pt-2">
                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Order Summary</div>
                    {cart.map(item=>(
                      <div key={item.id} className="flex justify-between text-sm py-1.5">
                        <span className="text-stone-700">{item.name} <span className="text-stone-400">×{item.qty}</span></span>
                        <span className="font-medium" style={{color:'#C5A253'}}>{money(item.price*item.qty, item.nprPrice ? Number(item.nprPrice) * item.qty : null)}</span>
                      </div>
                    ))}
                    <div className="border-t border-stone-200 mt-2 pt-2 space-y-1">
                      <div className="flex justify-between text-sm text-stone-500"><span>Shipping</span><span>{shipping===0?'Free':'$'+shipping}</span></div>
                      <div className="flex justify-between font-bold text-base"><span>Total</span><span style={{color:'#C5A253'}}>{money(cartTotal+shipping)}</span></div>
                    </div>
                  </div>
                  <div className="bg-stone-50 rounded-2xl p-4 border border-stone-100 text-sm">
                    <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-2">Ship To</div>
                    <div className="text-stone-700">{details.name}</div>
                    <div className="text-stone-500">{details.address}, {details.city}, {details.country}</div>
                    <div className="text-stone-500">{details.email}</div>
                  </div>
                  <div className="p-4 rounded-2xl" style={{background:'rgba(197,162,83,0.08)',border:'1px solid rgba(197,162,83,0.25)'}}>
                    <div className="text-sm font-semibold text-stone-800">{paymentMethod==='cod'?'💵 Cash on Delivery':'🏦 Bank Transfer'}</div>
                    <div className="text-xs text-stone-500 mt-1">{paymentMethod==='cod'?'Pay when your package arrives from Nepal.':'We\'ll email payment details within 24 hours.'}</div>
                  </div>
                  {detailsError && <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">{detailsError}</div>}
                  <div className="flex gap-2">
                    <button onClick={()=>setCheckoutStep('details')} className="flex-1 py-3 rounded-2xl border-2 border-stone-200 text-stone-600 font-semibold flex items-center justify-center gap-1 hover:bg-stone-50">
                      <ArrowLeft className="w-4 h-4"/>Back
                    </button>
                    <button onClick={handleSubmit} disabled={submitting} className="flex-1 py-3 rounded-2xl font-semibold text-stone-900 disabled:opacity-60 flex items-center justify-center gap-2 hover:opacity-90"
                      style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
                      {submitting?<Loader2 className="w-4 h-4 animate-spin"/>:null}
                      {submitting?'Placing…':'Place Order'}
                    </button>
                  </div>
                </div>
              )}

              {/* Success */}
              {checkoutStep==='success' && orderResult && (
                <div className="text-center py-8 space-y-5">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-green-600"/>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-stone-900">Order Placed! 🙏</h3>
                    <p className="text-stone-500 text-sm mt-1">Thank you for supporting Himalya Retreat Nepal</p>
                  </div>
                  <div className="p-4 rounded-2xl" style={{background:'rgba(197,162,83,0.1)',border:'1px solid rgba(197,162,83,0.3)'}}>
                    <div className="text-xs text-stone-400 mb-1">Order Number</div>
                    <div className="font-display text-2xl font-bold" style={{color:'#C5A253'}}>{orderResult.orderNumber}</div>
                  </div>
                  {details.email && <p className="text-stone-600 text-sm">Confirmation sent to <strong>{details.email}</strong></p>}
                  <a href={`https://wa.me/9779851187267?text=Namaste! I placed order ${orderResult.orderNumber}. Can you confirm?`} target="_blank" rel="noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-semibold text-white" style={{background:'#25D366'}}>
                    <MessageCircle className="w-4 h-4"/> Track on WhatsApp
                  </a>
                  <button onClick={()=>{setCartOpen(false);setCheckoutStep('cart');setOrderResult(null);}} className="text-sm text-stone-400 hover:text-stone-700">Continue Shopping</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Floating cart */}
      {cartCount>0 && !cartOpen && (
        <button onClick={()=>setCartOpen(true)} className="fixed bottom-20 right-5 z-40 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-stone-900 shadow-xl hover:opacity-90 transition-all"
          style={{background:'linear-gradient(135deg,#C5A253,#E8C870)'}}>
          <ShoppingBag className="w-4 h-4"/>
          <span className="w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center font-bold">{cartCount}</span>
          <span className="hidden sm:inline">{money(cartTotal)}</span>
        </button>
      )}
    </div>
  );
}
