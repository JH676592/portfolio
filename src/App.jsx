import React, { useState, useEffect } from 'react';
import { 
  Gamepad2, 
  Users, 
  Star, 
  Briefcase, 
  Mail, 
  Github, 
  Twitter, 
  Linkedin, 
  ExternalLink,
  Trophy,
  Code,
  ChevronDown
} from 'lucide-react';

/**
 * ==================================================================================
 * 📝 STUDENT EDITING SECTION
 * Edit the data below to customize your website!
 * ==================================================================================
 */

const PERSONAL_INFO = {
  name: "Jackson Holcomb",
  title: "Software Engineer Student",
  bio: `I am a developer who has extensive experience in Roblox Game Development. I also love creating software / web scraping projects.`,
  email: "jacksonholcomb01@gmail.com",
  socials: {
    github: "https://github.com",
    twitter: "https://x.com/OminousJack",
    linkedin: "https://linkedin.com",
    roblox: "https://www.roblox.com/users/1516086396/profile"
  }
};

const SKILLS = [
  "UI/UX Design", 
  "Game Monetization", 
  "Project Management", 
  "Community Management", 
  "Python", 
  "C++", 
  "Lua", 
  "Java"
];

// SECTION: ROBLOX GAMES
// Tip: You can use direct image links for 'image', or leave as null.
// If set to null, the site will use the default icon placeholder.
const ROBLOX_GAMES = [
  {
    id: 1,
    name: "Secret Killer",
    visits: "167.9M+",
    rating: "91%",
    description: "A strategic resource management game where players build floating empires.",
    image: "https://tr.rbxcdn.com/180DAY-8caf56e5723af3c54d58cbdcd020638d/768/432/Image/Webp/noFilter" 
  },
  {
    id: 2,
    name: "Mansion Tycoon",
    visits: "67.0M+",
    rating: "88%",
    description: "An open-world roleplay experience featuring custom vehicles and housing systems.",
    image: "https://tr.rbxcdn.com/180DAY-f2fc38df38508c53f253eeb996fc96d0/768/432/Image/Webp/noFilter"
  },
  {
    id: 3,
    name: "Family Life",
    visits: "204.0M+",
    rating: "86%",
    description: "Competitive obstacle course racing with global leaderboards and seasonal rewards.",
    image: "https://tr.rbxcdn.com/180DAY-0da8921fc71f3ae1d7bdec12325308bd/768/432/Image/Webp/noFilter"
  },
  {
    id: 4,
    name: "Mining Clicker Simulator",
    visits: "77.9M+",
    rating: "93%",
    description: "Competitive obstacle course racing with global leaderboards and seasonal rewards.",
    image: "https://tr.rbxcdn.com/180DAY-7723969405b5ecc21528d54db3d64f54/768/432/Image/Webp/noFilter"
  },
  {
    id: 5,
    name: "Build a Raft",
    visits: "47.0M+",
    rating: "89%",
    description: "Competitive obstacle course racing with global leaderboards and seasonal rewards.",
    image: "https://tr.rbxcdn.com/180DAY-ec15f9745ec7a78de425d24e1ee90394/768/432/Image/Webp/noFilter"
  },
  {
    id: 6,
    name: "Speed Run Simulator",
    visits: "257.5M+",
    rating: "84%",
    description: "Competitive obstacle course racing with global leaderboards and seasonal rewards.",
    image: "https://tr.rbxcdn.com/180DAY-dab1f1924a68cd83062d5cc917067814/768/432/Image/Webp/noFilter"
  }
];

// SECTION: COMPANY COLLABORATIONS (3 Items)
const COMPANY_COLLABS = [
  {
    id: 1,
    company: "DoBig Studios",
    role: "Project Manager / Partner",
    description: "Directly collaborated with CEO for the past 6+ years. Led projects together and split profits equally."
  },
  {
    id: 2,
    company: "GameFam Studios",
    role: "Collaborator",
    description: "Collaborated and gave feedback to company leadership. Sold them 3 experiences ($200K+)."
  },
  {
    id: 3,
    company: "Indigo Studios",
    role: "Collaborator",
    description: "Sold experiences and contributed to some of their projects over the years ($65K+)."
  }
];

// SECTION: CELEBRITY COLLABORATIONS (2 Items)
const CELEB_COLLABS = [
  {
    id: 1,
    name: "Paris World",
    type: "Virtual Experience",
    description: "Worked directly with Paris Hilton's team to create a game that featured her daily life. Experience featured on varying news sites."
  },
  {
    id: 2,
    name: "24kGoldn",
    type: "Virtual Concert",
    description: "Collaborated with GameFam company to make an official Roblox event for rapper 24kGoldn."
  }
];

