import { Link } from 'react-router-dom';

const WA = 'https://wa.me/919599004265?text=Hi%20Tyoohar%20Ghar%2C%20I%27d%20love%20to%20order%20a%20hamper%21';

export default function Footer() {
  return (
    <footer className="bg-navy-brand text-cream-200 pt-14 pb-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 pb-10 border-b border-navy-mid">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src="/images/logo.svg" alt="Tyoohar Ghar" className="h-12 w-auto mb-3 brightness-0 invert opacity-90" onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='block'; }} />
            <div className="hidden">
              <h3 className="font-display text-xl text-white mb-1">Tyoohar Ghar</h3>
              <p className="font-body text-xs text-rose-light tracking-widest uppercase mb-2">Festive Gifting</p>
            </div>
            <p className="font-body text-xs text-rose-light tracking-widest uppercase mb-3">CURATED. ELEGANT. PERSONAL.</p>
            <p className="font-body text-sm text-cream-300 leading-relaxed mb-5">
              Premium festive hampers curated for every Indian celebration. Thoughtfully assembled, beautifully delivered.
            </p>
            <a href="https://www.instagram.com/tyoohar_ghar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-rose-light hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              @tyoohar_ghar
            </a>
          </div>

          {/* Collections */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Collections</h4>
            <ul className="space-y-2">
              {[
                ["Father's Day", '/collections/fathers-day'],
                ['Holi',         '/collections/holi'],
                ['Rakhi',        '/collections/rakhi'],
                ['Navratri',     '/collections/navratri'],
                ['Diwali',       '/collections/diwali'],
                ['Christmas',    '/collections/christmas'],
              ].map(([label, to]) => (
                <li key={to}><Link to={to} className="font-body text-sm text-cream-300 hover:text-rose-light transition-colors">{label}</Link></li>
              ))}
              <li><Link to="/collections" className="font-body text-sm text-rose-light hover:text-white font-semibold transition-colors">All →</Link></li>
            </ul>
          </div>

          {/* Rituals */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Rituals</h4>
            <ul className="space-y-2">
              {[
                ['Mehndi',        '/rituals/mehndi'],
                ['Haldi',         '/rituals/haldi'],
                ['Sangeet',       '/rituals/sangeet'],
                ['Griha Pravesh', '/rituals/griha-pravesh'],
                ['Annaprashan',   '/rituals/annaprashan'],
                ['Mundan',        '/rituals/mundan'],
              ].map(([label, to]) => (
                <li key={to}><Link to={to} className="font-body text-sm text-cream-300 hover:text-rose-light transition-colors">{label}</Link></li>
              ))}
              <li><Link to="/rituals" className="font-body text-sm text-rose-light hover:text-white font-semibold transition-colors">All →</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Info</h4>
            <ul className="space-y-2">
              {[
                ['About Us',          '/about'],
                ['Corporate Gifting', '/corporate-gifting'],
                ['Blog',              '/blog'],
                ['FAQ',               '/faq'],
                ['Contact',           '/contact'],
              ].map(([label, to]) => (
                <li key={to}><Link to={to} className="font-body text-sm text-cream-300 hover:text-rose-light transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Order */}
          <div>
            <h4 className="font-display text-sm font-semibold text-white mb-4 uppercase tracking-wider">Order Now</h4>
            <p className="font-body text-sm text-cream-300 mb-4 leading-relaxed">
              All orders through WhatsApp. We respond within 30 minutes (10 AM – 9 PM).
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm py-2.5 px-5">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
            <p className="font-body text-xs text-cream-400 mt-3">+91 95990 04265</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 text-xs text-cream-400 font-body">
          <p>© 2026 Tyoohar Ghar · Delhi NCR · PAN India Delivery</p>
          <p>Made with ♥ for every Indian celebration</p>
        </div>
      </div>
    </footer>
  );
}
