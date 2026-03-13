import Image from 'next/image';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Activities', '/services'],
  ['Book Consultation', '/book-consultation'],
  ['Reviews', '/reviews'],
  ['Contact', '/contact']
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-olive-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-white">
          <Image
            src="/images/logo.png"
            alt="Sanya Gardens logo"
            width={220}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
          <span className="text-base font-semibold leading-tight sm:text-lg md:text-xl">
            Sanya <span className="text-gold-500">Gardens</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-4 text-sm text-olive-200">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-gold-400">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
