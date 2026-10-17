// Single source of truth for organization identity (used by header, footer, pages, SEO).
export const ORG = {
  name: 'The Golden Years Foundation',
  legalStatus: '501(c)(3) Nonprofit Organization',
  ein: '35-2905128',
  street: '17890 SW 264th Street',
  city: 'Homestead',
  state: 'FL',
  zip: '33031',
  county: 'Miami-Dade County',
  phone: '786-442-5540',
  phoneLink: 'tel:+17864425540',
  email: 'info@thegoldenyearsfoundation.com',
  whatsapp: 'https://wa.me/13054174092',
  donateUrl: 'https://square.link/u/QzwHjl0K', // Secure Square checkout (HTTPS)
  founded: '2023',
};

export const fullAddress = () =>
  [ORG.street, `${ORG.city}, ${ORG.state}${ORG.zip ? ' ' + ORG.zip : ''}`].filter(Boolean).join(', ');

export const NAV_LINKS = [
  { href: '/', label: 'Home', es: 'Inicio' },
  { href: '/about', label: 'About Us', es: 'Nosotros' },
  { href: '/mission', label: 'Mission', es: 'Misión' },
  { href: '/programs', label: 'Programs', es: 'Programas' },
  { href: '/news', label: 'News', es: 'Noticias' },
  { href: '/volunteer', label: 'Volunteer', es: 'Voluntariado' },
  { href: '/contact', label: 'Contact', es: 'Contacto' },
];

export const SOCIALS = [
  { key: 'facebook', href: 'https://www.facebook.com/profile.php?id=61589653498767', label: 'Facebook' },
  { key: 'instagram', href: 'https://www.instagram.com/thegoldenyearsfoundation', label: 'Instagram' },
  { key: 'youtube', href: 'https://www.youtube.com/@THEGOLDENYEARSFOUNDATION', label: 'YouTube' },
  { key: 'whatsapp', href: 'https://wa.me/13054174092', label: 'WhatsApp' },
];
