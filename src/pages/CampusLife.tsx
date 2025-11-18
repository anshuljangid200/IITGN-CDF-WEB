import { useState } from "react";
import { Building, Laptop, BookOpen, Home, Utensils, Dumbbell, Users as UsersIcon, Users, GraduationCap, Network, Target, School, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import HeroSection from "@/components/HeroSection";

const encodeSegment = (segment: string) => encodeURIComponent(segment).replace(/%2F/g, "/");
const buildMediaPath = (folder: string, file: string) => `/iitcampus/${encodeSegment(folder)}/${encodeSegment(file)}`;
const createGallery = (folder: string, files: string[]) => files.map((file) => buildMediaPath(folder, file));

const highlightSlides = [
  {
    title: "Blithchron Main Stage",
    description: "Headliner performances, projection-mapped sets, and student-led production crews.",
    image: buildMediaPath("Blithchron", "blithchron-03.jpg"),
  },
  {
    title: "Culture Courts",
    description: "Mid-semester showcases, theatre clubs, and design collectives adding color to evenings.",
    image: buildMediaPath("Culturals", "culturals-04.jpg"),
  },
  {
    title: "High-Performance Labs",
    description: "Hands-on experimentation, rapid prototyping, and simulations under faculty mentorship.",
    image: buildMediaPath("Labs", "labs-02.jpg"),
  },
  {
    title: "Sports Complex",
    description: "Indoor arenas, outdoor fields, and aquatics teams training under floodlights.",
    image: buildMediaPath("Sports", "sports-05.jpg"),
  },
];

const masonryCategories = [
  {
    title: "Blithchron",
    description: "The annual cultural carnival curated entirely by students—immersive art, indie music, and light installations across the quad.",
    media: createGallery("Blithchron", ["blithchron-01.jpg", "blithchron-02.jpg", "blithchron-03.jpg", "blithchron-04.jpg", "blithchron-05.jpg", "blithchron-06.jpg", "blithchron-07.jpg", "blithchron-08.jpg"]),
    accent: "from-primary/30 via-secondary/20 to-accent/10",
  },
  {
    title: "Culturals",
    description: "Performing arts, literary societies, design collectives, and festival nights that keep the campus creative.",
    media: createGallery("Culturals", ["culturals-01.jpg", "culturals-02.jpg", "culturals-03.jpg", "culturals-04.jpg", "culturals-05.jpg", "culturals-06.jpg", "culturals-07.jpg", "culturals-08.jpg"]),
    accent: "from-secondary/30 via-primary/20 to-accent/20",
  },
  {
    title: "Sports",
    description: "Inter-IIT podium finishes, sunrise runs along Sabarmati, and evening league matches under pro-grade lighting.",
    media: createGallery("Sports", ["sports-01.jpg", "sports-02.jpg", "sports-03.jpg", "sports-04.jpg", "sports-05.jpg", "sports-06.jpg", "sports-07.jpg", "sports-08.jpg"]),
    accent: "from-accent/30 via-primary/10 to-secondary/20",
  },
  {
    title: "Tech Fests",
    description: "Makeathons, satellite clubs, cybersecurity drills, and expo floors buzzing with prototypes.",
    media: createGallery("Tech fests", ["tech-fests-01.webp", "tech-fests-02.webp", "tech-fests-03.webp", "tech-fests-04.webp", "tech-fests-05.webp", "tech-fests-06.webp", "tech-fests-07.webp", "tech-fests-08.webp"]),
    accent: "from-primary/20 via-accent/20 to-secondary/30",
  },
];

const gridCategories = [
  {
    title: "Advanced Labs",
    description: "AI pods, clean rooms, and rapid prototyping bays with 24/7 access.",
    media: createGallery("Labs", ["labs-01.jpg", "labs-02.jpg", "labs-03.jpg", "labs-04.jpg", "labs-05.jpg", "labs-06.jpg"]),
  },
  {
    title: "Library & Learning Commons",
    description: "Sunlit reading decks, multilingual collections, and digital archives with collaborative pods.",
    media: createGallery("Library", ["library-01.jpg", "library-02.jpg", "library-03.jpg", "library-04.jpg", "library-05.jpg", "library-06.jpg"]),
  },
];

const panoramaShots = [
  {
    title: "Sabarmati Promenade",
    description: "Dawn reflections along the river-facing walkways.",
    image: buildMediaPath("Sports", "sports-03.jpg"),
  },
  {
    title: "Innovation Spine",
    description: "Studios, labs, and maker spaces connected through a single collaborative axis.",
    image: buildMediaPath("Labs", "labs-04.jpg"),
  },
  {
    title: "Knowledge Commons",
    description: "Tiered reading lounges overlooking the landscaped courtyards.",
    image: buildMediaPath("Library", "library-03.jpg"),
  },
];

const features = [
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "High-Performance Computing Labs",
    description: "GPU clusters for deep learning, cloud credits for AWS/Azure/GCP, latest development tools",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "24/7 Library Access",
    description: "Physical and digital collections, IEEE/ACM subscriptions, quiet study areas",
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: "Comfortable Accommodation",
    description: "Furnished hostel rooms with internet, 24/7 electricity, security and medical facilities",
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Nutritious Meals",
    description: "Hygienic mess with veg/non-veg options, multi-cuisine, dietary requirements accommodated",
  },
  {
    icon: <Dumbbell className="w-6 h-6" />,
    title: "Sports & Fitness",
    description: "Cricket, football, basketball, badminton courts, modern gymnasium, yoga sessions",
  },
  {
    icon: <UsersIcon className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Hackathons, guest lectures, peer learning, industry networking opportunities",
  },
];

