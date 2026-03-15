import { 
  Users, 
  Package, 
  MessageCircle, 
  Search, 
  ArrowRight, 
  ArrowDown, 
  Lightbulb, 
  ClipboardList, 
  PenTool, 
  Smartphone,
  Trophy, 
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const TEAM_MEMBERS = [
  { name: 'Brian Yu', role: 'Team Mate B', image: '/assets/brian.png', link: 'https://www.linkedin.com/in/gobrianyu/' },
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
            Your neighbours, <br />
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
          {/* <div className="aspect-square bg-accent/20 rounded-[3rem] flex items-center justify-center p-12">
            <div className="w-full h-full bg-accent/100 rounded-[2rem] shadow-2xl shadow-accent/20 flex items-center justify-center border-8 border-slate-50 relative overflow-hidden">
              <img
                src="/assets/AMlogo.png"
                alt="Apartmate logo"
                className="w-56 h-56 object-contain"
              />
              <div className="absolute bottom-8 left-0 right-0 text-center">
                <span className="text-sm font-bold text-white tracking-widest uppercase">Apartmate v1.0</span>
              </div>
            </div>
          </div> */}
          <div className="aspect-square bg-accent/20 rounded-[3rem] flex items-center justify-center p-12">
            <div className="w-full h-full bg-white rounded-[2rem] shadow-2xl shadow-accent/20 flex items-center justify-center border-8 border-slate-50 relative overflow-hidden">
              <div className="w-64 h-64 bg-accent/30 rounded-full flex items-center justify-center shadow-inner">
                <img 
                  src="/assets/house-bell-grey.png" 
                  alt="Apartmate Logo" 
                  className="w-40 h-40 object-contain" 
                  referrerPolicy="no-referrer" 
                />
              </div>
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
                {member.link ? (
                  <a href={member.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden group-hover:border-accent transition-colors">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-accent transition-colors">{member.name}</h3>
                    </a>
                ) : (
                  <>
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-full mx-auto mb-6 border-4 border-white shadow-md flex items-center justify-center overflow-hidden group-hover:border-accent transition-colors">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
                  </>
                )}
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
              <p className="text-xl text-slate-300 mt-2">of UW students living in apartments don't know their neighbours well.</p>
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
                Find neighbours with shared hobbies without the awkward intros. Whether it's gaming, hiking, or cooking, Apartmate connects you with like-minded residents asynchronously.
              </p>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-50">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-orange-100/20">
                <Package className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Item Lending</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                Missing baking soda for that late-night batch of cookies? Skip the trip to QFC and post a request instead. Borrow everyday items from neighbours who are happy to help.
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
                onClick={() => setActivePhase(i)}
                className={`px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-3 ${
                  activePhase === i 
                    ? 'bg-slate-900 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-100'
                }`}
              >
                <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm ${activePhase === i ? 'bg-accent text-slate-900' : 'bg-slate-100 text-slate-500'}`}>
                  {i + 1}
                </span>
                <span className="hidden sm:inline">{phase.title}</span>
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
                    <p className="text-slate-500">Better understanding the UW off-campus student experience.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">Surveys (n=28)</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">We collected quantitative data on apartment social interactions and community needs. Respondents were primarily sophomores, juniors, and seniors, with most living in multi-roommate units (typically 3-4 roommates)</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">Semi-structured interviews</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Conducted deeper inquiries with 3 UW students to gather qualitative insights into comfort levels, barriers, and social expectations.</p>
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
                    <p className="text-slate-500">Through our user research, we identified 3 key insights.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">Neighbours, but not connections.</h4>
                    <p className="text-sm text-slate-500 leading-relaxed"><b>85%</b> of students report low interaction with neighbours, yet <b>96%</b> describe relationships as neutral or positive. Most residents coexist peacefully but rarely form meaningful connections beyond their own apartment units.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">Interest in events, but low participation.</h4>
                    <p className="text-sm text-slate-500 leading-relaxed"><b>50%</b> of residents have never attended a building event, yet <b>75%</b> say they would attend if events were better organized, scheduled, or promoted. Students want structured opportunities to meet neighbours but rarely initiate them themselves.</p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <h4 className="font-bold mb-2">Fear of rejection limits interaction.</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">Although <b>59%</b> use common areas weekly or daily, most avoid approaching others due to uncertainty about whether interaction is welcome. Without clear signals, students hesitate to start conversations with neighbours.</p>
                  </div>
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
                    <p className="text-slate-500">Brainstormed solutions that integrate into existing student behaviours.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-100 shadow-sm">
                      <img 
                        src="/assets/sketches1.png" 
                        alt="Initial Brainstorming & Feature Mapping" 
                        className="w-full h-auto block rounded-3xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-slate-600 italic">Initial Brainstorming & Feature Mapping</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl border border-slate-100 shadow-sm">
                      <img 
                        src="/assets/sketches2.png" 
                        alt="Feature Prioritization Matrix" 
                        className="w-full h-auto block rounded-3xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="text-center text-sm font-bold text-slate-600 italic">Feature Prioritization Matrix</p>
                  </div>
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

            {activePhase === 4 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-slate-800">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">The Final Pitch</h3>
                    <p className="text-slate-500">Presenting our journey to peers and mentors.</p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-100 bg-slate-50">
                    <img 
                      src="/assets/final_pitch.jpg" 
                      alt="Final Pitch Session" 
                      className="w-full h-auto block rounded-3xl"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="space-y-6">
                    <h4 className="text-2xl font-bold text-slate-900">Presenting Apartmate</h4>
                    <p className="text-slate-600 leading-relaxed">
                      During the final pitch session, we showcased how Apartmate addresses the "loneliness epidemic" in off-campus housing. We demonstrated our core features: interest matching and resource sharing, highlighting how our asynchronous model reduces social friction for students.
                    </p>
                    <button 
                      onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                      className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                    >
                      See our final design <ArrowDown className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 7. FINAL DESIGN DEMO */}
      <section id="demo" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Interactive Phone Frame */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center lg:justify-start"
            >
            <div className="relative">
              {/* Decorative background blob */}
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10" />
              
              {/* Phone Frame */}
              <div className="relative z-10 w-full max-w-[320px] aspect-[9/19.5] bg-slate-900 rounded-[3.5rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-slate-800">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-30 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-slate-800 rounded-full" />
                  <div className="w-10 h-1 bg-slate-800 rounded-full" />
                </div>
                
                {/* Side Buttons */}
                <div className="absolute -left-2 top-24 w-1 h-12 bg-slate-800 rounded-l-md" />
                <div className="absolute -left-2 top-40 w-1 h-12 bg-slate-800 rounded-l-md" />
                <div className="absolute -right-2 top-32 w-1 h-16 bg-slate-800 rounded-r-md" />

                {/* Screen / Iframe */}
                <div className="w-full h-full bg-white rounded-[2.8rem] overflow-hidden relative z-20">
                  <iframe 
                    src="https://apartmateapp.vercel.app/" 
                    className="border-none"
                    style={{
                      width: '150%',
                      height: '150%',
                      transform: 'scale(0.6666)',
                      transformOrigin: 'top left',
                    }}
                    title="Apartmate App Demo"
                    loading="lazy"
                  />
                  {/* Overlay for when iframe fails or to show placeholder */}
                  <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-8 text-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity bg-white/90">
                    <Smartphone className="w-12 h-12 text-slate-300 mb-4" />
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Interactive Demo</p>
                    <p className="text-xs text-slate-400 mt-2">Replace iframe src with your actual deployment URL</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-15 -right-4 md:-right-35 bg-white p-5 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px] z-30"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">Live Preview</span>
                </div>
                <p className="text-[10px] text-slate-500 leading-tight">Interact with the actual app prototype right here.</p>
              </motion.div>
              </div>
            </motion.div>

            {/* Right: Content & Actions */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">The Final Design</span>
                <h2 className="text-4xl md:text-5xl font-extrabold font-display mb-6 leading-tight text-slate-900">
                  Experience the <br />
                  <span className="text-slate-400 italic">Apartmate App.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Our high-fidelity prototype brings the Apartmate vision to life. Designed with the specific needs of UW students in mind, the app focuses on speed, ease of use, and low-pressure social interaction.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <MessageCircle className="w-5 h-5 text-accent" /> Async Messaging
                  </h4>
                  <p className="text-xs text-slate-500">Connect with neighbours on your own time without the pressure of instant replies.</p>
                </div>
                <div className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Package className="w-5 h-5 text-accent" /> Resource Sharing
                  </h4>
                  <p className="text-xs text-slate-500">Keep track of items you've lent or borrowed with automated reminders.</p>
                </div>
                <div className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-accent" /> Interest Groups
                  </h4>
                  <p className="text-xs text-slate-500">Join building-specific groups based on your major, hobbies, or year.</p>
                </div>
                <div className="group p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-accent/50 transition-colors">
                  <h4 className="font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Smartphone className="w-5 h-5 text-accent" /> Building Integration
                  </h4>
                  <p className="text-xs text-slate-500">Verified resident access ensures a safe and reliable community environment.</p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Built With</p>
                <div className="flex flex-wrap gap-3">
                  {['React Native', 'Firebase', 'Tailwind CSS', 'Framer Motion', 'TypeScript'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://github.com/athenabao/Apartmate-App" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-lg shadow-slate-200"
                >
                  <Smartphone className="w-5 h-5" />
                  Beta Repo
                </a>
                <a 
                  href="https://github.com/gobrianyu/apartmate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-all"
                >
                  <Search className="w-5 h-5" />
                  Site Source Code
                </a>
              </div>

              <div className="p-6 bg-accent/50 rounded-3xl border border-accent/20 flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-50 rounded-2xl flex items-center justify-center text-slate-900 shrink-0 shadow-lg shadow-accent/20">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">The "I Needed This :')" Friend Award</h4>
                  <p className="text-xs text-slate-600 font-medium mb-2">Best Social Computing Design · 2026</p>
                  <p className="text-sm text-slate-500 italic leading-relaxed">
                    Recognised for excellence in creating low-friction social connections that address real student needs.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center overflow-hidden">
                <img src="/assets/AMlogo-dark-blue.png" alt="Apartmate Logo" className="w-7 h-7 object-contain" referrerPolicy="no-referrer" />
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