/**
 * ==================================================================================
 * 🛑 END EDITING SECTION
 * The code below handles the visual layout.
 * ==================================================================================
 */

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-8 h-8 text-indigo-600" />
          <span className="font-bold text-xl tracking-tight text-slate-900">{PERSONAL_INFO.name}</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">About</a>
          <a href="#projects" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Projects</a>
          <a href="#collaborations" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Collaborations</a>
          <a href="#contact" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="about" className="relative pt-20 pb-32 overflow-hidden bg-slate-50">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-slate-50"></div>
    </div>
    
    <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
        Jackson Holcomb's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Portfolio</span>
      </h1>
      
      <p className="max-w-2xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
        {PERSONAL_INFO.bio}
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#projects" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-indigo-500/20">
          View Portfolio <ChevronDown className="w-4 h-4" />
        </a>
        <a href="#contact" className="px-8 py-4 bg-white hover:bg-slate-50 text-slate-700 rounded-xl font-semibold border border-slate-200 transition-all hover:scale-105 shadow-sm">
          Contact Me
        </a>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium shadow-sm">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const StatCard = ({ label, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
    <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm text-slate-500 font-medium">{label}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

const GameCard = ({ game }) => (
  <div className="group bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-1">
    <div className="aspect-video bg-slate-100 relative overflow-hidden">
      {game.image ? (
        <img src={game.image} alt={game.name} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 group-hover:scale-105 transition-transform duration-500">
          <Gamepad2 className="w-16 h-16 text-slate-300" />
        </div>
      )}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
        {game.rating} Rating
      </div>
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{game.name}</h3>
        <div className="flex items-center gap-1 text-emerald-600 text-sm font-bold bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
          <Users className="w-3 h-3" />
          {game.visits}
        </div>
      </div>
    </div>
  </div>
);

const CollabSection = () => (
  <section id="collaborations" className="py-24 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Company Collaborations */}
      <div className="mb-20">
        <div className="flex items-center gap-3 mb-10">
          <Briefcase className="w-8 h-8 text-indigo-600" />
          <h2 className="text-3xl font-bold text-slate-900">Company Collaborations</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COMPANY_COLLABS.map((collab) => (
            <div key={collab.id} className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-colors shadow-sm">
              <div className="h-12 w-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{collab.company}</h3>
              <p className="text-indigo-600 text-sm font-medium mb-4">{collab.role}</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {collab.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Celebrity Collaborations */}
      <div>
        <div className="flex items-center gap-3 mb-10">
          <Star className="w-8 h-8 text-purple-600" />
          <h2 className="text-3xl font-bold text-slate-900">Celebrity Partnerships</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CELEB_COLLABS.map((collab) => (
            <div key={collab.id} className="relative overflow-hidden bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 shadow-sm">
              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="h-16 w-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 shrink-0 border border-purple-200">
                  <Star className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{collab.name}</h3>
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-bold mb-3 border border-purple-200">
                    {collab.type}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {collab.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-white border-t border-slate-200 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Contact me</h3>
          <p className="text-slate-500">Always looking for opportunities.</p>
        </div>
        <div className="flex gap-6">
          <a href={PERSONAL_INFO.socials.github} className="text-slate-400 hover:text-slate-900 transition-colors"><Github className="w-6 h-6" /></a>
          <a href={PERSONAL_INFO.socials.twitter} className="text-slate-400 hover:text-blue-500 transition-colors"><Twitter className="w-6 h-6" /></a>
          <a href={PERSONAL_INFO.socials.linkedin} className="text-slate-400 hover:text-blue-700 transition-colors"><Linkedin className="w-6 h-6" /></a>
          <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-indigo-600 transition-colors"><Mail className="w-6 h-6" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100">
      <Navbar />
      <Hero />
      
      {/* Stats Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon={Gamepad2} label="Projects Published" value="28+" />
            <StatCard icon={Users} label="Total Visits" value="3B+" />
            <StatCard icon={Trophy} label="Community Members" value="3M+" />
            <StatCard icon={Code} label="Years Active" value="9 Years" />
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-slate-600">A small selection of some Roblox projects. Each of these were completely coded by myself and took between anywhere from 4-7 months to complete.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ROBLOX_GAMES.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      <CollabSection />
      <Footer />
    </div>
  );
}