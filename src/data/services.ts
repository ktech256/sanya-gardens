export type ServiceSubService = {
  title: string;
  description: string;
  deliverables?: string[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  cardImage: string;
  intro: string;
  subServices: ServiceSubService[];
  typicalOutcomes: string[];
};

const HOW_WE_WORK_STEPS = [
  {
    title: 'Welcome & Orientation',
    description:
      'Visitors receive a short orientation on garden etiquette, safety, and activity zones before starting their selected activity.'
  },
  {
    title: 'Guided or Self-led Experience',
    description:
      'Activities can be enjoyed independently or with facilitation depending on the type of visit, group size, and learning goals.'
  },
  {
    title: 'Nature-Friendly Participation',
    description:
      'Guests are encouraged to protect biodiversity, dispose of waste responsibly, and respect plant and wildlife habitats throughout the visit.'
  },
  {
    title: 'Reflection & Community',
    description:
      'Each experience is designed to promote connection, wellbeing, and practical learning through shared moments in nature.'
  }
] as const;

const IMG = '/images/elephant-hero.jpg';

export const services: Service[] = [
  {
    slug: 'picnics',
    title: 'Picnics',
    summary: 'A relaxing outdoor dining experience for families, friends, and groups in peaceful natural surroundings.',
    heroImage: '/images/elephant-hero.jpg',
    cardImage: '/images/elephant-hero.jpg',
    intro:
      'Picnics at Sanya Gardens offer visitors a relaxing and enjoyable way to spend time in nature while sharing food and meaningful moments with family, friends, or colleagues. The garden’s wide open spaces, natural shade from trees, and peaceful surroundings make it an ideal destination for outdoor dining and relaxation. Visitors are welcome to bring their own picnic baskets, meals, drinks, snacks, and picnic equipment such as blankets, mats, or portable chairs.',
    subServices: [
      {
        title: 'Family Picnic Visits',
        description:
          'Families can enjoy quality time together in a calm environment where children can explore safely while parents relax and reconnect.'
      },
      {
        title: 'Social Group Picnics',
        description:
          'Friends and social groups can gather for conversations, shared meals, and small celebrations such as birthdays, reunions, and casual get-togethers.'
      },
      {
        title: 'Nature Appreciation During Picnics',
        description:
          'Visitors can observe birds, plants, and butterflies while enjoying fresh air and a slower pace away from busy urban routines.'
      }
    ],
    typicalOutcomes: [
      'Improved relaxation and wellbeing through outdoor time.',
      'Meaningful social bonding with family and friends.',
      'A memorable nature-based dining experience.',
      'Greater appreciation for biodiversity and green spaces.',
      'Responsible outdoor habits through clean-up and conservation practices.'
    ]
  },
  {
    slug: 'boot-camping',
    title: 'Boot Camping',
    summary: 'An immersive outdoor adventure focused on nature connection, teamwork, and practical camping skills.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Boot camping at Sanya Gardens provides an exciting and immersive outdoor adventure that allows visitors to experience life closer to nature. Participants can bring camping equipment such as tents, sleeping bags, and cooking tools to set up temporary camps within designated areas. Camping in this natural setting allows visitors to enjoy the quiet atmosphere of the countryside during both day and night.',
    subServices: [
      {
        title: 'Camp Setup & Outdoor Living',
        description:
          'Participants set up tents, organize camp spaces, and practice practical outdoor living skills in a safe, designated environment.'
      },
      {
        title: 'Group Camp Activities',
        description:
          'Campers can enjoy outdoor cooking, storytelling sessions, nature walks, and campfire gatherings in approved areas.'
      },
      {
        title: 'Survival & Teamwork Learning',
        description:
          'Boot camping builds confidence through teamwork, basic navigation, camp organization, and responsible outdoor behavior.'
      }
    ],
    typicalOutcomes: [
      'Stronger teamwork and communication.',
      'Improved independence and problem-solving.',
      'Hands-on outdoor and survival knowledge.',
      'Reduced digital distraction and deeper nature connection.',
      'Memorable night-time experiences including stargazing and storytelling.'
    ]
  },
  {
    slug: 'school-camps',
    title: 'School Camps',
    summary: 'Outdoor learning programmes combining environmental education, recreation, and student development.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'School camps at Sanya Gardens provide students with valuable opportunities to learn outside the traditional classroom environment. The garden acts as a living classroom where students can observe plant species, insects, birds, and small animals in their natural habitats. Camps combine education, exploration, and recreation in a safe and structured setting.',
    subServices: [
      {
        title: 'Environmental Education Sessions',
        description:
          'Students learn about biodiversity, ecosystems, soil health, plant growth, and conservation through practical, nature-based lessons.'
      },
      {
        title: 'Guided Nature Walks & Workshops',
        description:
          'Facilitators lead interactive walks and workshops that encourage curiosity, critical thinking, and environmental responsibility.'
      },
      {
        title: 'Leadership & Team Challenges',
        description:
          'Group activities help learners build teamwork, communication, leadership, and problem-solving abilities.'
      }
    ],
    typicalOutcomes: [
      'Improved environmental awareness among learners.',
      'Better teamwork and social development.',
      'Increased confidence through practical outdoor experiences.',
      'Stronger appreciation for biodiversity and conservation.',
      'Lasting educational memories outside the classroom.'
    ]
  },
  {
    slug: 'volleyball',
    title: 'Volleyball',
    summary: 'An energetic outdoor sport experience that promotes fitness, teamwork, and social fun.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Volleyball at Sanya Gardens provides visitors with an energetic and enjoyable outdoor sport that promotes physical activity and teamwork. The garden offers space where visitors can organize friendly volleyball matches in a relaxed and natural environment. The activity is suitable for all ages and skill levels, from beginners to experienced players.',
    subServices: [
      {
        title: 'Casual Friendly Matches',
        description:
          'Visitors can organize relaxed games with friends and family in a welcoming atmosphere focused on enjoyment and participation.'
      },
      {
        title: 'Team-building Sessions',
        description:
          'Schools and organizations can use volleyball as a practical team-building activity that strengthens collaboration and communication.'
      },
      {
        title: 'Fitness Through Play',
        description:
          'Regular play supports coordination, strength, endurance, and active lifestyles while keeping the experience fun and social.'
      }
    ],
    typicalOutcomes: [
      'Improved physical fitness and movement.',
      'Better teamwork and on-court communication.',
      'Inclusive participation for all skill levels.',
      'Healthy, fun social interaction in nature.',
      'Stronger group morale for schools and organizations.'
    ]
  },
  {
    slug: 'birdwatching',
    title: 'Birdwatching',
    summary: 'A peaceful wildlife activity for observing and learning about birds in their natural habitat.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Birdwatching at Sanya Gardens provides visitors with a peaceful and educational opportunity to observe a variety of bird species in their natural habitat. Trees, plants, and natural ecosystems attract birds that feed, sing, and nest across the area. Early morning sessions are especially rewarding when bird activity is highest.',
    subServices: [
      {
        title: 'Guided Quiet Observation Walks',
        description:
          'Visitors walk quietly through observation-friendly areas to identify bird behaviors, movement patterns, and nesting activity.'
      },
      {
        title: 'Bird Photography Opportunities',
        description:
          'Nature enthusiasts and photographers can capture birds in natural settings with minimal disturbance to habitats.'
      },
      {
        title: 'Species Logging & Biodiversity Learning',
        description:
          'Guests can record observed species and build understanding of local biodiversity and ecosystem health.'
      }
    ],
    typicalOutcomes: [
      'Greater patience and observation skills.',
      'Better understanding of bird habitats and behavior.',
      'Enhanced appreciation for local biodiversity.',
      'Opportunities for educational nature photography.',
      'Stronger conservation awareness for wildlife protection.'
    ]
  },
  {
    slug: 'roasting-nyama-choma',
    title: 'Roasting Nyama Choma',
    summary: 'A social and cultural outdoor grilling experience centered on hospitality and shared meals.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Roasting Nyama Choma at Sanya Gardens is a social and cultural activity that brings people together through the enjoyment of freshly grilled meat in an outdoor environment. Visitors can prepare and roast meat while enjoying stories, conversation, and music in a relaxed garden atmosphere. The experience celebrates shared meals, cultural traditions, and hospitality.',
    subServices: [
      {
        title: 'Outdoor Grilling Sessions',
        description:
          'Guests can prepare and grill meat in designated spaces designed for safe and enjoyable outdoor cooking experiences.'
      },
      {
        title: 'Cultural Dining Gatherings',
        description:
          'Groups can combine Nyama Choma with vegetables, sauces, and local dishes for rich, communal dining moments.'
      },
      {
        title: 'Celebration-Friendly Setup',
        description:
          'The activity supports social meetups, family gatherings, and informal celebrations in a natural setting.'
      }
    ],
    typicalOutcomes: [
      'Stronger social connection through shared meals.',
      'Celebration of East African culinary tradition.',
      'Relaxed outdoor dining in scenic surroundings.',
      'Memorable cultural and community experiences.',
      'A welcoming atmosphere for group bonding.'
    ]
  },
  {
    slug: 'art-displays',
    title: 'Art Displays',
    summary: 'Creative exhibitions and workshops that connect nature, culture, and community expression.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Art displays at Sanya Gardens provide a platform where creativity and culture can be expressed through visual art, crafts, and creative exhibitions. Visitors can explore paintings, sculptures, handmade crafts, photography, and student artworks inspired by nature and community life. The garden setting deepens the connection between creativity and the environment.',
    subServices: [
      {
        title: 'Exhibition Walkthroughs',
        description:
          'Visitors can experience curated displays featuring local artists and students across multiple visual and craft formats.'
      },
      {
        title: 'Nature-Inspired Creative Themes',
        description:
          'Many artworks explore conservation, natural beauty, and cultural identity, encouraging reflection and appreciation.'
      },
      {
        title: 'Hands-on Art Workshops',
        description:
          'Interactive sessions allow visitors to learn techniques, create artwork, and express personal ideas in a supportive setting.'
      }
    ],
    typicalOutcomes: [
      'Increased appreciation for local arts and culture.',
      'Creative learning opportunities for all ages.',
      'Stronger connection between art and environment.',
      'Community participation through exhibitions and workshops.',
      'A vibrant platform for artists and student creators.'
    ]
  },
  {
    slug: 'walking',
    title: 'Walking',
    summary: 'Peaceful nature walks for health, reflection, and exploration of the garden environment.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Walking through Sanya Gardens provides visitors with a peaceful and refreshing way to explore plants, trees, flowers, and wildlife. The garden’s paths and open spaces support self-paced or guided walks in a calm natural setting. Walking here offers physical, emotional, and mental wellbeing benefits for individuals and groups.',
    subServices: [
      {
        title: 'Self-guided Nature Walks',
        description:
          'Visitors can move freely through designated paths and open areas while enjoying quiet reflection and scenery.'
      },
      {
        title: 'Guided Educational Walks',
        description:
          'Facilitated walks introduce plant species, ecological systems, and local environmental context during the route.'
      },
      {
        title: 'Wellness-focused Walking Sessions',
        description:
          'Walking sessions support stress reduction, light fitness, and mental reset through consistent time in nature.'
      }
    ],
    typicalOutcomes: [
      'Improved physical activity and general wellness.',
      'Reduced stress and stronger mental relaxation.',
      'Deeper understanding of local ecology.',
      'Accessible activity for all ages.',
      'A simple, restorative way to reconnect with nature.'
    ]
  },
  {
    slug: 'stargazing',
    title: 'Stargazing',
    summary: 'Night-sky observation in a low-light natural setting for wonder, learning, and calm reflection.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Stargazing at Sanya Gardens offers visitors a rare opportunity to observe the beauty of the night sky in a location with minimal artificial light. On clear nights, constellations, planets, and star clusters become visible in remarkable detail. The experience is especially meaningful during evening camping sessions and group gatherings.',
    subServices: [
      {
        title: 'Night Sky Viewing Sessions',
        description:
          'Visitors can lie on the grass or sit comfortably while observing celestial features in a peaceful nighttime environment.'
      },
      {
        title: 'Group Astronomy Conversations',
        description:
          'Families, schools, and groups can share stories and basic astronomy learning while exploring the night sky together.'
      },
      {
        title: 'Meditative Reflection Under the Stars',
        description:
          'Stargazing encourages calm, wonder, and perspective through quiet observation of the vast natural universe.'
      }
    ],
    typicalOutcomes: [
      'Greater curiosity about astronomy and space.',
      'A unique low-light outdoor experience.',
      'Calm, meditative nighttime reflection.',
      'Stronger group bonding during evening sessions.',
      'Unforgettable memories under clear skies.'
    ]
  },
  {
    slug: 'researching-flora-and-fauna',
    title: 'Researching Flora and Fauna',
    summary: 'A practical biodiversity learning space for observing plants, herbs, insects, and small animals.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Sanya Gardens offers an excellent natural environment for studying flora and fauna, including herbs, butterflies, frogs, insects, and other small animals. Researchers, students, environmentalists, and nature enthusiasts can observe species interactions and ecosystem patterns in a living natural laboratory. This activity supports environmental education and biodiversity documentation.',
    subServices: [
      {
        title: 'Plant & Herb Observation',
        description:
          'Visitors can identify plant species and medicinal herbs while learning their ecological roles and conservation value.'
      },
      {
        title: 'Insect and Small-Animal Study',
        description:
          'Participants can observe butterflies, frogs, and insects to understand habitat relationships and ecosystem behavior.'
      },
      {
        title: 'Field Documentation Practice',
        description:
          'Students and researchers can record findings, track biodiversity, and support local environmental learning efforts.'
      }
    ],
    typicalOutcomes: [
      'Improved practical understanding of biodiversity.',
      'Hands-on field observation and documentation skills.',
      'Greater environmental awareness and stewardship.',
      'Valuable learning opportunities for students and researchers.',
      'Support for habitat protection and conservation education.'
    ]
  },
  {
    slug: 'learning-about-composting',
    title: 'Learning About Composting',
    summary: 'Sustainability education on turning organic waste into nutrient-rich compost for healthy soil.',
    heroImage: IMG,
    cardImage: IMG,
    intro:
      'Composting education at Sanya Gardens introduces visitors to sustainable methods of recycling organic waste and improving soil health. Visitors learn how food scraps, plant waste, and leaves naturally break down into compost that supports healthy plant growth. Demonstrations provide practical techniques for building and maintaining simple compost systems.',
    subServices: [
      {
        title: 'Compost Basics & Soil Health',
        description:
          'Sessions explain composting principles, decomposition cycles, and the link between compost quality and productive soil.'
      },
      {
        title: 'Hands-on Compost Setup',
        description:
          'Visitors learn how to build compost systems, layer organic materials correctly, and manage moisture and aeration.'
      },
      {
        title: 'Sustainable Waste Management',
        description:
          'Participants explore practical ways to reduce waste and apply composting methods in homes, schools, and communities.'
      }
    ],
    typicalOutcomes: [
      'Improved understanding of sustainable agriculture.',
      'Practical composting skills for everyday use.',
      'Reduced organic waste through better recycling habits.',
      'Healthier soil and plant-growth practices.',
      'Stronger awareness of environmentally friendly living.'
    ]
  }
];

export const howWeWorkSteps = HOW_WE_WORK_STEPS;

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
