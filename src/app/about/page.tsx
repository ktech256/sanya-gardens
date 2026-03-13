import Link from 'next/link';
import { GlassCard } from '@/components/GlassCard';
import { GradientBorder } from '@/components/GradientBorder';
import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-10">
      <HeroSection
        title="About Sanya Gardens"
        subtitle="Sanya Gardens is a nature-focused destination offering outdoor recreation, learning experiences, and cultural activities for visitors and communities."
        image="/images/elephant-hero.jpg"
      />

      <Reveal>
        <SectionHeading
          title="About Sanya Gardens"
          description="We welcome families, schools, youth groups, and visitors to enjoy nature through picnics, boot camping, school camps, sports, birdwatching, stargazing, and sustainability learning experiences."
        />
      </Reveal>

      <Reveal>
        <section className="space-y-6">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Vision and Mission"
            description="These principles guide how we host visitors, protect nature, and create meaningful experiences in every activity."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <GradientBorder>
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gold-500/80" />
                <h3 className="mb-3 text-xl font-semibold text-white">Vision</h3>
                <p className="text-olive-200">
                  “Our vision is to be a leading eco-friendly destination where people connect with nature, culture, learning, and wellness.”
                </p>
              </GlassCard>
            </GradientBorder>

            <GradientBorder>
              <GlassCard className="h-full p-6 md:p-7">
                <div className="mb-4 h-1.5 w-14 rounded-full bg-gold-500/80" />
                <h3 className="mb-3 text-xl font-semibold text-white">Mission</h3>
                <p className="text-olive-200">
                  “Our mission is to provide safe, enjoyable, and educational outdoor activities that promote environmental conservation, community connection, and sustainable living.”
                </p>
              </GlassCard>
            </GradientBorder>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <h3 className="mb-3 text-xl text-white">Values</h3>
          <ul className="space-y-2 text-olive-200">
            <li>• Respect for nature, biodiversity, and sustainability.</li>
            <li>• Safe, inclusive, and enjoyable visitor experiences.</li>
            <li>• Community engagement through recreation and learning.</li>
            <li>• Continuous improvement through data-driven insight.</li>
          </ul>
        </div>
      </Reveal>

      <Reveal>
        <SectionHeading
          title="Why choose Sanya Gardens"
          description="Visitors choose Sanya Gardens for our peaceful environment, diverse activities, and welcoming atmosphere. We provide safe, enjoyable, and meaningful experiences for families, schools, and groups."
        />
      </Reveal>
      <Link href="/book-consultation" className="inline-flex rounded-full bg-gold-metallic px-6 py-3 font-semibold text-olive-950">
        Book for Activities
      </Link>
    </div>
  );
}
