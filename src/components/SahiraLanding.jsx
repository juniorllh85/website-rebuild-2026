import React, { useEffect, useMemo, useState } from 'react';
import { formatCurrencyUSD } from '../utils/currency';

const categories = ['Todos', 'Anillos', 'Collares', 'Aretes', 'Pulseras'];

const collections = [
  {
    title: 'Anillos',
    description: 'Desde solitarios hasta eternidades.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    pieces: '48 piezas',
  },
  {
    title: 'Collares',
    description: 'Elegancia alrededor de tu cuello.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    pieces: '62 piezas',
  },
  {
    title: 'Aretes',
    description: 'Del día a la noche con un brillo eterno.',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    pieces: '29 piezas',
  },
  {
    title: 'Pulseras',
    description: 'Brillos en tu muñeca, con carácter y lujo.',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80',
    pieces: '37 piezas',
  },
];

const initialProducts = [
  {
    id: 'anillo-eternidad',
    name: 'Anillo Eternidad Diamante',
    category: 'Anillos',
    price: 5040,
    badge: 'Nuevo',
    description: 'Solitario de diamantes con montura en oro 18K.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    materials: 'Diamante + Oro 18K',
    isNew: true,
  },
  {
    id: 'collar-gargantilla',
    name: 'Collar Gargantilla Vintage',
    category: 'Collares',
    price: 11311,
    badge: 'Top',
    description: 'Cadena de oro con colgante de estilo atemporal.',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80',
    materials: 'Oro 18K',
    isNew: false,
  },
  {
    id: 'pulsera-esclava',
    name: 'Pulsera Esclava Elegante',
    category: 'Pulseras',
    price: 12120,
    badge: 'Nuevo',
    description: 'Pulsera delicada con brillo sutil para uso diario.',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80',
    materials: 'Oro 18K + Diamante',
    isNew: true,
  },
  {
    id: 'aretes-rubi',
    name: 'Aretes Rubí Imperial',
    category: 'Aretes',
    price: 8320,
    badge: 'Favorito',
    description: 'Aretes con rubíes intensos y diseño sofisticado.',
    image: 'https://images.unsplash.com/photo-1519241047957-be31d7379a5d?w=800&q=80',
    materials: 'Rubí + Oro 18K',
    isNew: false,
  },
  {
    id: 'anillo-solitario',
    name: 'Anillo Solitario Brillante',
    category: 'Anillos',
    price: 6890,
    badge: 'Exclusivo',
    description: 'Un clásico moderno con un diamante central impecable.',
    image: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=800&q=80',
    materials: 'Diamante + Oro 18K',
    isNew: false,
  },
  {
    id: 'collar-encanto',
    name: 'Collar Encanto Doble',
    category: 'Collares',
    price: 9200,
    badge: 'Premium',
    description: 'Doble cadena con detalle en cuarzo natural.',
    image: 'https://images.unsplash.com/photo-1500167646034-7d6b5ce8d1af?w=800&q=80',
    materials: 'Oro 18K + Cuarzo',
    isNew: false,
  },
  {
    id: 'pulsera-tres',
    name: 'Pulsera Tres Oros',
    category: 'Pulseras',
    price: 7540,
    badge: 'Top',
    description: 'Combinación de oro amarillo, blanco y rosa.',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d9?w=800&q=80',
    materials: 'Oro 18K',
    isNew: false,
  },
];

const testimonials = [
  {
    quote: 'La pieza llegó perfectamente empacada y superó mis expectativas.',
    name: 'Valentina Ríos',
    place: 'Ciudad de México',
  },
  {
    quote: 'Compré un collar de esmeralda como regalo y quedó impresionante.',
    name: 'Mariana Gutiérrez',
    place: 'Monterrey',
  },
  {
    quote: 'Los aretes de rubí son mágicos. Los uso en cada ocasión especial.',
    name: 'Sofía Mendoza',
    place: 'Guadalajara',
  },
];

