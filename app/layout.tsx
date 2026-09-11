import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Anxiety & Trauma Therapy in Santa Monica',
  description:
    'Warm, grounded therapy for adults in Santa Monica and across California, with a focus on anxiety, panic, trauma, burnout, and perfectionism.',
  keywords: [
    'therapy in Santa Monica',
    'Santa Monica therapist',
    'anxiety therapy',
    'trauma therapy',
    'EMDR',
    'burnout therapy',
    'perfectionism therapy',
    'therapy for adults in California'
  ]
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}