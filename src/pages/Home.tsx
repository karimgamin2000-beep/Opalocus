import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-on-surface selection:bg-tertiary-fixed selection:text-primary min-h-screen">
      <header className="fixed top-0 w-full z-50 bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,36,19,0.05)]">
        <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
          <div className="text-2xl font-bold tracking-tighter text-[#0B3B24] dark:text-[#D1F0E4]">Opalocus</div>
          <div className="hidden md:flex items-center gap-10">
            <Link className="text-[#0B3B24] dark:text-[#D1F0E4] font-semibold border-b-2 border-[#0B3B24] transition-all hover:scale-105" to="/">Accueil</Link>
            <Link className="text-slate-500 dark:text-slate-400 hover:text-[#0B3B24] transition-all hover:scale-105" to="/articles">Articles</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer active:scale-95 transition-all text-[#0B3B24] p-2 rounded-full hover:bg-surface-container-low">
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </nav>
      </header>
      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center min-h-[614px] text-center mb-24">
          <div className="absolute -z-10 w-[500px] h-[500px] mint-glow-orb opacity-60"></div>
          <div className="space-y-4 mb-8">
            <span className="text-label tracking-[0.2em] uppercase text-on-surface-variant font-medium text-xs">Aujourd'hui</span>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-primary-container leading-none">02:45</h1>
            <p className="text-on-surface-variant text-lg md:text-xl font-light tracking-tight max-w-md mx-auto">Heures de concentration profonde sauvegardées aujourd'hui.</p>
          </div>
          <button className="bg-primary-container text-on-primary px-10 py-5 rounded-full font-semibold text-lg shadow-xl shadow-primary/10 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3">
            <span className="material-symbols-outlined">timer</span>
            Start Focus Session
          </button>
        </section>
        
        {/* Bento Layout */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          <div className="md:col-span-7 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-start mb-12">
               <div>
                 <h3 className="text-2xl font-bold text-primary-container mb-2">Qualité de Focus</h3>
                 <p className="text-on-surface-variant">Analyse de votre immersion quotidienne.</p>
               </div>
               <span className="bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase">+12% vs hier</span>
             </div>
             <div className="flex items-end justify-between h-48 gap-3 md:gap-6">
                <div className="w-full bg-surface-container-highest rounded-t-full h-1/3 hover:bg-on-primary-container transition-colors cursor-help"></div>
                <div className="w-full bg-surface-container-highest rounded-t-full h-2/3 hover:bg-on-primary-container transition-colors cursor-help"></div>
                <div className="w-full bg-surface-container-highest rounded-t-full h-1/2 hover:bg-on-primary-container transition-colors cursor-help"></div>
                <div className="w-full bg-on-primary-container rounded-t-full h-[95%] shadow-lg shadow-on-primary-container/20"></div>
                <div className="w-full bg-surface-container-highest rounded-t-full h-3/4 hover:bg-on-primary-container transition-colors cursor-help"></div>
                <div className="w-full bg-surface-container-highest rounded-t-full h-1/4 hover:bg-on-primary-container transition-colors cursor-help"></div>
                <div className="w-full bg-surface-container-highest rounded-t-full h-2/5 hover:bg-on-primary-container transition-colors cursor-help"></div>
             </div>
          </div>
          <div className="md:col-span-5 bg-surface-container-low rounded-xl p-10 flex flex-col shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8"><span className="material-symbols-outlined text-on-primary-container/20 text-6xl">security_update_good</span></div>
             <h3 className="text-2xl font-bold text-primary-container mb-2">Distractions</h3>
             <p className="text-on-surface-variant mb-10">Tentatives d'accès bloquées.</p>
             <div className="flex-grow flex flex-col justify-center space-y-6">
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-primary-container">social_leaderboard</span></div>
                   <div><span className="block text-3xl font-bold text-primary-container">42</span><span className="text-sm text-on-surface-variant">Réseaux sociaux</span></div>
                </div>
                <div className="flex items-center gap-6">
                   <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm"><span className="material-symbols-outlined text-primary-container">mail</span></div>
                   <div><span className="block text-3xl font-bold text-primary-container">18</span><span className="text-sm text-on-surface-variant">Notifications mail</span></div>
                </div>
             </div>
          </div>
          <div className="md:col-span-12 h-96 rounded-xl overflow-hidden relative shadow-sm mt-8">
             <img alt="Sanctuary" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbF_TankbqdXSzDMJV5h6xd4IskTuI9u3I49x_Kq2nNA8BGNTYouZuft2qb9tjxFn6H2znn2HB-PPLDVyx1AhTEx0pNimq2fNfqI2uMZHgPMO-w7DYwG1ff36MeWvpm61iODI6-mqTZPpQa2K0aiyIsWC__Rx26h21dhpJeA8MB2erg5TRo5n-TjUJWFZi_fyW6sJ7oiMgGpNXwl047u_Y1SbufaBxfVG53w8-gksaMKEqqeqX7i_UCGZkahc_M8teITGg61iOJ_Wu" />
             <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex flex-col justify-end p-12">
               <h2 className="text-white text-4xl font-bold tracking-tight max-w-xl mb-4 leading-tight">Le calme est une compétence que l'on cultive chaque jour.</h2>
               <p className="text-white/80 text-lg max-w-lg">Découvrez nos nouveaux articles sur la neuroplasticité et le repos numérique.</p>
             </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-12 mt-24 bg-[#F2F6F4] dark:bg-slate-900 transition-colors duration-200">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 gap-6 max-w-7xl mx-auto">
          <div className="text-sm tracking-wide uppercase opacity-70 text-[#0B3B24] dark:text-[#D1F0E4]">© 2024 Opalocus. The Ethereal Sanctuary.</div>
          <div className="flex gap-8">
             <a className="text-sm tracking-wide uppercase opacity-70 text-[#0B3B24] dark:text-[#D1F0E4] hover:opacity-100 transition-opacity hover:underline" href="#">Privacy</a>
             <a className="text-sm tracking-wide uppercase opacity-70 text-[#0B3B24] dark:text-[#D1F0E4] hover:opacity-100 transition-opacity hover:underline" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
