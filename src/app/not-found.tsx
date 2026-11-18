import Link from 'next/link';
import '@/styles/ds.css';

export default function NotFound() {
  return (
    <main id="main" className="grid min-h-svh place-items-center px-4 text-center">
      <div className="max-w-[520px]">
        <p className="ds-t-h3">404</p>
        <h1 className="ds-t-h2 mt-2">This page could not be found</h1>
        <Link href="/" className="ds-link mt-6 inline-block">
          Back to the home page
        </Link>
      </div>
    </main>
  );
}
