/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Zuniga's Plumbing Inc. — Optimized website template
 */

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  Phone,
  ShieldCheck,
  Star,
  Award,
  CheckCircle2,
  Menu,
  X,
  Clock,
  Wrench,
  Droplets,
  ChevronRight,
  ChevronDown,
  MapPin,
  Mail,
  Camera,
  Hammer,
  Gauge,
  Zap,
  Users,
  ClipboardCheck,
  Truck,
  ThumbsUp,
  AlertTriangle,
  BadgeCheck,
  DollarSign,
  Shield,
  HeartHandshake,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ========================================
// COMPANY CONFIG — change these to clone
// ========================================
const COMPANY_INFO = {
  name: "Zuniga's Plumbing Inc.",
  phone: "(773) 619-2730",
  email: "zunigaplumbing@yahoo.com",
  address: "7253 S. Green Street, Chicago, IL 60621",
  hours: "Mon-Fri: 8:00 AM - 5:00 PM",
  foundedYear: "2011",
  yearsInBusiness: "15+",
  jobsCompleted: "5,000+",
  avgResponse: "45 Min",
  googleRating: "4.9",
  reviewCount: "120+",
  googleReviewLink: "https://g.page/zunigasplumbing/review",
  city: "Chicago",
  region: "Chicago",
  serviceAreas: ['Chicago', 'Oak Park', 'Cicero', 'Berwyn', 'Evergreen Park', 'Oak Lawn', 'Burbank', 'Alsip'],
  licenses: {
    city: "058170465",
    state: "055031744"
  },
  promise: "On Time. Every Time.",
};

