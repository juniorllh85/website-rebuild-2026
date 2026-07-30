import React, { useEffect, useMemo, useState } from 'react';
import { formatCurrencyUSD } from '../utils/currency';
import { clearAdminToken, getAdminToken, getAuthHeaders, setAdminToken } from '../utils/adminAuth';

const STATUS_OPTIONS = ['Todos', 'pending', 'completed', 'cancelled'];
const PRODUCT_CATEGORIES = ['Anillos', 'Collares', 'Aretes', 'Pulseras', 'Otros'];
const ORDERS_PER_PAGE = 6;

export default function AdminPanel() {
  const [settings, setSettings] = useState({ currency: 'USD', shippingCost: 0, freeShippingThreshold: 0 });
  const [messages, setMessages] = useState([]);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [productForm, setProductForm] = useState({
    id: '',
    name: '',
    category: 'Anillos',
    price: 0,
    badge: '',
    description: '',
    image: '',
    materials: '',
    isNew: false,
  });
  const [editingProductId, setEditingProductId] = useState('');
  const [productMessage, setProductMessage] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [imagePreview, setImagePreview] = useState('');
  const [secret, setSecret] = useState('');
  const [token, setToken] = useState('');
  const [status, setStatus] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [orderSearch, setOrderSearch] = useState('');
  const [orderStatusFilter, setOrderStatusFilter] = useState('Todos');
  const [orderPage, setOrderPage] = useState(1);

  const authHeaders = getAuthHeaders();

  useEffect(() => {
    const stored = getAdminToken();
    if (stored) {
      setToken(stored);
    }
  }, []);

  useEffect(() => {
    fetch('/admin-settings.json')
      .then((r) => r.ok ? r.json() : null)
      .then((json) => { if (json) setSettings(json); })
      .catch((err) => console.warn('Failed loading admin settings:', err));
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchMessages = async () => {
      try {
        const res = await fetch('/api/messages', { headers: authHeaders });
        if (res.status === 401) {
          setAuthError('Clave inválida o sesión expirada');
          logout();
          return;
        }
        const json = await res.json();
        if (json?.messages) setMessages(json.messages);
      } catch (err) {
        console.warn('Failed loading messages:', err);
      }
    };

    const fetchOrders = async () => {
      try {
        const res = await fetch('/api/orders', { headers: authHeaders });
        if (res.status === 401) {
          setAuthError('Clave inválida o sesión expirada');
          logout();
          return;
        }
        const json = await res.json();
        if (json?.orders) setOrders(json.orders);
      } catch (err) {
        console.warn('Failed loading orders:', err);
      }
    };

    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products', { headers: authHeaders });
        if (res.status === 401) {
          setAuthError('Clave inválida o sesión expirada');
          logout();
          return;
        }
        const json = await res.json();
        if (json?.products) setProducts(json.products);
      } catch (err) {
        console.warn('Failed loading products:', err);
      }
    };

    fetchMessages();
    fetchOrders();
    fetchProducts();
  }, [token]);

  useEffect(() => {
    setOrderPage(1);
  }, [orderSearch, orderStatusFilter]);

  const login = async () => {
    setStatus('checking');
    setAuthError(null);

    if (!secret.trim()) {
      setAuthError('Ingresa la clave de administrador.');
      setStatus(null);
      return;
    }

    try {
      const res = await fetch('/api/orders', { headers: { 'x-admin-secret': secret.trim() } });
      if (!res.ok) {
        setAuthError('Clave inválida.');
        setStatus('error');
        return;
      }
      setAdminToken(secret.trim());
      setToken(secret.trim());
      setStatus('authenticated');
      setSecret('');
      setAuthError(null);
    } catch (err) {
      console.error(err);
      setAuthError('No se pudo conectar al servidor.');
      setStatus('error');
    }
  };

  const logout = () => {
    clearAdminToken();
    setToken('');
    setOrders([]);
    setMessages([]);
    setStatus(null);
  };

  const save = async () => {
    if (!token) {
      setAuthError('Necesitas iniciar sesión para guardar.');
      return;
    }

    setStatus('saving');
    try {
      const res = await fetch('/api/admin-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ secret: token, settings }),
      });
      if (res.ok) {
        setStatus('saved');
      } else {
        const json = await res.json();
        setStatus(`error: ${json?.error || res.statusText}`);
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const refreshProducts = async () => {
    try {
      const res = await fetch('/api/products', { headers: authHeaders });
      if (!res.ok) throw new Error('Failed to load products');
      const json = await res.json();
      setProducts(json.products || []);
    } catch (err) {
      console.error(err);
      setProductMessage('No se pudo actualizar el inventario.');
    }
  };

  const setFormField = (name, value) => {
    setProductForm((prev) => {
      const next = { ...prev, [name]: value };
      // simple inline validation on change
      const errors = {};
      if (!next.name || !String(next.name).trim()) errors.name = 'Nombre requerido';
      if (next.price == null || Number(next.price) < 0) errors.price = 'Precio inválido';
      if (next.image) {
        const v = String(next.image).trim();
        if (!(v.startsWith('http') || v.startsWith('data:') || v.startsWith('/'))) {
          errors.image = 'URL de imagen inválida';
        }
      }
      setFormErrors(errors);
      if (name === 'image') {
        const v = String(value || '').trim();
        setImagePreview(v && (v.startsWith('http') || v.startsWith('data:') || v.startsWith('/')) ? v : '');
      }
      return next;
    });
  };

  const validateFields = (form) => {
    const errors = {};
    if (!form.name || !String(form.name).trim()) errors.name = 'Nombre requerido';
    if (form.price == null || Number(form.price) < 0) errors.price = 'Precio inválido';
    if (form.image) {
      const v = String(form.image).trim();
      if (!(v.startsWith('http') || v.startsWith('data:') || v.startsWith('/'))) errors.image = 'URL de imagen inválida';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const clearProductForm = () => {
    setEditingProductId('');
    setProductForm({
      id: '',
      name: '',
      category: 'Anillos',
      price: 0,
      badge: '',
      description: '',
      image: '',
      materials: '',
      isNew: false,
    });
    setProductMessage('');
  };

  const saveProduct = async () => {
    if (!token) {
      setAuthError('Necesitas iniciar sesión para administrar productos.');
      return;
    }
    // validate before sending
    if (!validateFields(productForm)) {
      setProductMessage('Corrige los errores del formulario antes de guardar.');
      return;
    }
    const method = editingProductId ? 'PUT' : 'POST';
    const endpoint = '/api/products';
    try {
      setProductMessage('Guardando producto...');
      const res = await fetch(endpoint, {
        method,
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ ...productForm, id: editingProductId || productForm.id }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json?.error || 'Error al guardar producto');
      }
      await refreshProducts();
      clearProductForm();
      setProductMessage('Producto guardado correctamente.');
    } catch (err) {
      console.error(err);
      setProductMessage(err.message || 'Error al guardar producto.');
    }
  };

  const editProduct = (product) => {
    setEditingProductId(product.id);
    setProductForm({
      id: product.id,
      name: product.name,
      category: product.category,
      price: product.price,
      badge: product.badge,
      description: product.description,
      image: product.image,
      materials: product.materials,
      isNew: Boolean(product.isNew),
    });
    setProductMessage('Editando producto seleccionado.');
  };

  const deleteProduct = async (productId) => {
    if (!token) {
      setAuthError('Necesitas iniciar sesión para eliminar productos.');
      return;
    }
    try {
      const res = await fetch('/api/products', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ id: productId }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json?.error || 'Error al eliminar producto');
      }
      await refreshProducts();
      setProductMessage('Producto eliminado correctamente.');
    } catch (err) {
      console.error(err);
      setProductMessage(err.message || 'Error al eliminar producto.');
    }
  };

  const updateOrderStatus = async (transactionId, newStatus) => {
    if (!token) {
      setAuthError('Necesitas iniciar sesión para actualizar órdenes.');
      return;
    }
    try {
      const res = await fetch('/api/orders', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', ...authHeaders },
        body: JSON.stringify({ transaction_id: transactionId, status: newStatus }),
      });
      if (!res.ok) throw new Error('Failed to update order status');
      setOrders((prev) => prev.map((order) => order.transaction_id === transactionId ? { ...order, status: newStatus } : order));
      setStatus('order-updated');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const filteredOrders = useMemo(() => {
    const query = orderSearch.trim().toLowerCase();
    return orders.filter((order) => {
      const statusMatch = orderStatusFilter === 'Todos' || order.status === orderStatusFilter;
      const itemText = (order.items || []).map((item) => item.name.toLowerCase()).join(' ');
      const customerText = `${order.customerName || ''} ${order.customerEmail || ''} ${order.customerPhone || ''}`.toLowerCase();
      const searchMatch =
        !query ||
        order.transaction_id.toLowerCase().includes(query) ||
        (order.customRequest || '').toLowerCase().includes(query) ||
        itemText.includes(query) ||
        customerText.includes(query);
      return statusMatch && searchMatch;
    });
  }, [orders, orderSearch, orderStatusFilter]);

  const totalPages = Math.max(1, Math.ceil(filteredOrders.length / ORDERS_PER_PAGE));
  const currentOrders = filteredOrders.slice((orderPage - 1) * ORDERS_PER_PAGE, orderPage * ORDERS_PER_PAGE);

  return (
    <div className="min-h-screen p-8 bg-slate-50 text-slate-900">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 shadow-lg">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Admin Panel</h2>
            <p className="text-sm text-slate-500 mt-1">Administra ajustes, mensajes y órdenes con seguridad.</p>
          </div>
          {token ? (
            <button onClick={logout} className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100">
              Cerrar sesión
            </button>
          ) : null}
        </div>

        {!token ? (
          <div className="mt-8 grid gap-4">
            <label className="grid gap-2">
              <span className="font-semibold">Clave de administrador</span>
              <input
                type="password"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                placeholder="Ingresa tu clave secreta"
              />
            </label>
            {authError ? <p className="text-sm text-rose-500">{authError}</p> : null}
            <button
              onClick={login}
              className="w-full rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Iniciar sesión
            </button>
          </div>
        ) : (
          <div className="mt-8 grid gap-8">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold mb-4">Admin Settings</h3>
              <div className="grid gap-4">
                <label className="grid gap-2">
                  <span className="font-semibold">Currency</span>
                  <input
                    value={settings.currency}
                    onChange={(e) => setSettings({ ...settings, currency: e.target.value })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-semibold">Shipping Cost</span>
                  <input
                    type="number"
                    value={settings.shippingCost}
                    onChange={(e) => setSettings({ ...settings, shippingCost: Number(e.target.value) })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="font-semibold">Free shipping threshold</span>
                  <input
                    type="number"
                    value={settings.freeShippingThreshold}
                    onChange={(e) => setSettings({ ...settings, freeShippingThreshold: Number(e.target.value) })}
                    className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    onClick={save}
                    className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                  >
                    Guardar ajustes
                  </button>
                  <span className="text-sm text-slate-500">Status: {status || 'idle'}</span>
                </div>
                <div className="text-sm text-slate-500">
                  Current preview: {settings.currency === 'USD' ? formatCurrencyUSD(settings.shippingCost) : `${settings.shippingCost} ${settings.currency}`} shipping, free over {settings.currency === 'USD' ? formatCurrencyUSD(settings.freeShippingThreshold) : `${settings.freeShippingThreshold} ${settings.currency}`}.
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-bold mb-4">Contact Messages</h3>
              {messages.length === 0 ? (
                <p className="text-sm text-slate-600">No messages yet.</p>
              ) : (
                <div className="space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-sm font-semibold text-slate-900">{message.type || 'message'}</span>
                        <span className="text-xs text-slate-500">{new Date(message.receivedAt).toLocaleString()}</span>
                      </div>
                      <pre className="whitespace-pre-wrap text-sm text-slate-700">{JSON.stringify(message.data || message, null, 2)}</pre>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Inventario</h3>
                  <p className="text-sm text-slate-500">Administra productos con persistencia en data/products.json.</p>
                </div>
                <button
                  type="button"
                  onClick={refreshProducts}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                >
                  Refrescar inventario
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr]">
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">{editingProductId ? 'Editar producto' : 'Nuevo producto'}</h4>
                  <div className="grid gap-3">
                    <label className="grid gap-2 text-sm text-slate-700">
                      Nombre
                      <input
                        value={productForm.name}
                        onChange={(e) => setFormField('name', e.target.value)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Categoría
                      <select
                        value={productForm.category}
                        onChange={(e) => setFormField('category', e.target.value)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      >
                        {PRODUCT_CATEGORIES.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Precio
                      <input
                        type="number"
                        value={productForm.price}
                        onChange={(e) => setFormField('price', Number(e.target.value))}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Badge
                      <input
                        value={productForm.badge}
                        onChange={(e) => setFormField('badge', e.target.value)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Imagen
                      <input
                        value={productForm.image}
                        onChange={(e) => setFormField('image', e.target.value)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                        placeholder="URL de la imagen"
                      />
                      {formErrors.image ? <p className="text-rose-500 text-sm mt-1">{formErrors.image}</p> : null}
                      {imagePreview ? (
                        <div className="mt-2">
                          <img src={imagePreview} alt="Preview" className="h-28 w-auto rounded-md object-contain border" />
                        </div>
                      ) : null}
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Materiales
                      <input
                        value={productForm.materials}
                        onChange={(e) => setFormField('materials', e.target.value)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      />
                    </label>
                    <label className="grid gap-2 text-sm text-slate-700">
                      Descripción
                      <textarea
                        value={productForm.description}
                        onChange={(e) => setFormField('description', e.target.value)}
                        className="min-h-[120px] rounded-2xl border border-slate-200 px-4 py-3 outline-none"
                      />
                    </label>
                    <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                      <input
                        type="checkbox"
                        checked={productForm.isNew}
                        onChange={(e) => setFormField('isNew', e.target.checked)}
                        className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                      />
                      Marcar como nuevo
                    </label>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                        onClick={saveProduct}
                        disabled={Object.keys(formErrors).length > 0}
                      className="rounded-2xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
                    >
                      {editingProductId ? 'Actualizar producto' : 'Crear producto'}
                    </button>
                    <button
                      type="button"
                      onClick={clearProductForm}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-100"
                    >
                      Limpiar formulario
                    </button>
                  </div>
                  {productMessage ? <p className="mt-4 text-sm text-slate-600">{productMessage}</p> : null}
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">Productos en inventario</h4>
                  {products.length === 0 ? (
                    <p className="text-sm text-slate-600">No hay productos en inventario.</p>
                  ) : (
                    <div className="space-y-3">
                      {products.map((product) => (
                        <div key={product.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                              <p className="font-semibold text-slate-900">{product.name}</p>
                              <p className="text-sm text-slate-500">{product.category} · {product.badge || 'Sin badge'}</p>
                              <p className="mt-2 text-sm text-slate-700">{product.description}</p>
                              <p className="mt-2 text-sm text-slate-700">Precio: {product.price} USD · Materiales: {product.materials}</p>
                            </div>
                            <div className="flex flex-wrap gap-2 text-right">
                              <button
                                type="button"
                                onClick={() => editProduct(product)}
                                className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100"
                              >
                                Editar
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteProduct(product.id)}
                                className="rounded-2xl border border-rose-400 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
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
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-bold">Órdenes</h3>
                  <p className="text-sm text-slate-500">Búsqueda, filtro y actualización de estados.</p>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <input
                    value={orderSearch}
                    onChange={(e) => setOrderSearch(e.target.value)}
                    placeholder="Buscar orden o producto"
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                  />
                  <select
                    value={orderStatusFilter}
                    onChange={(e) => setOrderStatusFilter(e.target.value)}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                  >
                    {STATUS_OPTIONS.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>

              {currentOrders.length === 0 ? (
                <p className="text-sm text-slate-600">No hay órdenes que coincidan con la búsqueda.</p>
              ) : (
                <div className="space-y-4">
                  {currentOrders.map((order) => (
                    <div key={order.transaction_id} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Orden: {order.transaction_id}</p>
                          <p className="text-sm text-slate-500">{order.receivedAt ? new Date(order.receivedAt).toLocaleString() : 'Fecha desconocida'}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-semibold text-slate-900">Total: {order.currency === 'USD' ? formatCurrencyUSD(order.total) : `${order.total} ${order.currency}`}</p>
                          <p className="text-xs text-slate-500">Estado: {order.status || 'pending'}</p>
                        </div>
                      </div>

                      <div className="mt-4 space-y-4">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                          <p className="font-semibold text-slate-900">Cliente</p>
                          <p>{order.customerName || 'Sin nombre'}</p>
                          <p>{order.customerEmail || 'Sin correo'}</p>
                          {order.customerPhone ? <p>{order.customerPhone}</p> : null}
                          <p className="mt-3 text-xs text-slate-500">Tipo: {order.orderType || 'cart'} · Fuente: {order.source || 'web'}</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                            <p className="font-semibold text-slate-900">Artículos</p>
                            <ul className="mt-2 list-disc list-inside space-y-1">
                              {(order.items || []).map((item) => (
                                <li key={item.id}>
                                  {item.name} — {item.quantity} × {order.currency === 'USD' ? formatCurrencyUSD(item.price) : `${item.price} ${order.currency}`}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="grid gap-2">
                            <label className="text-sm font-semibold text-slate-900">Actualizar estado</label>
                            <select
                              value={order.status || 'pending'}
                              onChange={(e) => updateOrderStatus(order.transaction_id, e.target.value)}
                              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none"
                            >
                              {STATUS_OPTIONS.filter((option) => option !== 'Todos').map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>

                      {order.customRequest ? (
                        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                          <p className="font-semibold text-slate-900">Solicitud personalizada</p>
                          <p className="mt-2 whitespace-pre-wrap">{order.customRequest}</p>
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 flex items-center justify-between gap-4 text-sm text-slate-600">
                <span>Mostrando {currentOrders.length} de {filteredOrders.length} órdenes.</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderPage((prev) => Math.max(1, prev - 1))}
                    disabled={orderPage === 1}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 disabled:opacity-50"
                  >
                    Anterior
                  </button>
                  <span>Página {orderPage} / {totalPages}</span>
                  <button
                    type="button"
                    onClick={() => setOrderPage((prev) => Math.min(totalPages, prev + 1))}
                    disabled={orderPage === totalPages}
                    className="rounded-full border border-slate-200 bg-white px-3 py-2 disabled:opacity-50"
                  >
                    Siguiente
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {authError ? <p className="mt-4 text-sm text-rose-500">{authError}</p> : null}
      </div>
    </div>
  );
}
