import { HeroSection } from '@/components/HeroSection';
import { ConsultationForm } from '@/components/ConsultationForm';
import { SocialLinks } from '@/components/SocialLinks';

export default function ContactPage() {
  return (
    <div className="space-y-10 pb-10">
      <HeroSection
        title="Contact Sanya Gardens"
        subtitle="Reach our team to plan visits, group bookings, school activities, and outdoor experiences at Sanya Gardens."
        image="/images/service-accounting.jpg"
      />
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
          <ConsultationForm />
        </section>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-olive-200">
            <h3 className="mb-4 text-xl font-semibold text-white">Contact details</h3>
            <p>Contact Numbers: +256 784 549 102 / +254 769 016 574</p>
            <p>+256 772 88 4321 [WhatsApp Number]</p>
            <p>Address: Buhula Rd, Lutolo, Banda</p>
            <p>Namayingo District</p>
            <p>Website: www.sanyagardens.co.ug</p>
            <p>Contact Email: harrietyogasanya@gmail.com</p>
            <p>Email: info@sanyagardens.co.ug</p>
            <p className="mb-3 mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-500">Connect with us</p>
            <SocialLinks iconSizeClass="h-12 w-12 md:h-14 md:w-14" />
          </div>
          <div className="relative h-64 rounded-2xl border border-white/10 bg-gradient-to-br from-forest-800 to-gold-600/30 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-gold-500">Map Placeholder</p>
            <p className="mt-2 text-olive-200">Buhula Rd, Lutolo, Banda, Namayingo District</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
