import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

const WA = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar%2C%20I%27d%20love%20to%20order%20a%20hamper%21';

const navLinks = [
  { label: 'Home',       to: '/' },
  { label: 'Collections', to: '/collections' },
  { label: 'Rituals',    to: '/rituals' },
  { label: 'Corporate',  to: '/corporate-gifting' },
  { label: 'Blog',       to: '/blog' },
  { label: 'About',      to: '/about' },
];

export default function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();
  const { cartCount, openCart } = useCart();

  useEffect(() => { setOpen(false); }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-cream-100'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/images/logo.svg"
            alt="Tyoohar Ghar"
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
            onError={e => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="hidden flex-col leading-none">
            <span className="font-display text-xl font-bold text-navy-brand tracking-wide">Tyoohar Ghar</span>
            <span className="font-body text-[10px] text-rose-brand tracking-[0.15em] uppercase">Festive Gifting</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-6">
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `font-body text-sm font-medium transition-colors duration-150 relative group ${
                    isActive ? 'text-rose-brand' : 'text-navy-mid hover:text-rose-brand'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span className={`absolute -bottom-0.5 left-0 h-0.5 bg-rose-brand rounded-full transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`} />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-whatsapp text-sm py-2 px-4"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp
        </a>

        {/* Cart icon (always visible) */}
        <button
          onClick={openCart}
          className="relative p-2 text-navy-brand hover:text-rose-brand transition-colors"
          aria-label={`Open cart${cartCount > 0 ? `, ${cartCount} item${cartCount > 1 ? 's' : ''}` : ''}`}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-rose-brand text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center leading-none">
              {cartCount > 9 ? '9+' : cartCount}
            </span>
          )}
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="md:hidden p-2 text-navy-brand"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-cream-300 px-4 py-4 space-y-1 shadow-xl animate-slideDown">
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `flex items-center font-body text-base py-3 px-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-rose-brand font-semibold bg-rose-pale/50'
                    : 'text-navy-mid hover:text-rose-brand hover:bg-cream-200'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp w-full justify-center mt-3"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
