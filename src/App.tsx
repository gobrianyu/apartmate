import { Home, MessageSquare, User, Calendar, ShoppingBag, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, ReactNode } from 'react';
import { Event, Community } from './types';

const MOCK_USER = {
  name: 'Alex',
  apartment: '4B',
  avatar: 'https://picsum.photos/seed/alex/100/100'
};

const MOCK_EVENTS: Event[] = [
  { id: '1', title: 'Rooftop Yoga', date: 'Mar 15', time: '8:00 AM', location: 'Deck A', category: 'wellness' },
  { id: '2', title: 'Wine & Cheese Night', date: 'Mar 18', time: '7:00 PM', location: 'Lounge', category: 'social' },
  { id: '3', title: 'HVAC Maintenance', date: 'Mar 20', time: '9:00 AM', location: 'Building Wide', category: 'maintenance' },
];

const MOCK_COMMUNITIES: Community[] = [
  { id: '1', name: 'Marketplace', description: 'Buy, sell, or trade with neighbors.', memberCount: 124, image: 'https://picsum.photos/seed/market/400/300', type: 'marketplace' },
  { id: '2', name: 'Pet Owners', description: 'Tips and playdates for our furry friends.', memberCount: 45, image: 'https://picsum.photos/seed/pets/400/300', type: 'hobby' },
  { id: '3', name: 'Book Club', description: 'Monthly reading and discussion group.', memberCount: 18, image: 'https://picsum.photos/seed/books/400/300', type: 'hobby' },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-sans pb-24">
      {/* Top Header */}
      <header className="px-6 pt-8 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back, {MOCK_USER.name}</h1>
            <p className="text-stone-500 text-sm">Apt {MOCK_USER.apartment} • UrbanNest Residences</p>
          </div>
          <img 
            src={MOCK_USER.avatar} 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </header>

      <main className="px-6 space-y-8">
        {/* Quick Stats / Announcements */}
        <section className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
            <p className="text-xs text-stone-400 uppercase font-bold tracking-wider mb-1">Packages</p>
            <p className="text-2xl font-semibold">2 Ready</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-stone-100">
            <p className="text-xs text-stone-400 uppercase font-bold tracking-wider mb-1">Rent Due</p>
            <p className="text-2xl font-semibold">In 5 days</p>
          </div>
        </section>

        {/* Event Calendar */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <button className="text-sm text-emerald-600 font-medium">View Calendar</button>
          </div>
          <div className="space-y-3">
            {MOCK_EVENTS.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-stone-100"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex flex-col items-center justify-center text-emerald-700">
                  <span className="text-xs font-bold uppercase">{event.date.split(' ')[0]}</span>
                  <span className="text-lg font-bold leading-none">{event.date.split(' ')[1]}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-stone-800">{event.title}</h3>
                  <p className="text-xs text-stone-500">{event.time} • {event.location}</p>
                </div>
                <Calendar className="w-5 h-5 text-stone-300" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Communities */}
        <section>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-semibold">Communities</h2>
            <button className="text-sm text-emerald-600 font-medium">Explore All</button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {MOCK_COMMUNITIES.map((community, idx) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="relative h-48 rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={community.image} 
                  alt={community.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5 w-full">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white font-bold text-xl">{community.name}</h3>
                      <p className="text-white/70 text-sm line-clamp-1">{community.description}</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Users className="w-3 h-3 text-white" />
                      <span className="text-white text-xs font-medium">{community.memberCount}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-stone-200 px-8 py-4 flex justify-between items-center z-50">
        <NavButton 
          active={activeTab === 'home'} 
          onClick={() => setActiveTab('home')} 
          icon={<Home />} 
          label="Home" 
        />
        <NavButton 
          active={activeTab === 'chat'} 
          onClick={() => setActiveTab('chat')} 
          icon={<MessageSquare />} 
          label="Chat" 
        />
        <NavButton 
          active={activeTab === 'profile'} 
          onClick={() => setActiveTab('profile')} 
          icon={<User />} 
          label="Profile" 
        />
      </nav>
    </div>
  );
}

function NavButton({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center gap-1 transition-colors ${active ? 'text-emerald-600' : 'text-stone-400'}`}
    >
      <div className="relative">
        {active && (
          <motion.div 
            layoutId="nav-active"
            className="absolute -inset-2 bg-emerald-50 rounded-xl -z-10"
          />
        )}
        {icon}
      </div>
      <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
    </button>
  );
}