// dayInLife schedule removed — section omitted per content update

const whyResidential = [
  {
    icon: <School className="w-6 h-6" />,
    title: "IIT Culture",
    description: "Experience the culture of excellence, innovation, and integrity that defines IIT Gandhinagar.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Environment",
    description: "Learn alongside peers from diverse backgrounds, fostering collaboration and peer learning.",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Immersive Experience",
    description: "24/7 access to labs, faculty, and resources accelerates your learning journey.",
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: "Networking",
    description: "Build lifelong connections with classmates, faculty, alumni, and industry mentors.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Focus & Discipline",
    description: "Structured campus life helps you stay focused on your goals without distractions.",
  },
];

const CampusLife = () => {
  const [activeMedia, setActiveMedia] = useState<{ title: string; description: string; src: string } | null>(null);
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <HeroSection
        icon={<Sparkles className="w-16 h-16 text-primary mx-auto" aria-hidden="true" />}
        title="Experience"
        highlight="IIT Gandhinagar"
        description="Live, build, and collaborate on a riverfront campus designed for maker culture—labs that run late, festivals that light up the quad, and sports arenas that keep energy high."
      />


      {/* Campus Highlights Carousel */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-sm font-semibold text-primary">
              <Sparkles className="w-4 h-4" />
              Immersive Galleries
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-4">Campus Life Photo Highlights</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Curated frames from the campus archives capturing energy across academics, arts, and athletics—no special effects, just real campus life.
            </p>
          </div>

          <Carousel className="relative" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {highlightSlides.map((slide, index) => (
                <CarouselItem key={slide.title} className="md:basis-1/2 lg:basis-1/3">
                  <article
                    className="h-full rounded-3xl border border-border bg-card/90 shadow-soft overflow-hidden flex flex-col motion-safe:animate-fade-in"
                  >
                    <div className="relative">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        loading="lazy"
                        className="h-64 w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" aria-hidden="true" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{slide.title}</h3>
                      <p className="text-sm text-muted-foreground flex-1">{slide.description}</p>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background/90 shadow-soft" />
            <CarouselNext className="bg-background/90 shadow-soft" />
          </Carousel>
        </div>
      </section>
      {/* Campus Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Building className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              World-Class Campus
            </h2>
            <p className="text-lg text-muted-foreground">
              IIT Gandhinagar is spread across 400+ acres of beautifully designed campus space in Palaj, Gandhinagar, Gujarat. The campus blends modern architecture with green, sustainable design — creating an inspiring environment for learning and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 motion-safe:animate-fade-in"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <div className="text-primary-foreground">{feature.icon}</div>
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Galleries */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">IITGN Campus Media</h2>
            <p className="text-lg text-muted-foreground">
              Highly visual festivals and flagship events captured in immersive masonry layouts.
            </p>
          </div>
          <div className="space-y-12">
            {masonryCategories.map((category, index) => (
              <article
                key={category.title}
                className="rounded-3xl border border-border bg-card/80 shadow-soft p-6 lg:p-10 motion-safe:animate-fade-in"
              >
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground mt-3 max-w-3xl">{category.description}</p>
                </div>
                <div
                  className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
                  style={{
                    background: `linear-gradient(135deg, hsla(237,80%,58%,0.04), hsla(262,83%,58%,0.04))`,
                  }}
                >
                  {category.media.map((src, mediaIndex) => (
                    <figure key={src} className="break-inside-avoid rounded-2xl overflow-hidden shadow-soft">
                      <img
                        src={src}
                        alt={`${category.title} moment ${mediaIndex + 1}`}
                        loading="lazy"
                        className="w-full h-full object-cover transition duration-500 hover:scale-[1.02]"
                      />
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Galleries with Lightbox */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">Labs & Library Spotlight</h2>
            <p className="text-lg text-muted-foreground">
              Tap any tile to open a responsive lightbox and explore the academic infrastructure in detail.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10">
            {gridCategories.map((category) => (
              <article key={category.title} className="rounded-3xl border border-border bg-card/90 shadow-soft p-6 lg:p-10">
                <div className="flex flex-col gap-4 mb-6">
                  <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                  <p className="text-muted-foreground mt-2 max-w-2xl">{category.description}</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {category.media.map((src, mediaIndex) => (
                    <button
                      key={src}
                      onClick={() =>
                        setActiveMedia({
                          title: `${category.title} — View ${mediaIndex + 1}`,
                          description: category.description,
                          src,
                        })
                      }
                      className="group relative rounded-2xl overflow-hidden shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      aria-label={`Open ${category.title} image ${mediaIndex + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${category.title} detail ${mediaIndex + 1}`}
                        loading="lazy"
                        className="h-36 sm:h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent opacity-0 group-hover:opacity-100 transition" />
                    </button>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Panorama scroll */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Panoramic Passages</h2>
            <p className="text-lg text-muted-foreground mt-3">
              Scroll through wide-format campus captures showcasing IITGN&apos;s architecture and landscapes.
            </p>
          </div>
          <div className="overflow-x-auto panorama-scroll">
            <div className="flex gap-6 snap-x snap-mandatory pb-4">
              {panoramaShots.map((shot, index) => (
                <figure
                  key={shot.title}
                  className="relative min-w-[280px] sm:min-w-[420px] lg:min-w-[560px] snap-start rounded-[2rem] overflow-hidden shadow-large motion-safe:animate-fade-in"
                >
                  <img
                    src={shot.image}
                    alt={shot.title}
                    loading="lazy"
                    className="h-64 sm:h-80 lg:h-96 w-full object-cover"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent text-white p-5">
                    <h3 className="text-lg font-semibold">{shot.title}</h3>
                    <p className="text-sm text-white/80">{shot.description}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* 'A Day in the Life' section removed per content update */}

      {/* Why Residential Learning */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              Why Residential Learning?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {whyResidential.map((reason, index) => (
                <Card
                  key={index}
                  className="hover:shadow-large transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <div className="text-primary-foreground">{reason.icon}</div>
                    </div>
                    <h3 className="font-bold text-foreground mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Details */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Academic Infrastructure</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Smart classrooms with AV systems and smart boards</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dedicated GPU clusters for deep learning workloads</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Cloud computing credits (AWS, Azure, GCP)</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24/7 library with technical collections and digital resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>High-speed Wi-Fi connectivity across campus</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-large">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Student Support Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>24/7 security personnel and CCTV monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>On-campus medical center with resident doctor</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Counseling and wellness support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Dedicated program coordinators for student queries</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Laundry facilities and hostel amenities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Dialog open={Boolean(activeMedia)} onOpenChange={(open) => !open && setActiveMedia(null)}>
        <DialogContent className="max-w-4xl border-none bg-transparent shadow-none p-0">
          {activeMedia && (
            <div className="bg-card rounded-3xl overflow-hidden shadow-large">
              <img
                src={activeMedia.src}
                alt={activeMedia.title}
                className="w-full max-h-[32rem] object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <DialogHeader className="mb-2">
                  <DialogTitle>{activeMedia.title}</DialogTitle>
                </DialogHeader>
                <p className="text-muted-foreground">{activeMedia.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </div>
  );
};

export default CampusLife;
