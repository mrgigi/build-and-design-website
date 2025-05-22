
import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Build & Design by Gigimobile | Bulk Construction Materials – South Africa & Nigeria',
  description: 'Build & Design (by Gigimobile) is your bulk supplier of construction materials—lights, marbles, furnitures, steel & rebar, cement & aggregates, timber & lumber, windows & doors, plumbing & fixtures, electrical supplies, paint & finishes—serving developers and contractors across South Africa and Nigeria. Get a free quote today!',
  keywords: 'bulk construction materials, wholesale lights, marble slabs, wholesale furnitures, steel rebar bulk, cement aggregates wholesale, timber lumber supplier, windows doors bulk, plumbing fixtures wholesale, electrical supplies bulk, paint finishes wholesale, South Africa, Nigeria, Build & Design, Gigimobile',
  authors: [{ name: 'Build & Design by Gigimobile' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Build & Design by Gigimobile | Bulk Construction Materials',
    description: 'Premium bulk orders of lights, marbles, furnitures, steel & rebar, cement & aggregates, timber & lumber, windows & doors, plumbing & fixtures, electrical supplies & paint finishes—delivered across South Africa & Nigeria. Request your free quote now!',
    url: 'https://buildanddesign.co.za',
    siteName: 'Build & Design by Gigimobile',
    images: [
      {
        url: 'https://oprjperexnkidjndkjpx.supabase.co/storage/v1/object/public/buildanddesign//B%20&%20DFacebook%20Ad.png',
        width: 1200,
        height: 630,
        alt: 'Build & Design Construction Materials',
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3TXZFT90D5"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-3TXZFT90D5');
            `
          }}
        />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              'name': 'Build & Design (by Gigimobile)',
              'image': 'https://buildanddesign.co.za/assets/logo.png',
              'url': 'https://buildanddesign.co.za',
              'telephone': [
                '+27736500843',
                '+2348139340155'
              ],
              'address': [
                {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Cape Town',
                  'addressRegion': 'Western Cape',
                  'addressCountry': 'ZA'
                },
                {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Umhlanga, Durban',
                  'addressRegion': 'KwaZulu-Natal',
                  'addressCountry': 'ZA'
                },
                {
                  '@type': 'PostalAddress',
                  'addressLocality': 'Lagos',
                  'addressRegion': 'Lagos State',
                  'addressCountry': 'NG'
                }
              ],
              'areaServed': ['ZA', 'NG'],
              'openingHours': 'Mo,Tu,We,Th,Fr 08:00-17:00',
              'paymentAccepted': ['PayGate', 'Paystack', 'EFT', 'Visa', 'Mastercard', 'Crypto'],
              'parentOrganization': {
                '@type': 'Organization',
                'name': 'Gigi Group (PTY) Ltd'
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
