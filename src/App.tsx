import { 
  Users, 
  Package, 
  MessageCircle, 
  Search, 
  ArrowRight, 
  Play, 
  Lightbulb, 
  ClipboardList, 
  PenTool, 
  Smartphone, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const TEAM_MEMBERS = [
  { name: 'Brian Yu', role: 'Team Mate B', image: '/assets/brian.png' },
  { name: 'Antonia Kwan', role: 'Team Mate A', image: '/assets/antonia.png' },
  { name: 'Lucy He', role: 'Team Mate LL', image: '/assets/lucy.png' },
  { name: 'Athena Bao', role: 'Team Mate A', image: '/assets/athena.png' },
];

const DESIGN_PHASES = [
  { 
    title: 'User Research', 
    desc: 'To understand UW apartment living experience, we conducted 28 surveys and 3 interviews.',
    icon: <Search className="w-6 h-6" />
  },
  { 
    title: 'Key Findings', 
    desc: 'Identified three themes around interaction frequency, access to social opportunities, and fear of spontaneous interaction.',
    icon: <ClipboardList className="w-6 h-6" />
  },
  { 
    title: 'Ideation & Sketches', 
    desc: 'Brainstormed solutions in the form of a mobile app, website platform, physical bulletin board, doorbell color indicators, and smart watch vibrations.',
    icon: <Lightbulb className="w-6 h-6" />
  },
  { 
    title: 'Paper & Digital Prototyping', 
    desc: 'Tested core task flows with low-fidelity physical models, then iterated on high-fidelity Figma designs after usability testing.',
    icon: <PenTool className="w-6 h-6" />
  },
  { 
    title: 'Final Pitch', 
    desc: 'Presented our final pitch and design walkthrough to stakeholders, receiving feedback on potential impact and future directions.',
    icon: <Smartphone className="w-6 h-6" />
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-slate-900">
      {/* 0. HEADING / NAV */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center shadow-sm group-hover:rotate-12 transition-transform">
              <img src="/assets/AMlogo.png" alt="Apartmate logo" className="w-7 h-7 object-contain" />
            </div>
            <span className="text-xl font-extrabold tracking-tight font-display text-slate-900">Apartmate</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#problem" className="nav-link">The Problem</a>
            <a href="#solution" className="nav-link">Our Solution</a>
            <a href="#process" className="nav-link">Design Process</a>
            <a href="#demo" className="nav-link">The App</a>
            <a href="#team" className="px-5 py-2 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors">Meet the Team</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#problem" onClick={() => setIsMenuOpen(false)} className="nav-link">The Problem</a>
            <a href="#solution" onClick={() => setIsMenuOpen(false)} className="nav-link">Our Solution</a>
            <a href="#process" onClick={() => setIsMenuOpen(false)} className="nav-link">Design Process</a>
            <a href="#demo" onClick={() => setIsMenuOpen(false)} className="nav-link">The App</a>
            <a href="#team" onClick={() => setIsMenuOpen(false)} className="nav-link">Meet the Team</a>
          </motion.div>
        )}
      </nav>

      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-20 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/30 text-slate-800 rounded-full text-sm font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            UW CSE 440 Project
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold font-display leading-[1.1] mb-6 text-slate-900">
            Your neighbors, <br />
            <span className="text-slate-400">just a tap away.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-lg">
            Apartmate helps off-campus UW students build community through shared interests and resource sharing—without the social pressure.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#solution" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-slate-200">
              See How It Works <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#demo" className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all">
              View Demo
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square bg-accent/20 rounded-[3rem] flex items-center justify-center p-12">
            <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl shadow-accent/20 flex items-center justify-center border-8 border-slate-50 relative overflow-hidden">
              {/* SVG Logo Representation */}
              <svg viewBox="0 0 200 200" className="w-48 h-48 text-slate-800">
                <circle cx="100" cy="100" r="80" fill="#B8F0EE" fillOpacity="0.4" />
                <path d="M60 140 L100 60 L140 140" stroke="currentColor" strokeWidth="12" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="100" cy="60" r="15" fill="currentColor" />
                <circle cx="60" cy="140" r="15" fill="currentColor" />
                <circle cx="140" cy="140" r="15" fill="currentColor" />
              </svg>
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">Apartmate v1.0</span>
              </div>
            </div>
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 animate-bounce">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600">
              <Package className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400">BORROWED</p>
              <p className="text-sm font-bold">Baking Soda</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 2. TEAM MEMBERS */}
      <section id="team" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">The Minds Behind Apartmate</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Meet Team BALLA, a group of UW students dedicated to solving the loneliness epidemic in off-campus housing.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden group-hover:border-accent transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-slate-500 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM STATEMENT */}
      <section id="problem" className="section-padding bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-8 leading-tight">
              Living together, <br />
              <span className="text-slate-400 italic">yet worlds apart.</span>
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              <p>
                Students living off-campus want connection but face fear of rejection, limited time, and social awkwardness. Existing solutions require high effort or face-to-face interaction.
              </p>
              <p>
                Despite sharing physical proximity in common areas, residents experience a problem where the fear of social rejection prevents spontaneous interaction without being prompted.
              </p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-10 rounded-[2.5rem] border border-white/10">
            <div className="mb-8">
              <span className="text-6xl font-display font-extrabold text-accent">85%</span>
              <p className="text-xl text-slate-300 mt-2">of UW students living in apartments don't know their neighbors well.</p>
            </div>
            <blockquote className="text-xl italic text-slate-100 border-l-4 border-accent pl-6 py-2">
              "I have met a lot of people in an unplanned way, but a lot of people wouldn't want to approach people who look like they are reserved... most of my spontaneous friendships have occurred because someone else approached me."
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. SOLUTION STATEMENT */}
      <section id="solution" className="section-padding bg-warm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-4 block">Our Solution</span>
            <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-6">Community, simplified.</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Apartmate is a mobile-native solution that creates opportunities for people to organically connect by interests, plan events, and share resources.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-accent/20">
                <Users className="w-8 h-8 text-slate-800" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Interest Matching</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Find neighbors with shared hobbies without the awkward intros. Whether it's gaming, hiking, or cooking, Apartmate connects you with like-minded residents asynchronously.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-100/20">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Item Lending</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Missing baking soda for that late-night batch of cookies? Skip the trip to QFC and post a request instead. Borrow everyday items from neighbors who are happy to help.
              </p>
            </div>
          </div>

          <div className="mt-16 flex justify-center gap-12 flex-wrap">
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <CheckCircle2 className="text-accent" /> Opt-in Only
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <CheckCircle2 className="text-accent" /> Async Interaction
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <CheckCircle2 className="text-accent" /> Low Social Pressure
            </div>
            <div className="flex items-center gap-3 text-slate-500 font-bold">
              <CheckCircle2 className="text-accent" /> Mobile-Native
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONCEPT VIDEO */}
      <section className="section-padding bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold font-display mb-4">
              See it in Action
            </h2>
          </div>

          <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/X7MYAHbzJyM"
              title="Apartmate Concept Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-center mt-6 text-slate-500 font-medium italic">
            A short walkthrough of the Apartmate user experience and core features.
          </p>
        </div>
      </section>

      {/* 6. DESIGN PROCESS */}
      <section id="process" className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold font-display mb-4">Peek Into Our Process</h2>
            <p className="text-slate-500">From initial research to final high-fidelity designs.</p>
          </div>
          
          {/* Interactive Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {DESIGN_PHASES.map((phase, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === 4) {
                    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    setActivePhase(i);
                  }
                }}
                className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${
                  activePhase === i && i !== 4 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${activePhase === i && i !== 4 ? 'bg-accent text-slate-900' : 'bg-slate-100 text-slate-500'}`}>
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{phase.title}</span>
                {i === 4 && <ArrowRight className="w-4 h-4 opacity-50" />}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-50 min-h-[400px]">
            {activePhase === 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-slate-800">
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">User Research</h3>
                    <p className="text-slate-500">To understand UW apartment living experience, we conducted:</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">28 surveys</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Collected broad input on apartment social behavior and community needs. Respondents were primarily sophomores, juniors, and seniors, with most living in multi-roommate units (typically 3-4 roommates)</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">3 interviews</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Gathered deeper qualitative insights into comfort levels, barriers, and social expectations. </p>
                  </div>
                </div>
              </motion.div>
            )}

            {activePhase === 1 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-slate-800">
                    <ClipboardList className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Key Findings</h3>
                    <p className="text-slate-500">Identified three themes:</p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li>Most residents do not frequently interact with their neighbors, yet still consider themselves to be on neutral or positive terms.</li>
                    <li>Residents express a strong desire for organized, intentional social events, but lack access to structured opportunities to participate. </li>
                    <li>Despite sharing physical proximity in common areas, residents experience a problem where the fear of social rejection prevents spontaneous interaction without being prompted.</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activePhase === 2 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-slate-800">
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Ideation & Sketches</h3>
                    <p className="text-slate-500">Brainstormed solutions that integrate into existing student behaviors, in the form of:</p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <ul className="list-disc pl-5 space-y-3 text-sm text-slate-600 leading-relaxed">
                    <li>Mobile app</li>
                    <li>Website platform</li>
                    <li>Physical bulletin board</li>
                    <li>Doorbell color indicators</li>
                    <li>Smart watch vibrations</li>
                  </ul>
                </div>
              </motion.div>
            )}

            {activePhase === 3 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-slate-800">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Paper & Digital Prototyping</h3>
                    <p className="text-slate-500">Testing and iterating across fidelity levels.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-4">
                      <img
                        src="/assets/paper.png"
                        alt="Paper prototype"
                        className="w-full h-80 object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-slate-600 italic">Paper Prototype</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-2xl border border-slate-100 bg-white shadow-sm p-4">
                      <img
                        src="/assets/digitalprotoype.png"
                        alt="Digital prototype"
                        className="w-full h-80 object-contain"
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-slate-600 italic">Digital Prototype</p>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Testing core task flows with low-fidelity physical models to validate concepts, then iterating on high-fidelity Figma designs after usability testing.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 7. FINAL DESIGN DEMO */}
      <section id="demo" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold font-display mb-4">Final Pitch & Design Walkthrough</h2>
            <p className="text-slate-500">Presented our final pitch and design walkthrough to stakeholders, receiving feedback on potential impact and future directions.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Screen 1 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                  <div className="h-12 bg-accent/20 flex items-center px-4 pt-4">
                    <div className="w-8 h-8 bg-accent rounded-lg" />
                  </div>
                  <div className="p-4 flex-1 space-y-4">
                    <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                    <div className="h-32 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase tracking-tighter">Home / Neighbor Feed</div>
                    <div className="space-y-2">
                      <div className="h-3 w-full bg-slate-100 rounded-full" />
                      <div className="h-3 w-5/6 bg-slate-100 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 font-bold text-xl">Home Feed</h3>
              <p className="text-center text-slate-500 mt-2 text-sm px-4">See what's happening in your building and discover new events.</p>
            </div>

            {/* Screen 2 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                  <div className="h-12 bg-accent/20 flex items-center px-4 pt-4">
                    <div className="w-8 h-8 bg-accent rounded-lg" />
                  </div>
                  <div className="p-4 flex-1 space-y-4">
                    <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                    <div className="h-48 w-full bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-[10px] text-slate-400 font-bold uppercase tracking-tighter text-center px-4">Interest Matching Screen</div>
                    <div className="flex gap-2">
                       <div className="h-8 w-8 bg-accent/30 rounded-full" />
                       <div className="h-8 w-8 bg-accent/30 rounded-full" />
                       <div className="h-8 w-8 bg-accent/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <h3 className="mt-8 font-bold text-xl">Interest Matching</h3>
              <p className="text-center text-slate-500 mt-2 text-sm px-4">Connect with neighbors who share your passions and hobbies.</p>
            </div>

            {/* Screen 3 */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[280px] aspect-[9/19] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[6px] border-slate-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-b-2xl z-20" />
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden flex flex-col">
                  <div className="h-12 bg-accent/20 flex items-center px-4 pt-4">
                    <div className="w-8 h-8 bg-accent rounded-lg" />
                  </div>
                  <div className="p-4 flex-1 space-y-4">
                    <div className="h-4 w-2/3 bg-slate-100 rounded-full" />
                    <div className="h-24 w-full bg-orange-50 rounded-2xl border-2 border-dashed border-orange-100 flex items-center justify-center text-[10px] text-orange-300 font-bold uppercase tracking-tighter text-center px-4">Item Borrow Request</div>
                    <div className="h-10 w-full bg-slate-900 rounded-xl" />
                  </div>
                </div>
              </div>
              <h3 className="mt-8 font-bold text-xl">Resource Sharing</h3>
              <p className="text-center text-slate-500 mt-2 text-sm px-4">Request to borrow items from neighbors in a simple, organized way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                <Users className="text-slate-800 w-6 h-6" />
              </div>
              <span className="text-2xl font-extrabold tracking-tight font-display text-white">Apartmate</span>
            </div>
            <p className="text-lg max-w-md mb-8">
              Building tighter, more reliable communities for off-campus students. Because the strongest communities start right outside your door.
            </p>
            <div className="text-sm">
              Designed for <span className="text-white font-bold"><a href="https://courses.cs.washington.edu/courses/cse440/26wi/">CSE 440 · University of Washington</a></span>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Team BALLA</h4>
            <ul className="space-y-3">
              {TEAM_MEMBERS.map(m => <li key={m.name}>{m.name}</li>)}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Project</h4>
            <ul className="space-y-3">
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">The Solution</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Design Process</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Final Demo</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 text-center text-sm">
          &copy; 2026 Team BALLA and Apartmate. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
