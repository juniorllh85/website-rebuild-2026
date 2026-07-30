import { useEffect, useState } from 'react';

export default function useAdminSettings() {
  const [settings, setSettings] = useState({ currency: 'USD', shippingCost: 0, freeShippingThreshold: 0 });
  useEffect(() => {
    let mounted = true;
    fetch('/admin-settings.json')
      .then((r) => r.ok ? r.json() : null)
      .then((json) => {
        if (mounted && json) setSettings(json);
      })
      .catch((err) => console.warn('Failed to load admin settings:', err));
    return () => { mounted = false; };
  }, []);
  return settings;
}
