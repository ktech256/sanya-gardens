import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { SectionHeading } from '@/components/SectionHeading';
import { services } from '@/data/services';
import { ServiceCard } from '@/components/ServiceCard';
import { Reveal } from '@/components/Reveal';
import { CTASection } from '@/components/CTASection';
import { TestimonialCard } from '@/components/TestimonialCard';

const testimonials = [
  { name: 'Lerato Mokoena', company: 'Family Visitor', rating: 5, text: 'Our picnic day at Sanya Gardens was peaceful, well-organized, and perfect for family bonding.' },
  { name: 'David Naidoo', company: 'School Coordinator', rating: 5, text: 'The school camp activities were educational, safe, and engaging for our learners.' },
  { name: 'Nombulelo Sithole', company: 'Community Group Leader', rating: 5, text: 'From birdwatching to stargazing, every activity was memorable and well facilitated.' }
];

export default function Home() {
  return (
    <div className="space-y-16 pb-10">
      <HeroSection
        title="Explore Nature, Culture & Outdoor Activities at Sanya Gardens"
        subtitle="Sanya Gardens offers memorable outdoor experiences including picnics, boot camping, school camps, sports, birdwatching, stargazing, and more."
        image="/images/elephant-hero.jpg"
        actions={
          <div className="flex flex-wrap gap-4">
            <Link href="/book-consultation" className="rounded-full bg-gold-metallic px-6 py-3 text-sm font-semibold text-olive-950">Book for Activities</Link>
            <Link href="/services" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white">View Activities</Link>
          </div>
        }
      />

      <Reveal>
        <SectionHeading eyebrow="Our activities" title="Outdoor experiences for every kind of visitor" description="Enjoy nature, recreation, learning, and cultural activities designed for families, schools, groups, and explorers." />
      </Reveal>

      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}>
            <ServiceCard service={service} />
          </Reveal>
        ))}
      </section>

      <Reveal>
        <SectionHeading eyebrow="Loved by visitors" title="Guest experiences at Sanya Gardens" />
      </Reveal>
      <section className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <Reveal key={testimonial.name}>
            <TestimonialCard {...testimonial} />
          </Reveal>
        ))}
      </section>

      <CTASection />
    </div>
  );
}
