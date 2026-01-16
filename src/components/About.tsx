import { Headphones, Music, Mic2, Sliders } from 'lucide-react';
import bernisha from '@/assets/bernisha.webp';

const services = [
  {
    icon: Sliders,
    title: 'Mixing',
    description: 'Balancing every element to create a cohesive, dynamic mix that translates across all systems.',
  },
  {
    icon: Headphones,
    title: 'Mastering',
    description: 'Final polish and loudness optimization to ensure your music competes on any platform.',
  },
  {
    icon: Mic2,
    title: 'Vocal Production',
    description: 'Expert vocal editing, tuning, and processing to make your vocals shine.',
  },
  {
    icon: Music,
    title: 'Sound Design',
    description: 'Creative sound design and audio post-production for music, film, and media.',
  },
];

const About = () => {
  return (
    <section id='about' className='py-24 bg-card'>
      <div className='container mx-auto px-6'>
        <div className='max-w-6xl mx-auto'>
          {/* About Section */}
          <div className='grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24'>
            <div className='order-2 md:order-1'>
              <p className='text-sm uppercase tracking-[0.2em] text-primary mb-4'>About Me</p>
              <h2 className='text-3xl md:text-4xl font-light tracking-tight text-foreground mb-6'>
                Passionate About
                <span className='block font-medium'>Sonic Excellence</span>
              </h2>
              <div className='space-y-4 text-muted-foreground leading-relaxed'>
                <p>
                  Working across music, film, and live sound, I focus on creating audio that is clear, balanced and
                  emotionally engaging from intimate studio recordings to dynamic live environments.
                </p>
                <p>
                  My approach blends technical precision with careful listening. Every project receives individual
                  attention with sound shaped thoughtfully to support the artist’s vision the story on screen or the
                  energy of a live performance.
                </p>
                <p>
                  Based in South India, I collaborate with artists, filmmakers, and creators to deliver sound that feels
                  natural, polished and purpose-driven across every medium.
                </p>
              </div>
            </div>
            <div className='order-1 md:order-2'>
              <div className='aspect-[4/5] bg-secondary rounded-2xl overflow-hidden'>
                <div className='w-full h-full flex items-center justify-center text-muted-foreground'>
                  <img src={bernisha} alt='Bernisha' className='w-full h-full object-cover' />
                </div>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className='text-center mb-12'>
            <p className='text-sm uppercase tracking-[0.2em] text-primary mb-4'>Services</p>
            <h2 className='text-3xl md:text-4xl font-light tracking-tight text-foreground'>
              What I <span className='font-medium'>Offer</span>
            </h2>
          </div>

          <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {services.map(service => (
              <div
                key={service.title}
                className='group p-6 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300'
              >
                <div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors'>
                  <service.icon className='w-6 h-6 text-primary' />
                </div>
                <h3 className='text-lg font-medium text-foreground mb-2'>{service.title}</h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
