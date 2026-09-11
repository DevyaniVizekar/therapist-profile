'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  [
    'What can I expect from therapy with Dr. Maya?',
    'Sessions are warm, collaborative, and grounded. They are structured enough to feel supportive while leaving room for reflection and depth. The work is paced around your needs and goals.'
  ],
  [
    'Do you offer in-person and online therapy?',
    'Yes. Dr. Maya offers in-person therapy from her Santa Monica office and secure telehealth sessions for clients located in California.'
  ],
  [
    'What approaches does Dr. Maya use?',
    'She integrates evidence-based methods including cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.'
  ],
  [
    'Who does Dr. Maya work with?',
    'She works with adults, including high-achieving professionals, entrepreneurs, and creatives navigating anxiety, panic, trauma, burnout, perfectionism, and the effects of past experiences.'
  ],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-ink/15">
      {faqs.map(([question, answer], i) => (
        <div key={question} className="py-5">
          <button
            onClick={() => setOpen(open === i ? -1 : i)}
            className="w-full flex items-center justify-between text-left gap-6"
            aria-expanded={open === i}
          >
            <span className="serif text-xl sm:text-2xl">
              {question}
            </span>

            <span className="shrink-0 w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center">
              {open === i ? <Minus size={16} /> : <Plus size={16} />}
            </span>
          </button>

          {open === i && (
            <p className="mt-4 max-w-3xl text-sm sm:text-base leading-7 text-ink/70">
              {answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}