const REVIEWS = [
  { name: "James R.", location: "Oak Park", text: "Burst pipe at 1am, called Zuniga's and they were at my door by 1:45am. Fixed everything cleanly. Best response time I've ever seen.", date: "Oct 2024" },
  { name: "Maria T.", location: "Cicero", text: "Installed a tankless water heater. The team was incredibly clean, respectful, and explained everything clearly. Best experience in Chicago.", date: "Sep 2024" },
  { name: "Robert K.", location: "Berwyn", text: "Honest quote, fair price, showed up right on time. Fixed our main sewer line in one visit and cleaned up perfectly. Highly recommend.", date: "Aug 2024" },
  { name: "Maria G.", location: "Berwyn", text: "I had a leak behind my wall and dreading the repair. Zuniga's crew found it fast and fixed it the same day with no price surprises.", date: "Nov 2024" },
  { name: "Daniel S.", location: "Chicago", text: "Professional, punctual, and experts at what they do. Fixed our drain issue in no time at all. Definitely the best team in the city.", date: "Dec 2024" },
  { name: "Linda P.", location: "Oak Lawn", text: "Fantastic service! We needed an emergency fix on a Sunday and they were here within an hour. Excellent work and fair pricing.", date: "Jan 2025" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Scroll-driven video hero
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const videoOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const videoScale = useTransform(scrollYProgress, [0, 0.65], [1, 1.08]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 800));
    console.log('Form submitted:', data);
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen font-sans">
      <a href="#main-content" className="skip-link">Skip to main content</a>

      {/* ============================================ */}
      {/* EMERGENCY TOP BAR — Roto-Rooter pattern      */}
      {/* ============================================ */}
      <div className="bg-brand-dark text-white text-center py-2 text-xs sm:text-sm font-medium tracking-wide z-[60] relative">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-2">
          <AlertTriangle className="size-3.5 text-amber-400 shrink-0" aria-hidden="true" />
          <span>24/7 Emergency Service — <strong className="text-amber-400">{COMPANY_INFO.promise}</strong></span>
          <span className="hidden sm:inline text-white/40">|</span>
          <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="hidden sm:inline font-bold text-amber-400 hover:text-white transition-colors">
            Call {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5" style={{ top: '0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Zuniga's Plumbing Inc. – Water & Sewer Contractor"
                className="h-14 w-auto"
              />
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#how-it-works" className="text-sm font-medium hover:text-brand-blue transition-colors">How It Works</a>
              <a href="#services" className="text-sm font-medium hover:text-brand-blue transition-colors">Services</a>
              <a href="#about" className="text-sm font-medium hover:text-brand-blue transition-colors">About</a>
              <a href="#faq" className="text-sm font-medium hover:text-brand-blue transition-colors">FAQ</a>
              <a href="#contact" className="text-sm font-medium hover:text-brand-blue transition-colors">Contact</a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-2 bg-brand-blue text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all"
              >
                <Phone size={16} />
                {COMPANY_INFO.phone}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:outline-none cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-2xl font-serif">
              {['how-it-works','services','about','faq','contact'].map(s => (
                <a key={s} href={`#${s}`} onClick={() => setIsMenuOpen(false)} className="capitalize hover:text-brand-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded">
                  {s.replace('-', ' ')}
                </a>
              ))}
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="flex items-center justify-center gap-3 bg-brand-blue text-white py-4 rounded-2xl text-xl font-sans font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
              >
                <Phone aria-hidden="true" />
                Call Now — Free Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================ */}
      {/* STICKY MOBILE CTA — All top competitors      */}
      {/* ============================================ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-blue/95 backdrop-blur-md border-t border-white/10 p-3 safe-area-bottom">
        <a
          href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
          className="flex items-center justify-center gap-3 bg-white text-brand-dark py-4 rounded-2xl text-lg font-bold shadow-xl active:scale-[0.98] transition-transform"
        >
          <Phone className="size-5 animate-pulse" aria-hidden="true" />
          Call Now — {COMPANY_INFO.promise}
        </a>
      </div>

      {/* Hero Section */}
      <main id="main-content">
        <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center pt-20">
          {/* Scroll-driven video background */}
          <motion.div
            className="absolute inset-0 z-0"
            style={{ opacity: videoOpacity, scale: videoScale }}
          >
            <video
              className="w-full h-full object-cover"
              src="/plumbing-transition.mp4"
              autoPlay
              muted
              playsInline
              loop={false}
              preload="auto"
              poster=""
              aria-hidden="true"
              onEnded={(e) => {
                const v = e.currentTarget;
                v.currentTime = v.duration;
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/45 md:to-transparent"
              initial={{ opacity: 0.35 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0, duration: 1.5 }}
            />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-white space-y-8">
                {/* Promise badge — inspired by Benjamin Franklin's memorable hook */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-400/30 px-4 py-2 rounded-full"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Zap className="size-3.5 text-amber-400" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">{COMPANY_INFO.promise}</span>
                </motion.div>

                <motion.h1
                  className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter"
                  initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{ delay: 1.0, duration: 1.2, ease: "easeOut" }}
                >
                  Chicago's <br />
                  Most <br />
                  <span className="italic text-brand-blue">Trusted</span> Plumber
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl text-white/70 max-w-lg font-light leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 3.5, duration: 1.0 }}
                >
                  Burst pipe at 2 AM? We'll be there in 45 minutes — guaranteed. Upfront flat-rate pricing, no overtime charges, no surprise fees. Ever. Rated {COMPANY_INFO.googleRating}★ across {COMPANY_INFO.reviewCount} Google reviews.
                </motion.p>

                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4.0, duration: 0.8 }}
                >
                  <a
                    href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                    className="group flex items-center justify-center gap-3 bg-white text-brand-dark px-8 py-5 rounded-full text-lg font-bold hover:bg-brand-blue hover:text-white transition-all transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white motion-reduce:hover:scale-100"
                    aria-label={`Call us at ${COMPANY_INFO.phone}`}
                  >
                    <Phone className="group-hover:animate-bounce motion-reduce:group-hover:animate-none" aria-hidden="true" />
                    Call Now — Free Estimate
                  </a>
                  <a href="#contact" className="flex items-center justify-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium underline underline-offset-4">
                    Or Let Us Call You
                  </a>
                </motion.div>
              </div>

              {/* Estimate Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 3.5,
                  duration: 2.0,
                  ease: "easeOut"
                }}
                className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-3xl shadow-2xl max-w-md ml-auto"
              >
                <h3 className="text-2xl font-serif text-white mb-2" id="estimate-form-title">Get Your Free Estimate</h3>
                <p className="text-white/50 text-sm mb-6">We'll call you back within 15 minutes. Upfront pricing — no obligation.</p>
                {submitted ? (
                  <div role="status" aria-live="polite" className="py-8 text-center space-y-3">
                    <CheckCircle2 className="mx-auto text-emerald-400 size-12" aria-hidden="true" />
                    <p className="text-white font-bold text-lg">We're on it!</p>
                    <p className="text-white/70 text-sm">A Zuniga's technician will call you back within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" aria-labelledby="estimate-form-title" noValidate>
                    <div>
                      <label htmlFor="form-name" className="sr-only">Your Name</label>
                      <input
                        id="form-name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your Name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        className={cn(
                          "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors",
                          errors.name ? 'border-red-400' : 'border-white/10'
                        )}
                      />
                      {errors.name && <p role="alert" className="mt-1 text-xs text-red-400">{String(errors.name.message)}</p>}
                    </div>
                    <div>
                      <label htmlFor="form-phone" className="sr-only">Phone Number</label>
                      <input
                        id="form-phone"
                        {...register('phone', { required: 'Phone number is required' })}
                        placeholder="Phone Number"
                        type="tel"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        className={cn(
                          "w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors",
                          errors.phone ? 'border-red-400' : 'border-white/10'
                        )}
                      />
                      {errors.phone && <p role="alert" className="mt-1 text-xs text-red-400">{String(errors.phone.message)}</p>}
                    </div>
                    <div>
                      <label htmlFor="form-service" className="sr-only">Select a Service</label>
                      <select
                        id="form-service"
                        {...register('service', { required: 'Please select a service' })}
                        aria-required="true"
                        aria-invalid={!!errors.service}
                        className={cn(
                          "w-full bg-white/5 border rounded-xl px-4 py-3 text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors appearance-none cursor-pointer",
                          errors.service ? 'border-red-400' : 'border-white/10'
                        )}
                      >
                        <option value="" className="bg-brand-dark">What Do You Need Help With?</option>
                        <option value="emergency" className="bg-brand-dark">Emergency — I Need Help Now</option>
                        <option value="drain" className="bg-brand-dark">Drain Cleaning</option>
                        <option value="water-heater" className="bg-brand-dark">Water Heater</option>
                        <option value="sewer" className="bg-brand-dark">Sewer Line</option>
                        <option value="gas" className="bg-brand-dark">Gas Line</option>
                        <option value="remodel" className="bg-brand-dark">Bathroom Remodel</option>
                        <option value="other" className="bg-brand-dark">Other</option>
                      </select>
                      {errors.service && <p role="alert" className="mt-1 text-xs text-red-400">{String(errors.service.message)}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                    >
                      {isSubmitting ? 'Submitting…' : 'Get My Free Estimate →'}
                    </button>
                    <p className="text-[10px] text-white/40 text-center">No spam. No obligation. Upfront pricing guaranteed.</p>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SOCIAL PROOF STRIP — Google/Yelp logos        */}
        {/* All 5 competitors display this prominently   */}
        {/* ============================================ */}
        <div className="bg-white border-y border-black/5 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Google Rating */}
              <a href={COMPANY_INFO.googleReviewLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <svg className="size-7" viewBox="0 0 24 24" aria-label="Google"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                <div className="flex flex-col">
                  <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}</div>
                  <span className="text-[11px] font-bold text-black/40">{COMPANY_INFO.googleRating}/5 ({COMPANY_INFO.reviewCount} Reviews)</span>
                </div>
              </a>

              <div className="h-8 w-px bg-black/10 hidden md:block" />

              {/* Trust badges inline */}
              <div className="flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-black/30">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-brand-blue" />
                  <span>Licensed & Insured</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="size-4 text-brand-blue" />
                  <span>Flat-Rate Pricing</span>
                </div>
                <div className="flex items-center gap-2 hidden sm:flex">
                  <Clock className="size-4 text-brand-blue" />
                  <span>45-Min Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Bar — Stats */}
        <div className="bg-white border-b border-black/5 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {[
                { icon: <Clock className="text-brand-blue size-8" />, value: COMPANY_INFO.avgResponse, label: 'Avg. Response Time' },
                { icon: <Users className="text-brand-blue size-8" />, value: COMPANY_INFO.jobsCompleted, label: 'Jobs Completed' },
                { icon: <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} size={16} className="fill-brand-blue text-brand-blue" />)}</div>, value: `${COMPANY_INFO.googleRating}/5`, label: `Google Rating (${COMPANY_INFO.reviewCount} Reviews)` },
                { icon: <Award className="text-brand-blue size-8" />, value: COMPANY_INFO.yearsInBusiness, label: `Years Serving ${COMPANY_INFO.city}` },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-2">
                  {item.icon}
                  <span className="text-2xl font-bold">{item.value}</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-black/40">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <section id="how-it-works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Fixed in 3 Simple Steps</h2>
              <p className="text-black/40 max-w-2xl mx-auto">No runaround. No waiting days. Here's exactly what happens when you call.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-16 left-[16.67%] right-[16.67%] h-0.5 bg-brand-blue/20" />
              {[
                { step: '01', title: 'You Call. We Answer.', desc: 'Reach a real person — not a call center. We give you an upfront flat-rate quote on the spot. No hidden fees. No guesswork.', icon: <Phone className="size-6" /> },
                { step: '02', title: 'We Arrive in 45 Min', desc: 'A licensed, uniformed technician pulls up within 45 minutes — day or night, weekends and holidays included. On time, every time.', icon: <Truck className="size-6" /> },
                { step: '03', title: 'Fixed Right. Guaranteed.', desc: "We fix it right the first time, clean up like we were never there, and back every job with a 100% satisfaction guarantee.", icon: <ThumbsUp className="size-6" /> },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="text-center relative">
                  <div className="bg-brand-blue size-14 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white relative z-10">{item.icon}</div>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue mb-2 block">Step {item.step}</span>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-black/50 text-sm leading-relaxed max-w-sm mx-auto">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* WHY CHOOSE US — Differentiator section       */}
        {/* Every top competitor has clear positioning    */}
        {/* ============================================ */}
        <section className="py-24 bg-brand-dark text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 bg-brand-blue/20 px-4 py-2 rounded-full">
                <HeartHandshake className="size-3.5 text-brand-blue" aria-hidden="true" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">The Zuniga's Difference</span>
              </div>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Why Chicago Homeowners <br /><span className="text-brand-blue italic">Choose Us.</span></h2>
              <p className="text-white/40 max-w-2xl mx-auto">We didn't become Chicago's highest-rated plumber by accident. Here's what sets us apart.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <DollarSign className="size-6" />,
                  title: 'Upfront Flat-Rate Pricing',
                  desc: 'You know the price before we start. No hourly rates, no surprise add-ons, no overtime charges. The price we quote is the price you pay.',
                  highlight: 'No Surprise Fees'
                },
                {
                  icon: <Clock className="size-6" />,
                  title: 'On Time. Every Time.',
                  desc: 'We commit to a 45-minute arrival window and we take it seriously. Our trucks are stationed across Chicago so a licensed technician is always nearby — day or night.',
                  highlight: '45-Min Response'
                },
                {
                  icon: <Shield className="size-6" />,
                  title: '100% Satisfaction Guarantee',
                  desc: 'Not happy? We come back and make it right at no extra charge. We stand behind every single job — no exceptions.',
                  highlight: 'Risk-Free'
                },
                {
                  icon: <BadgeCheck className="size-6" />,
                  title: 'Licensed Master Plumbers',
                  desc: `City License #${COMPANY_INFO.licenses.city}. State License #${COMPANY_INFO.licenses.state}. Fully bonded and insured. Background-checked technicians you can trust in your home.`,
                  highlight: 'Fully Credentialed'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-brand-blue/20 size-12 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-colors">{item.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400">{item.highlight}</span>
                  </div>
                  <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">What We Fix</h2>
              <p className="text-black/40 max-w-2xl mx-auto">From midnight emergencies to weekend remodels — if water runs through it, we handle it.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Emergency Plumbing', desc: 'Flooding doesn\'t wait. Neither do we. On-call 24/7/365 with a guaranteed 45-minute response — nights, weekends, and holidays. No overtime charges.', icon: <Wrench className="size-6" />, tag: '24/7 — No Overtime' },
                { title: 'Drain Cleaning', desc: 'Slow drain? Standing water? We clear stubborn blockages in sinks, showers, tubs, and main sewer lines using professional-grade equipment. Most clogs cleared in one visit.', icon: <Droplets className="size-6" />, tag: 'Same-Day Service' },
                { title: 'Water Heaters', desc: 'Cold shower this morning? We repair and install all major brands — traditional tanks and tankless systems. Same-day diagnosis, transparent pricing, fast installation.', icon: <Gauge className="size-6" />, tag: 'All Major Brands' },
                { title: 'Bathroom Remodeling', desc: 'Upgrading your bathroom? Our licensed team handles complete plumbing rough-ins, fixture installations, and full remodel plumbing from start to finish.', icon: <Hammer className="size-6" />, tag: 'Free Consultation' },
                { title: 'Sewer & Gas Lines', desc: 'Sewer backup or gas smell? We deploy camera inspections to find the problem fast, then repair or replace the line — often in a single visit. Licensed for gas work.', icon: <Camera className="size-6" />, tag: 'Camera Inspection' },
                { title: 'Leak Detection & Repair', desc: 'Hidden leaks destroy homes silently. We use electronic detection equipment to pinpoint leaks behind walls and under slabs — no unnecessary demolition.', icon: <AlertTriangle className="size-6" />, tag: 'Non-Invasive' },
              ].map((service, i) => (
                <div key={i} className="bg-white p-10 rounded-3xl border border-black/5 hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-zinc-100 size-12 rounded-2xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">{service.icon}</div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/5 px-3 py-1 rounded-full">{service.tag}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-black/50 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm cursor-pointer hover:gap-3 transition-all">Book This Service <ChevronRight size={16} /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid-Page Emergency CTA Band — Roto-Rooter urgency style */}
        <section className="py-16 bg-gradient-to-r from-brand-blue via-brand-blue to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 size-80 bg-white rounded-full blur-3xl" />
            <div className="absolute -left-20 -bottom-20 size-60 bg-white rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <AlertTriangle className="size-6 text-amber-300" aria-hidden="true" />
              <span className="text-sm font-bold uppercase tracking-widest text-amber-300">Plumbing Emergency?</span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl mb-4">Don't Wait. We're Already on the Way.</h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">Our trucks are stationed across Chicago. Flat-rate pricing — same cost days, nights, weekends, and holidays. No overtime. Ever.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-3 bg-white text-brand-blue px-10 py-5 rounded-full text-xl font-bold hover:bg-brand-dark hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
              >
                <Phone aria-hidden="true" />
                {COMPANY_INFO.phone}
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-5 rounded-full font-bold hover:bg-white/10 transition-all">
                Request a Callback
              </a>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-24 bg-white overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50/30 to-white pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 text-center md:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full">
                  <Star className="size-3.5 text-brand-blue fill-brand-blue" aria-hidden="true" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue">Trusted by Thousands</span>
                </div>
                <h2 className="font-serif text-5xl md:text-7xl tracking-tight">Chicago's Five-Star <br /><span className="text-brand-blue italic">Standard.</span></h2>
                <p className="text-black/40 max-w-xl text-lg">{COMPANY_INFO.reviewCount} Verified Reviews across Google, Yelp & Angi.</p>
              </div>
              <a href={COMPANY_INFO.googleReviewLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-6 bg-white/50 backdrop-blur-md px-8 py-5 rounded-3xl border border-black/5 hover:border-brand-blue/30 transition-all hover:shadow-xl group">
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="flex gap-0.5">{[...Array(5)].map((_,i)=><Star key={i} size={20} className="fill-brand-blue text-brand-blue" />)}</div>
                  <p className="text-black/40 text-[10px] font-bold uppercase tracking-widest">Google Rating</p>
                </div>
                <div className="h-10 w-px bg-black/5" />
                <span className="font-serif text-3xl font-bold italic">{COMPANY_INFO.googleRating}</span>
              </a>
            </div>
          </div>

          {/* Infinite Marquee Container */}
          <div className="relative flex flex-col gap-8 max-w-[100vw]">
            <div className="flex overflow-hidden group/marquee border-y border-black/5 bg-zinc-50/50 py-12">
              <motion.div
                className="flex gap-8 whitespace-nowrap px-8"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="w-[400px] shrink-0 bg-white/60 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/40 shadow-sm flex flex-col justify-between whitespace-normal group"
                  >
                    <div>
                      <div className="flex gap-0.5 mb-8">
                        {[...Array(5)].map((_,j)=><Star key={j} size={14} className="fill-brand-blue text-brand-blue" />)}
                      </div>
                      <p className="text-lg leading-relaxed text-black/70 italic font-serif opacity-90 group-hover:opacity-100 transition-opacity">
                        "{review.text}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-8 mt-8 border-t border-black/5">
                      <div className="flex items-center gap-4">
                        <div className="bg-brand-blue/10 size-12 rounded-2xl flex items-center justify-center text-brand-blue font-bold text-lg font-serif">
                          {review.name[0]}
                        </div>
                        <div>
                          <h5 className="font-bold text-base leading-tight">{review.name}</h5>
                          <p className="text-xs text-black/40 font-medium tracking-wide uppercase">{review.location}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-black/20">{review.date}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* CTA Link below marquee */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12">
              <p className="text-black/30 text-sm font-medium">
                Want to see more? <a href={COMPANY_INFO.googleReviewLink} className="text-brand-blue underline underline-offset-4 hover:text-brand-dark transition-colors">Read all {COMPANY_INFO.reviewCount} reviews on Google</a>
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/plumber-about.png"
                    alt="Zuniga's Plumbing technician at work"
                    className="w-full h-full object-cover"
                    width="1000" height="1000" loading="lazy" referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 bg-brand-blue text-white p-8 rounded-3xl shadow-xl hidden md:block max-w-[240px]">
                  <p className="text-3xl font-serif font-bold mb-2">{COMPANY_INFO.jobsCompleted}</p>
                  <p className="text-sm font-medium opacity-80">Jobs completed across Chicago since {COMPANY_INFO.foundedYear}.</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-brand-blue/10 px-4 py-2 rounded-full">
                    <ShieldCheck className="size-4 text-brand-blue" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-blue">Family-Owned Since {COMPANY_INFO.foundedYear}</span>
                  </div>
                  <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Your Price Is Your Price. <br /><span className="text-brand-blue italic">Period.</span></h2>
                  <p className="text-lg text-black/60 leading-relaxed">
                    We started {COMPANY_INFO.name} with a simple idea: Chicago homeowners deserve a plumber who shows up on time, tells the truth about what's broken, and charges a fair price. {COMPANY_INFO.yearsInBusiness} years and {COMPANY_INFO.jobsCompleted} jobs later, that's still how we operate — every single day.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <div className="bg-brand-blue/10 size-10 rounded-xl flex items-center justify-center text-brand-blue"><ClipboardCheck size={20} /></div>
                    <h4 className="font-bold">Price-Match Guarantee</h4>
                    <p className="text-sm text-black/50">Got a written quote from another plumber? Show us and we'll match or beat it. That's a promise.</p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-brand-blue/10 size-10 rounded-xl flex items-center justify-center text-brand-blue"><Clock size={20} /></div>
                    <h4 className="font-bold">No Overtime Charges</h4>
                    <p className="text-sm text-black/50">2 AM on a holiday? Same flat rate as a Tuesday afternoon. We never charge more because the timing is inconvenient.</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5">
                  <p className="text-black/40 text-sm italic">"We treat every home like it's our own. That means clean boots, honest answers, and a price you agreed to before we pick up a wrench."</p>
                  <p className="mt-4 font-bold text-sm">— The Zuniga Family</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SERVICE AREAS — prominent like Roto-Rooter   */}
        {/* ============================================ */}
        <section className="py-16 bg-zinc-50 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex items-center gap-3 shrink-0">
                <MapPin className="size-6 text-brand-blue" />
                <h3 className="font-serif text-2xl font-bold">Areas We Serve</h3>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                {COMPANY_INFO.serviceAreas.map((area) => (
                  <span key={area} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-black/60 border border-black/5">
                    {area}
                  </span>
                ))}
                <span className="bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold border border-brand-blue/20">
                  + All Chicagoland
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight">Common Questions</h2>
              <p className="text-black/40">Quick answers to the questions we hear most from Chicago homeowners.</p>
            </div>
            <div className="space-y-4">
              {[
                { q: "How fast can you get to my home?", a: `Our average response time is 45 minutes. We keep trucks stationed throughout Chicago, Oak Park, Cicero, and surrounding suburbs so a licensed technician is always nearby — even on nights, weekends, and holidays.` },
                { q: "Do you charge overtime for nights and weekends?", a: "Never. We use upfront flat-rate pricing so the price is the same whether it's 2 PM on a Tuesday or 2 AM on Christmas morning. The quote we give is the quote you pay — no hourly rates, no surprise add-ons." },
                { q: "Do you charge for estimates?", a: "No — every estimate is completely free with no obligation. We assess the situation, explain the issue clearly, and give you a firm price before any work begins." },
                { q: "Are you licensed and insured?", a: `Absolutely. We carry a City of Chicago Plumbing License (${COMPANY_INFO.licenses.city}) and a State of Illinois License (${COMPANY_INFO.licenses.state}). We're fully bonded and insured, and every technician is background-checked.` },
                { q: "What areas do you serve?", a: `We serve Chicago and all surrounding communities including Oak Park, Cicero, Berwyn, Evergreen Park, Oak Lawn, Burbank, Alsip, and more. If you're in the Chicagoland area, call us — we almost certainly cover your neighborhood.` },
                { q: "Do you offer financing?", a: "Yes — for larger projects like sewer line replacements or full bathroom remodels, we offer flexible payment plans. Ask our team when you call and we'll find an option that works for your budget." },
                { q: "What if I'm not satisfied with the work?", a: "We stand behind every job with a 100% satisfaction guarantee. If anything isn't right, call us and we'll come back and fix it at no additional charge. No fine print, no runaround." },
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-50 rounded-2xl border border-black/5 overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-zinc-100/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-blue" aria-expanded={openFaq === i}>
                    <span className="font-bold text-base pr-4">{faq.q}</span>
                    <ChevronDown className={cn("size-5 text-black/30 transition-transform flex-shrink-0", openFaq === i && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                        <p className="px-6 pb-6 text-black/50 leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div className="space-y-8">
                <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Talk to a Real Person. <br /><span className="text-brand-blue italic">Right Now.</span></h2>
                <p className="text-black/50 text-lg">No call centers. No phone trees. When you call Zuniga's, a real member of our team picks up — day or night.</p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue" aria-hidden="true"><MapPin size={24} /></div>
                    <div><h5 className="font-bold">Our Base</h5><p className="text-black/50">{COMPANY_INFO.address}</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue" aria-hidden="true"><Phone size={24} /></div>
                    <div><h5 className="font-bold">Phone</h5>
                      <a href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`} className="text-brand-blue font-bold text-lg hover:text-brand-dark transition-colors" aria-label={`Call us at ${COMPANY_INFO.phone}`}>{COMPANY_INFO.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue" aria-hidden="true"><Mail size={24} /></div>
                    <div><h5 className="font-bold">Email</h5>
                      <a href={`mailto:${COMPANY_INFO.email}`} className="text-black/50 hover:text-brand-blue transition-colors">{COMPANY_INFO.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-blue/10 p-3 rounded-xl text-brand-blue" aria-hidden="true"><Clock size={24} /></div>
                    <div><h5 className="font-bold">Business Hours</h5><p className="text-black/50">{COMPANY_INFO.hours}</p><p className="text-brand-blue font-bold text-sm">Emergency: 24/7/365</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-black/5 shadow-sm">
                <h3 className="text-2xl font-serif mb-2">Let Us Call You</h3>
                <p className="text-black/40 text-sm mb-8">Fill this out and we'll call you back within 15 minutes. No spam, no obligation.</p>
                {submitted ? (
                  <div role="status" aria-live="polite" className="py-12 text-center space-y-3">
                    <CheckCircle2 className="mx-auto text-emerald-500 size-12" aria-hidden="true" />
                    <p className="font-bold text-lg">We're on it!</p>
                    <p className="text-black/50 text-sm">A Zuniga's team member will call you within 15 minutes.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                    <div>
                      <label htmlFor="contact-name" className="sr-only">Your Name</label>
                      <input
                        id="contact-name"
                        {...register('name', { required: 'Name is required' })}
                        placeholder="Your Name"
                        autoComplete="name"
                        aria-required="true"
                        aria-invalid={!!errors.name}
                        className={cn(
                          "w-full border rounded-xl px-4 py-3 text-brand-dark placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors",
                          errors.name ? 'border-red-400' : 'border-black/10'
                        )}
                      />
                      {errors.name && <p role="alert" className="mt-1 text-xs text-red-500">{String(errors.name.message)}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-phone" className="sr-only">Phone Number</label>
                      <input
                        id="contact-phone"
                        {...register('phone', { required: 'Phone number is required' })}
                        placeholder="Phone Number"
                        type="tel"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={!!errors.phone}
                        className={cn(
                          "w-full border rounded-xl px-4 py-3 text-brand-dark placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors",
                          errors.phone ? 'border-red-400' : 'border-black/10'
                        )}
                      />
                      {errors.phone && <p role="alert" className="mt-1 text-xs text-red-500">{String(errors.phone.message)}</p>}
                    </div>
                    <div>
                      <label htmlFor="contact-service" className="sr-only">What do you need help with?</label>
                      <select
                        id="contact-service"
                        {...register('service', { required: 'Please select a service' })}
                        aria-required="true"
                        aria-invalid={!!errors.service}
                        className={cn(
                          "w-full border rounded-xl px-4 py-3 text-black/40 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors appearance-none cursor-pointer",
                          errors.service ? 'border-red-400' : 'border-black/10'
                        )}
                      >
                        <option value="">What Do You Need Help With?</option>
                        <option value="emergency">Emergency — I Need Help Now</option>
                        <option value="drain">Drain Cleaning</option>
                        <option value="water-heater">Water Heater</option>
                        <option value="sewer">Sewer Line</option>
                        <option value="gas">Gas Line</option>
                        <option value="remodel">Bathroom Remodel</option>
                        <option value="other">Other</option>
                      </select>
                      {errors.service && <p role="alert" className="mt-1 text-xs text-red-500">{String(errors.service.message)}</p>}
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      aria-busy={isSubmitting}
                      className="w-full bg-brand-blue text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-brand-blue/20 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                    >
                      {isSubmitting ? 'Submitting…' : 'Get My Free Estimate →'}
                    </button>
                    <p className="text-[10px] text-black/30 text-center">No spam. No obligation. Upfront pricing guaranteed.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-brand-dark text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <Droplets className="size-[600px] -mr-40 -mt-20" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
                Every minute counts <br />
                when <span className="italic text-brand-blue">pipes burst.</span>
              </h2>
              <p className="text-xl text-white/60 mb-4 font-light">
                Flat-rate pricing. 45-minute response. No overtime charges. No surprise fees. {COMPANY_INFO.promise}
              </p>
              <p className="text-lg text-white/40 mb-12">Serving all of Chicagoland — 24 hours a day, 7 days a week, 365 days a year.</p>
              <div className="flex flex-wrap gap-6">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\D/g, '')}`}
                  className="bg-brand-blue text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-blue-700 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-blue"
                  aria-label={`Call us at ${COMPANY_INFO.phone}`}
                >
                  Call {COMPANY_INFO.phone}
                </a>
                <a href="#services" className="border border-white/20 text-white px-10 py-5 rounded-full text-xl font-bold hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white">View Services</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-black/5 py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="bg-brand-blue size-8 rounded-lg flex items-center justify-center" aria-hidden="true">
                <Droplets className="size-5 text-white" />
              </div>
              <span className="font-serif text-lg font-bold">{COMPANY_INFO.name}</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-black/40">
              <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
              <a href="#contact" className="hover:text-brand-blue transition-colors">Contact</a>
            </div>
            <p className="text-sm text-black/40 text-center md:text-right">
              Proudly serving Chicago &amp; surrounding communities since {COMPANY_INFO.foundedYear}. <br className="hidden md:block" />
              © 2026 {COMPANY_INFO.name}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
