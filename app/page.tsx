import Image from 'next/image';
import {
  ArrowRight,
  Check,
  MapPin,
  Video,
  Heart,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import FAQ from '../components/FAQ';
import MobileNav from '../components/MobileNav';

const people = [
  {
    title: 'High-achieving adults seeking balance and clarity',
    copy: 'For thoughtful, self-aware adults who look capable on the outside while feeling exhausted, stuck in overthinking, or emotionally on edge, and want to feel more grounded, confident, and in control.'
  },
  {
    title: 'Professionals, entrepreneurs & creatives',
    copy: 'For people carrying high internal pressure who want to step out of burnout, reconnect with themselves, and build a more sustainable way of living and working.'
  },
  {
    title: 'Adults healing from past experiences',
    copy: 'For adults navigating trauma, chronic stress, relationship patterns, or earlier experiences that continue to affect confidence, safety, and connection.'
  }
];

const expertise = [
  'Anxiety',
  'Panic',
  'Trauma',
  'Burnout',
  'Perfectionism',
  'High internal pressure',
  'Chronic stress',
  'Past experiences',
  'Overthinking',
  'Emotional regulation'
];

const services = [
  {
    title: 'Anxiety & Panic',
    copy: 'Understand the worry, tension, overthinking, and panic that can keep your body and mind on high alert.'
  },
  {
    title: 'Trauma & EMDR',
    copy: 'A carefully paced, safety-focused approach for single-incident trauma and longer-standing patterns rooted in earlier experiences, with EMDR integrated when appropriate.'
  },
  {
    title: 'Burnout & Perfectionism',
    copy: 'Create more sustainable ways of living and working when achievement, pressure, and pushing through have taken a toll.'
  }
];

export default function Home() {
  return (
    <main id="top">
      <header className="absolute top-0 left-0 right-0 z-30">
        <div className="container-x h-24 flex items-center justify-between">
          <a href="#top" className="leading-none">
            <span className="serif text-xl sm:text-2xl">Maya Reynolds</span>
            <span className="block text-[9px] uppercase tracking-[.24em] mt-1 text-ink/55">
              PsyD · Clinical Psychology
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[.13em] font-semibold">
            <a href="#about" className="hover:text-clay">About</a>
            <a href="#who" className="hover:text-clay">Who I Help</a>
            <a href="#services" className="hover:text-clay">Services</a>
            <a href="#office" className="hover:text-clay">Our Office</a>
            <a href="#faq" className="hover:text-clay">FAQs</a>
            <a
              href="#contact"
              className="rounded-full border border-ink px-5 py-3 hover:bg-ink hover:text-cream transition"
            >
              Book a session
            </a>
          </nav>

          <MobileNav />
        </div>
      </header>

      <section className="min-h-screen bg-mist pt-24 md:pt-28 overflow-hidden">
        <div className="container-x grid lg:grid-cols-[1.05fr_.95fr] gap-12 lg:gap-20 items-center pb-20">
          <div className="order-2 lg:order-1">
            <p className="eyebrow text-sage mb-6">
              In-person therapy in Santa Monica & telehealth across California
            </p>

            <h1 className="serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[.91] tracking-[-.045em] max-w-4xl animate-fade-up">
              Anxiety & trauma therapy in Santa Monica, with space to breathe.
            </h1>

            <p className="mt-8 max-w-xl text-base md:text-lg leading-8 text-ink/70 animate-fade-up">
              Warm, collaborative therapy for adults navigating anxiety, panic,
              trauma, burnout, perfectionism, and the quiet exhaustion of always
              holding it together.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 bg-ink text-cream rounded-full px-6 py-4 text-sm font-semibold hover:bg-sage transition"
              >
                Book an appointment <ArrowRight size={16} />
              </a>

              <a
                href="#about"
                className="inline-flex items-center gap-2 px-4 py-4 text-sm font-semibold"
              >
                Meet Dr. Maya <ArrowRight size={16} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-7 text-xs text-ink/60">
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Santa Monica, CA
              </span>

              <span className="flex items-center gap-2">
                <Video size={14} /> Secure telehealth in California
              </span>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -top-10 -right-8 w-32 h-32 rounded-full bg-blush/50 blur-2xl" />

            <div className="relative ml-auto w-[min(100%,510px)]">
              <div className="aspect-[4/5] overflow-hidden rounded-t-[180px] rounded-b-[28px] shadow-soft">
                <Image
                  src="/images/maya.png"
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="absolute -bottom-7 -left-7 bg-cream border border-ink/10 rounded-2xl p-5 shadow-soft max-w-[230px]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-sage">
                  <Sparkles size={14} /> Grounded care
                </div>

                <p className="mt-2 serif text-lg leading-tight">
                  Practical tools with room for reflection, depth, and your own pace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 md:py-32">
        <div className="container-x grid lg:grid-cols-[.95fr_1.05fr] gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] shadow-soft animate-slide-up">
            <Image
              src="/images/office-1.png"
              alt="Calm therapy office with natural light and comfortable seating"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-sage">You are allowed to slow down</p>

            <h2 className="serif text-4xl md:text-6xl leading-[1.02] mt-5">
              You can be high-functioning and still be hurting.
            </h2>

            <p className="mt-7 text-ink/75 text-base md:text-lg leading-8">
              Dr. Maya Reynolds is a licensed clinical psychologist based in
              Santa Monica, California. She works with thoughtful, high-achieving
              adults who may look “fine” on the outside while feeling exhausted,
              stuck in overthinking, emotionally on edge, or disconnected from
              themselves.
            </p>

            <p className="mt-5 text-ink/75 text-base md:text-lg leading-8">
              Her work focuses on anxiety, panic, trauma, burnout, and
              perfectionism. Her warm, collaborative approach is structured
              enough to feel supportive while leaving space for reflection and
              depth.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b border-ink pb-2"
            >
              Let's talk about what you need <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section id="who" className="bg-sand py-24 md:py-32">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="eyebrow text-clay">Who I help</p>

            <h2 className="serif text-4xl md:text-6xl mt-5 leading-tight">
              You do not have to carry everything quietly.
            </h2>

            <p className="mt-6 text-ink/65 text-base md:text-lg leading-8 max-w-2xl">
              Therapy can be a place to understand what is happening beneath the
              surface, feel respected in the process, and find a way forward that
              is actually sustainable.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 border-y border-ink/15">
            {people.map((person, i) => (
              <article
                key={person.title}
                className="py-8 md:px-8 first:pl-0 md:border-l border-ink/15 first:border-l-0 last:pr-0"
              >
                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center text-clay font-semibold">
                  0{i + 1}
                </div>
                <h3 className="serif text-3xl mt-7 leading-tight md:min-h-[108px]">
                  {person.title}
                </h3>
                <p className="mt-4 text-ink/65 leading-7">
                  {person.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink text-cream">
        <div className="container-x">
          <div className="grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
            <div>
              <p className="eyebrow text-blush">Areas of focus</p>

              <h2 className="serif text-4xl md:text-6xl mt-5 leading-tight">
                Your story deserves to be understood, not rushed.
              </h2>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              {expertise.map(x => (
                <span
                  key={x}
                  className="rounded-full border border-cream/20 px-5 py-3 text-sm text-cream/80"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-x grid lg:grid-cols-[.9fr_1.1fr] gap-14 lg:gap-20 items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] animate-slide-up">
            <Image
              src="/images/office-2.png"
              alt="Quiet, uncluttered therapy room with comfortable seating and bookshelves"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="eyebrow text-sage">How I work</p>

            <h2 className="serif text-4xl md:text-6xl mt-5 leading-tight">
              Warm, collaborative, and grounded.
            </h2>

            <p className="mt-6 text-ink/70 text-base md:text-lg leading-8">
              Dr. Maya believes therapy works best when clients feel respected,
              understood, and actively involved. Sessions are structured enough
              to feel supportive while still leaving room for reflection and
              depth.
            </p>

            <p className="mt-5 text-ink/70 text-base md:text-lg leading-8">
              She integrates CBT, EMDR, mindfulness-based practices, and
              body-oriented techniques to help clients understand both the
              emotional and physiological sides of what they are experiencing.
            </p>

            <p className="mt-5 text-ink/70 text-base md:text-lg leading-8">
              Trauma work is paced carefully, with an emphasis on safety and
              stabilization not only during sessions, but in everyday life.
            </p>

            <a
              href="#services"
              className="mt-8 inline-flex items-center gap-3 bg-ink text-cream rounded-full px-6 py-4 text-sm font-semibold hover:bg-sage transition"
            >
              Explore the work <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

     
      <section id="services" className="bg-mist py-24 md:py-32">
      <div className="container-x">

    <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
      <div>
        <p className="eyebrow text-clay">How I can help</p>

        <h2 className="serif text-4xl md:text-5xl lg:text-6xl mt-5 leading-[1.05] max-w-2xl">
          Support for what you may have been carrying for a long time.
        </h2>
      </div>

      <div className="lg:pt-12">
        <p className="text-ink/65 text-base md:text-lg leading-8 max-w-xl">
          The goal is not simply symptom relief. Therapy can help you develop
          insight, resilience, and a stronger relationship with yourself over
          time.
        </p>
      </div>
    </div>

    <div className="mt-16 grid md:grid-cols-3 border-y border-ink/15">
      {services.map((service, i) => (
        <article
          key={service.title}
          className="flex flex-col min-h-[300px] py-8 md:px-8 border-b md:border-b-0 md:border-l border-ink/15 first:border-l-0 last:border-b-0"
        >
          <span className="text-xs text-sage font-bold">
            0{i + 1}
          </span>

          <h3 className="serif text-2xl md:text-3xl mt-6 leading-tight">
            {service.title}
          </h3>

          <p className="mt-4 text-ink/65 leading-7 max-w-sm">
            {service.copy}
          </p>

          <a
            href="#contact"
            className="mt-auto pt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.15em] text-clay"
          >
            Talk about this <ArrowRight size={14} />
          </a>
        </article>
      ))}
    </div>

  </div>
</section>

     
      <section id="office" className="py-24 md:py-36 bg-[#f0ece6]">
        <div className="container-x">
          <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-14 items-center">
            <div>
              <p className="eyebrow text-clay">Our office</p>

              <h2 className="serif text-5xl md:text-7xl leading-[.95] mt-5">
                A calm space for healing.
              </h2>

              <p className="mt-7 text-ink/70 text-base md:text-lg leading-8 max-w-xl">
                Dr. Maya's Santa Monica office is quiet, private, naturally lit,
                and intentionally uncluttered. The space is designed to feel
                grounding from the moment you arrive.
              </p>

              <div className="mt-8 grid sm:grid-cols-2 gap-3 text-sm">
                <div className="rounded-2xl bg-cream p-5">
                  <ShieldCheck size={18} className="text-clay" />
                  <p className="mt-3 font-semibold">Private & grounding</p>
                  <p className="text-ink/60 mt-1">
                    A comfortable environment with room to settle in.
                  </p>
                </div>

                <div className="rounded-2xl bg-cream p-5">
                  <Video size={18} className="text-clay" />
                  <p className="mt-3 font-semibold">In person or online</p>
                  <p className="text-ink/60 mt-1">
                    Santa Monica sessions or secure telehealth across CA.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-sm text-ink/60 flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                123th Street 45 W, Santa Monica, CA 90401
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] rounded-[26px] overflow-hidden mt-10 animate-slide-up">
                <Image
                  src="/images/office-1.png"
                  alt="Dr. Maya Reynolds therapy office seating area"
                  width={1500}
                  height={1125}
                  className="w-full h-full object-cover"
                />
              </div>

             <div className="aspect-[3/4] rounded-[26px] overflow-hidden animate-slide-up">
                <Image
                  src="/images/office-2.png"
                  alt="Dr. Maya Reynolds therapy office with bookshelf and natural light"
                  width={1500}
                  height={1125}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id="faq" className="py-24 md:py-36">
        <div className="container-x grid lg:grid-cols-[.7fr_1.3fr] gap-14">
          <div>
            <p className="eyebrow text-sage">FAQs</p>

            <h2 className="serif text-4xl md:text-6xl mt-5">
              You can start with a question.
            </h2>

            <p className="mt-6 text-ink/65 leading-7">
              If you are unsure whether therapy is right for you, reaching out
              can simply be the first conversation.
            </p>
          </div>

          <FAQ />
        </div>
      </section>

    
      <section id="contact" className="bg-mist py-24 md:py-32">
        <div className="container-x text-center">
          <p className="eyebrow text-sage">Schedule an appointment</p>

          <h2 className="serif text-5xl md:text-7xl max-w-4xl mx-auto mt-5 leading-[.98]">
            You do not have to keep holding everything together alone.
          </h2>

          <p className="max-w-xl mx-auto mt-7 text-ink/65 leading-7">
            If Dr. Maya's approach feels like a good fit, take the first step by
            reaching out. We can begin with a conversation about what support
            could look like.
          </p>

          <a
            href="#top"
            className="mt-9 inline-flex items-center gap-3 bg-ink text-cream rounded-full px-7 py-4 text-sm font-semibold hover:bg-sage transition"
          >
            Book a session <ArrowRight size={16} />
          </a>

          <div className="mt-6 flex flex-wrap justify-center gap-5 text-xs text-ink/50">
            <span>In-person in Santa Monica</span>
            <span>•</span>
            <span>Secure telehealth across California</span>
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream py-12">
        <div className="container-x grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="sm:col-span-2">
            <span className="serif text-3xl">Maya Reynolds</span>

            <p className="mt-3 text-sm text-cream/60 max-w-sm">
              Licensed Clinical Psychologist (Fictional Therapist) · Santa
              Monica, California
            </p>
          </div>

          <div>
            <p className="eyebrow text-blush">Navigate</p>

            <div className="mt-4 flex flex-col gap-2 text-sm text-cream/70">
              <a href="#about">About</a>
              <a href="#who">Who I Help</a>
              <a href="#services">Services</a>
              <a href="#office">Our Office</a>
              <a href="#faq">FAQs</a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-blush">Practice</p>

            <div className="mt-4 text-sm text-cream/70">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
              <p className="mt-3">
                In-person + secure telehealth across California
              </p>
            </div>
          </div>
        </div>

        <div className="container-x border-t border-cream/10 mt-10 pt-6 text-xs text-cream/40 flex flex-wrap justify-between gap-3">
          <span>© 2026 Dr. Maya Reynolds</span>
          <span>Therapist profile</span>
        </div>
      </footer>
    </main>
  );
}