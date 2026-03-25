import { Link } from 'react-router-dom';

export default function Articles() {
  return (
    <div className="bg-surface text-on-surface selection:bg-tertiary-fixed selection:text-on-tertiary-fixed min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-[0_20px_50px_rgba(0,36,19,0.05)]">
        <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <span className="text-2xl font-bold tracking-tighter text-[#0B3B24]">Opalocus</span>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-slate-500 hover:text-[#0B3B24] transition-transform duration-300 hover:scale-105 cursor-pointer active:scale-95 font-medium" to="/">Accueil</Link>
            <Link className="text-[#0B3B24] font-semibold border-b-2 border-[#0B3B24] transition-transform duration-300 hover:scale-105 cursor-pointer active:scale-95" to="/articles">Articles</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-[#0B3B24] transition-transform duration-300 hover:scale-105 active:scale-95">account_circle</button>
          </div>
        </div>
      </nav>
      <main className="pt-32 min-h-screen relative overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-tertiary-fixed rounded-full glow-orb -z-10"></div>
        <div className="absolute bottom-[20%] left-[-5%] w-72 h-72 bg-primary-fixed rounded-full glow-orb -z-10"></div>
        
        <header className="max-w-7xl mx-auto px-8 mb-24 md:mb-32">
          <div className="max-w-3xl">
            <span className="text-sm tracking-widest uppercase opacity-70 mb-4 block">Ethereal Sanctuary Blog</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-primary leading-[1.1] tracking-tight mb-8">
              Read about <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Digital Wellbeing</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
              Explore our curated collection of thoughts on focus, rest, and the intentional use of technology in a fast-paced world.
            </p>
          </div>
        </header>

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <article className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img alt="Green plants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDYbIsRNpQUGfxTv6zbVQFR9CiaJYXYkwOSR-WMGc5wxlCPcVXlnp-XTE0-4Dxip68r00m8MzSch73E9x3WcsVAiDysXeNunKZEHgbZRYyhIvverrWjXZSzUdoXgmMedxbBtG-BwvIh2-h5Zktz_ysXfMrVErJyeaLXn9SoFwYRJjkWvwcJIIVFecwWXo9RBllJAqf7nQDfGHL0ux6WSTYdEOhk0wCBbLfjYzAtbQsPvC7Y6P-usAmg86N3IBInzN-wWh25GV--hCA" />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-surface-container-lowest px-4 py-1 rounded-full text-xs font-semibold text-primary-container">Read 5 min</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Digital Minimalism</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-4">How to find focus off-screen</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-2">Discover practical methods to reclaim your attention span by engaging with the physical world through mindfulness.</p>
              </div>
            </article>
            <article className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img alt="Person sitting" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiD-kPbgJ4l-J3VkHPKlwABly0UfgJ0AXqvo-G1NN2qxisL87-xCt9aHPJgfWTOLBheZ9UmnX8Cot33FvKTjSabIHnfzg_lII5IqYEBYAuklFPkgbLrwFugf8ih1zlV-_EDcWvHP_JxjhC3I4J37F1lSF1dg3eltRe_oubh89L4_lOGeLDUoSKfmbjK27WovQfiR9vp-pHkKncNGMOBViS2CcFD4dmFjTVZtUy_olXisxvUvvlouzlwWa-RCpN2Ks2Z2-oDrZqKNiE" />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-surface-container-lowest px-4 py-1 rounded-full text-xs font-semibold text-primary-container">Read 7 min</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Wellness</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-4">The art of digital disconnection</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-2">Learn why setting boundaries with your devices is the ultimate form of self-care in the modern age.</p>
              </div>
            </article>
            <article className="group bg-surface-container-low rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img alt="Mist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLh242IweW8-IMZ9sUSctk94tW8WHa5Hd7WSv54J5Ryjb7GadixFaqtdcEko_bQB16zdkZWlXxmmOwT-XVw3yt7HPZEbo7tHn7oKwLVRye0kojU9vxFPn55NNcD0n23d0joKrig8sBlevhpkIYZGxaG6QxCqAjtWKPcIVcs0ZU1n2RZuzY2fk3to_0PIrcA_BE4kIeDpgxJFgZApOgjoESekhFHchpnEG2R_GNL5_xjhETyv5Sj7BLpp4EUyBRKJ1dmmm6X3n7lIzp" />
              </div>
              <div className="p-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-surface-container-lowest px-4 py-1 rounded-full text-xs font-semibold text-primary-container">Read 4 min</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Neuroscience</span>
                </div>
                <h3 className="text-2xl font-bold text-primary-container mb-4">Neuroplasticity and rest</h3>
                <p className="text-on-surface-variant mb-8 line-clamp-2">Exploring how downtime and boredom are actually critical catalysts for brain health and creative growth.</p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}