export default function SahiraLanding() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [customRequest, setCustomRequest] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderMessage, setOrderMessage] = useState('');
  const [isOrdering, setIsOrdering] = useState(false);

  const filteredProducts = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
        const matchesSearch =
          searchTerm.trim() === '' ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
      }),
    [selectedCategory, searchTerm]
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.ok) {
          const json = await res.json();
          if (json?.products) {
            setProducts(json.products);
          }
        }
      } catch (err) {
        console.warn('No se pudo cargar el inventario:', err);
      }
    };

    loadProducts();
  }, []);

  const arrivals = useMemo(
    () => products.filter((product) => product.isNew || product.badge === 'Top').slice(0, 4),
    [products]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearchChange = (event) => setSearchTerm(event.target.value);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, Number(quantity) || 1) } : item
      )
    );
  };

  const sendAnalyticsEvent = (eventName, payload) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contacto_sahira',
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setSubmitMessage('Gracias. Hemos recibido tu mensaje y te contactaremos pronto.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage('No pudimos enviar tu mensaje por el momento. Inténtalo más tarde.');
      }
    } catch (error) {
      console.error(error);
      setSubmitMessage('Ocurrió un error de conexión. Inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    if (cartItems.length === 0 && !customRequest.trim()) {
      setOrderMessage('Agrega al menos una pieza o describe tu pedido personalizado.');
      return;
    }

    setIsOrdering(true);
    setOrderMessage('');

    const transactionId = `sahira-${Date.now()}`;
    const orderPayload = {
      transaction_id: transactionId,
      total: cartTotal,
      currency: 'USD',
      customerName: customerName.trim(),
      customerEmail: customerEmail.trim(),
      customerPhone: customerPhone.trim(),
      items: cartItems.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        quantity: item.quantity,
        price: item.price,
      })),
      customRequest: customRequest.trim(),
      orderType: cartItems.length ? 'cart' : 'custom',
      source: 'web',
    };

    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
      });
    } catch (error) {
      console.error('Failed to save order:', error);
    }

    setTimeout(() => {
      setIsOrdering(false);
      setOrderMessage('Tu solicitud personalizada ha sido enviada. Nos comunicaremos contigo pronto.');
      sendAnalyticsEvent('purchase', {
        transaction_id: transactionId,
        value: cartTotal,
        currency: 'USD',
        items: orderPayload.items,
      });
      setCustomRequest('');
      setCartItems([]);
    }, 900);
  };

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b0b0f]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-lg font-black tracking-[0.3em] text-white sm:text-xl">
            SAHIRA GOLD
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#colecciones" className="transition hover:text-amber-400">Colecciones</a>
            <a href="#catalogo" className="transition hover:text-amber-400">Catálogo</a>
            <a href="#nuevas" className="transition hover:text-amber-400">Novedades</a>
            <a href="#testimonios" className="transition hover:text-amber-400">Testimonios</a>
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCartOpen((prev) => !prev)}
              className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20"
            >
              Carrito {cartCount ? `(${cartCount})` : ''}
            </button>
            <a href="#contacto" className="rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-2 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20">
              Contacto
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=90')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.16),_transparent_35%),linear-gradient(90deg,_rgba(11,11,15,1)_0%,_rgba(11,11,15,0.92)_40%,_rgba(11,11,15,0.7)_100%)]" />
          <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
            <div className="max-w-2xl rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8 lg:p-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">
                Joyería de lujo artesanal
              </p>
              <h1 className="text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl">
                Brillos que conquistan el tiempo.
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl">
                Diamantes certificados, oro 18K y diseños que pasan de generación en generación.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#catalogo" className="rounded-full bg-amber-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-amber-300">
                  Explorar catálogo
                </a>
                <a href="#contacto" className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                  Pedido personalizado
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="colecciones" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Nuestras colecciones</p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">
              Cada colección cuenta una historia única de elegancia y artesanía.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {collections.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-sm transition hover:-translate-y-1 hover:border-amber-400/30">
                <img loading="lazy" src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{item.pieces}</p>
                  <h3 className="mt-3 text-2xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-400">{item.description}</p>
                  <a href="#contacto" className="mt-5 inline-flex text-sm font-semibold text-amber-300 transition hover:text-amber-200">
                    Ver colección →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="catalogo" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Catálogo dinámico</p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Descubre joyas por categoría, estilo y precio.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-400">
              Filtra nuestro catálogo premium para encontrar la pieza que mejor hable de ti.
            </p>
          </div>

          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => handleCategoryChange(category)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selectedCategory === category
                      ? 'bg-amber-400 text-slate-950'
                      : 'border border-white/10 bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="min-w-[240px]">
              <label className="sr-only" htmlFor="search">Buscar joyas</label>
              <input
                id="search"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Buscar por nombre o estilo"
                className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0"
              />
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-amber-400/30">
                  <img loading="lazy" src={product.image} alt={product.name} className="h-56 w-full rounded-[1.5rem] object-cover" />
                  <div className="mt-5 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-400">{product.category}</p>
                      <h3 className="mt-3 text-2xl font-bold text-white">{product.name}</h3>
                    </div>
                    <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                      {product.badge}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{product.description}</p>
                  <p className="mt-3 text-sm text-slate-300">Materiales: {product.materials}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <p className="text-lg font-semibold text-amber-300">{formatCurrencyUSD(product.price)}</p>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
                    >
                      Agregar
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <div className="rounded-[2rem] border border-white/10 bg-[#11131b] p-10 text-center text-slate-300">
                <p className="text-lg font-semibold text-white">No encontramos resultados.</p>
                <p className="mt-2 text-sm text-slate-400">Intenta con otra categoría o palabra clave.</p>
              </div>
            )}
          </div>
        </section>

        <section id="nuevas" className="border-y border-white/10 bg-white/5">
          <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Nuevas llegadas</p>
                <h2 className="text-3xl font-black text-white sm:text-4xl">Piezas que enamoran desde el primer vistazo.</h2>
              </div>
              <a href="#contacto" className="text-sm font-semibold text-amber-300 transition hover:text-amber-200">
                Solicitar asesoría →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {arrivals.map((item) => (
                <article key={item.id} className="rounded-[2rem] border border-white/10 bg-[#12121a] p-4 transition hover:-translate-y-1 hover:border-amber-400/30">
                  <img loading="lazy" src={item.image} alt={item.name} className="h-56 w-full rounded-[1.5rem] object-cover" />
                  <div className="mt-5">
                    <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300">
                      {item.badge}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white">{item.name}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    <p className="mt-2 text-sm text-slate-300">Materiales: {item.materials}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-lg font-semibold text-amber-300">{formatCurrencyUSD(item.price)}</p>
                      <button
                        type="button"
                        onClick={() => addToCart(item)}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
                      >
                        Agregar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="historia" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Nuestra historia</p>
              <h2 className="text-3xl font-black text-white sm:text-4xl">
                Cuatro décadas de artesanía y pasión.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                Desde 1985, la familia Sahira ha dedicado cada día a crear piezas únicas que trascienden el tiempo. Nuestros artesanos combinan técnicas ancestrales con diseño contemporáneo para crear joyas que se convierten en herencias familiares.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['40+', 'Años de experiencia'],
                ['50K+', 'Piezas creadas'],
                ['100%', 'Oro certificado'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.5rem] border border-white/10 bg-[#11131b] p-6 text-center">
                  <p className="text-3xl font-black text-amber-300">{value}</p>
                  <p className="mt-2 text-sm text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonios" className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Testimonios</p>
            <h2 className="text-3xl font-black text-white sm:text-4xl">Lo que dicen nuestras clientas.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-lg leading-8 text-slate-300">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.place}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {isCartOpen ? (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 p-4 sm:items-center">
          <div className="w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c11] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-amber-400">Carrito</p>
                <p className="mt-1 text-sm text-slate-300">{cartCount} artículo{cartCount === 1 ? '' : 's'} seleccionado{cartCount === 1 ? '' : 's'}</p>
              </div>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                Cerrar
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="rounded-[1.5rem] border border-dashed border-white/10 bg-[#11131b] p-8 text-center text-slate-300">
                  <p className="text-lg font-semibold text-white">Tu carrito está vacío</p>
                  <p className="mt-2 text-sm text-slate-400">Agrega una joya desde el catálogo o nuevas llegadas.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="rounded-[1.5rem] border border-white/10 bg-[#12121a] p-4">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="h-20 w-20 rounded-[1.25rem] object-cover" />
                        <div className="flex-1">
                          <h3 className="text-base font-bold text-white">{item.name}</h3>
                          <p className="mt-1 text-sm text-slate-400">{item.category}</p>
                          <p className="mt-2 text-sm text-slate-300">{formatCurrencyUSD(item.price)} x {item.quantity}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <input
                            type="number"
                            value={item.quantity}
                            min="1"
                            onChange={(event) => updateQuantity(item.id, event.target.value)}
                            className="w-20 rounded-2xl border border-white/10 bg-[#11131b] px-3 py-2 text-sm text-white outline-none"
                          />
                          <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="text-sm font-semibold text-rose-400 transition hover:text-rose-300"
                          >
                            Eliminar
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t border-white/10 px-6 py-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-lg font-semibold text-amber-300">Total: {formatCurrencyUSD(cartTotal)}</p>
                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  className="rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Continuar comprando
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <footer id="contacto" className="border-t border-white/10 bg-[#06070a]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Sahira Gold</p>
            <h2 className="mt-3 text-3xl font-black text-white">Tu próxima joya empieza aquí.</h2>
            <p className="mt-4 max-w-xl text-slate-400">
              Contáctanos para asesoría personalizada, pedidos especiales o descubrir la pieza ideal para tu próxima celebración.
            </p>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-sm text-slate-300">
              <p className="font-semibold text-white">hola@sahiragoldcollection.com</p>
              <p className="mt-2">+52 (55) 1234-5678</p>
              <p className="mt-2">Polanco, Ciudad de México</p>
            </div>
          </div>

          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white sm:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-400">Pedidos personalizados</p>
              <h2 className="mt-3 text-3xl font-black">Crea tu joya a medida.</h2>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                Describe tu idea, el material y el estilo que deseas. Nuestro equipo te acompañará en todo el proceso para diseñar una pieza única.
              </p>
            </div>
            <form onSubmit={handleOrderSubmit} className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="grid gap-2">
                  <span className="mb-2 block text-sm font-semibold text-slate-200">Nombre</span>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    placeholder="Nombre completo"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="mb-2 block text-sm font-semibold text-slate-200">Correo</span>
                  <input
                    type="email"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0"
                  />
                </label>
              </div>
              <label className="grid gap-2">
                <span className="mb-2 block text-sm font-semibold text-slate-200">Teléfono</span>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(event) => setCustomerPhone(event.target.value)}
                  placeholder="Opcional"
                  className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0"
                />
              </label>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="customRequest">Tu solicitud</label>
                <textarea
                  id="customRequest"
                  name="customRequest"
                  rows="4"
                  value={customRequest}
                  onChange={(event) => setCustomRequest(event.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0"
                  placeholder="Describe el diseño, piedras o ideas especiales que quieras."
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <button
                  type="submit"
                  disabled={isOrdering}
                  className="rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isOrdering ? 'Enviando solicitud...' : 'Enviar pedido personalizado'}
                </button>
                <button
                  type="button"
                  onClick={() => setCustomRequest('')}
                  className="rounded-full border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Limpiar texto
                </button>
              </div>
              {orderMessage ? (
                <p className="text-sm text-amber-300">{orderMessage}</p>
              ) : null}
            </form>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-6">
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="name">Nombre</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="email">Correo</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0" placeholder="tu@email.com" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-200" htmlFor="message">Mensaje</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="w-full rounded-2xl border border-white/10 bg-[#11131b] px-4 py-3 text-sm text-white outline-none ring-0" placeholder="Cuéntanos qué buscas..." />
              </div>
            </div>

            {submitMessage ? (
              <p className="mt-4 text-sm text-amber-300">{submitMessage}</p>
            ) : null}

            <button type="submit" disabled={isSubmitting} className="mt-6 w-full rounded-full bg-amber-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70">
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </footer>
    </div>
  );
}
