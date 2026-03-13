import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ServiceCard } from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function ServicesPage() {
  return (
    <div className="space-y-12 pb-10">
      <HeroSection
        title="Explore Activities at Sanya Gardens"
        subtitle="Discover eleven outdoor, educational, wellness, and cultural activities designed for families, schools, groups, and nature enthusiasts."
        image="/images/service-afs.jpg"
      />
      <Reveal>
        <SectionHeading title="Our Activities" description="Choose from relaxing, recreational, educational, and nature-based experiences across the garden." />
      </Reveal>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <Reveal key={service.slug}><ServiceCard service={service} /></Reveal>
        ))}
      </section>
    </div>
  );
}
