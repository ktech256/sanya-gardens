import { HeroSection } from '@/components/HeroSection';
import { Reveal } from '@/components/Reveal';
import { TestimonialCard } from '@/components/TestimonialCard';

const reviews = [
  {
    name: 'Sibusiso Dlamini',
    company: 'Weekend Visitor',
    rating: 5,
    text: 'The picnic spaces are beautiful and the environment is very relaxing for family visits.'
  },
  {
    name: 'Anika Patel',
    company: 'School Trip Organizer',
    rating: 5,
    text: 'Our students loved the school camp and nature-learning sessions.'
  },
  {
    name: 'Thabo Maseko',
    company: 'Youth Group Mentor',
    rating: 5,
    text: 'Boot camping activities helped our youth build teamwork and confidence.'
  },
  {
    name: 'Chanté van Rensburg',
    company: 'Nature Enthusiast',
    rating: 5,
    text: 'Birdwatching and walking trails made our visit calm, refreshing, and educational.'
  },
  {
    name: 'Mpho Nkosi',
    company: 'Community Visitor',
    rating: 5,
    text: 'The Nyama Choma and volleyball activities made our group event truly enjoyable.'
  }
];

export default function ReviewsPage() {
  return (
    <div className="space-y-10 pb-10">
      <HeroSection
        title="Client Reviews"
        subtitle="Visitors and groups enjoy Sanya Gardens for memorable, safe, and nature-rich activity experiences."
        image="/images/service-tax.jpg"
      />
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <Reveal key={review.name}>
            <TestimonialCard {...review} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
