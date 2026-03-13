import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { howWeWorkSteps, services, serviceBySlug } from '@/data/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = serviceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-12 pb-10">
      <HeroSection title={service.title} subtitle={service.summary} image={service.heroImage} />

      <Reveal>
        <section className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">About this activity</h2>
          <p className="text-olive-200">{service.intro}</p>
        </section>
      </Reveal>

      <Reveal>
        <section>
          <h3 className="mb-4 text-2xl font-semibold text-white">Activity highlights</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {service.subServices.map((subService) => (
              <article key={subService.title} className="rounded-2xl border border-white/10 bg-olive-900/65 p-5">
                <h4 className="mb-3 text-lg font-semibold text-white">{subService.title}</h4>
                <p className="text-sm leading-relaxed text-olive-200">{subService.description}</p>
                {subService.deliverables?.length ? (
                  <ul className="mt-3 space-y-1.5 text-sm text-olive-200">
                    {subService.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="grid gap-6 lg:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-2xl font-semibold text-white">What visitors gain</h3>
            <ul className="space-y-2 text-olive-200">
              {service.typicalOutcomes.map((outcome) => (
                <li key={outcome} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
            <h3 className="mb-4 text-2xl font-semibold text-white">How activities work</h3>
            <div className="space-y-4">
              {howWeWorkSteps.map((step, index) => (
                <div key={step.title} className="rounded-xl border border-white/10 bg-olive-900/60 p-4">
                  <p className="mb-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold-400">
                    Step {index + 1}: {step.title}
                  </p>
                  <p className="text-sm text-olive-200">{step.description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </Reveal>

      <Reveal>
        <section className="rounded-2xl border border-gold-500/30 bg-gradient-to-r from-olive-900/90 via-forest-900/80 to-gold-600/20 p-6 md:p-8">
          <h3 className="mb-2 text-2xl font-semibold text-white">Ready to get started?</h3>
          <p className="mb-5 max-w-3xl text-olive-100">
            Contact Sanya Gardens to plan your visit and choose the activities that best suit your group or occasion.
          </p>
          <Link
            href={`/book-consultation?service=${encodeURIComponent(service.title)}`}
            className="inline-flex rounded-full bg-gold-metallic px-6 py-3 font-semibold text-olive-950 transition hover:opacity-90"
          >
            Book This Activity
          </Link>
        </section>
      </Reveal>
    </div>
  );
}
