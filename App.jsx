import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  User as UserIcon, 
  Settings as SettingsIcon, 
  Moon, 
  Globe, 
  Target, 
  LogOut, 
  ChevronRight, 
  Home as HomeIcon,
  Activity,
  BookOpen,
  Calendar,
  Menu,
  X,
  Heart,
  Brain,
  Zap,
  Music,
  Smile,
  ArrowLeft,
  Play,
  CheckCircle,
  Plus,
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Facebook,
  Bell,
  Smartphone,
  FileText,
  DollarSign,
  Clock,
  Search,
  Filter,
  Check,
  AlertCircle,
  Briefcase,
  Sparkles,      
  ArrowRight,    
  TrendingUp,    
  Users,         
  Award,
  BarChart2,
  Thermometer,
  Wind,
  MessageSquare,
  Share2,
  ThumbsUp,
  Video,
  Clipboard,
  List,
  AlertTriangle,
  Flame,
  CheckSquare,
  RefreshCw
} from 'lucide-react';

// --- Global Brand Styles & Fonts ---
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Poppins:wght@400;500;600;700&family=Roboto+Condensed:wght@300;400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
    
    :root {
      --cognitio-primary: #b425aa;
      --cognitio-purple: #c80ec9;
      --cognitio-gold: #D4AF37;
      --cognitio-neutral: #f8f9fa;
    }

    body {
      font-family: 'Roboto Condensed', sans-serif;
      background-color: var(--cognitio-neutral);
      color: #334155;
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Poppins', sans-serif;
    }

    .brand-font {
      font-family: 'Montserrat', sans-serif;
    }
    
    .oswald-font {
      font-family: 'Oswald', sans-serif;
    }

    .animate-fadeIn {
      animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* For Well-Be Charts */
    .bar-graph {
      display: flex;
      align-items: flex-end;
      gap: 4px;
      height: 60px;
    }
    .bar {
      flex: 1;
      background: #e2e8f0;
      border-radius: 2px;
      transition: height 0.5s ease;
    }
    .bar.active {
      background: #b425aa;
    }
  `}</style>
);

// --- Constants & Assets ---

const BRAND = {
  primary: '#b425aa',
  purple: '#c80ec9',
  gold: '#D4AF37',
  neutral: '#f8f9fa'
};

const ICONS = {
  logo: 'https://579557-c8ed3d25e86041dcbd15c382ded585e0-1-latest.app.mgx.dev/assets/cognitio-main-logo.png',
  resilience: 'https://appimize.app/assets/apps/user_1097/images/20aa97ab307c_945_1097.png',
  habit: 'https://appimize.app/assets/apps/user_1097/images/2eb035e66921_749_1097.png',
  wellbe: 'https://appimize.app/assets/apps/user_1097/images/59e4d59b8372_727_1097.png',
  emotion: 'https://appimize.app/assets/apps/user_1097/images/1fbf3fc9faa2_81_1097.png',
  oasis: 'https://appimize.app/assets/apps/user_1097/images/30eb29593783_604_1097.png',
  growth: 'https://appimize.app/assets/apps/user_1097/images/2d5cb5dadead_225_1097.png',
  psych: 'https://appimize.app/assets/apps/user_1097/images/bae59281d566_404_1097.png',
  partner: 'https://appimize.app/assets/apps/user_1097/images/d2e70ec09200_94_1097.png',
  rooted: 'https://appimize.app/assets/apps/user_1097/images/bfbcbeb7bb69_808_1097.png',
  awareness: 'https://appimize.app/assets/apps/user_1097/images/ee4a29071876_35_1097.png',
  technology: 'https://appimize.app/assets/apps/user_1097/images/a00e6e94af97_251_1097.png'
};

// --- Types ---

type UserType = 'individual' | 'mhp';
type ViewType = 'home' | 'onboarding' | 'dashboard' | 'settings' | 'book-service' | 'resilience-navigator' | 'habit-studio' | 'well-be' | 'emotion-tracker' | 'oasis' | 'subscription-plans' | 'growth-tribe' | 'psych-assess';

interface UserProfile {
  occupation?: string;
  age?: number;
  bio?: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  userType: UserType;
  language: 'en' | 'tl';
  region: string;
  goals: string[];
  vulnerabilities: string[];
  onboardingCompleted: boolean;
  profile: UserProfile;
  gamification: {
    level: number;
    xp: number;
    badges: string[];
    streaks: Record<string, any>;
    achievements: string[];
  };
}

// --- UI Components ---

const Button = ({ className, variant = 'primary', children, ...props }: any) => {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2";
  const variants = {
    primary: `bg-[${BRAND.primary}] text-white hover:bg-[#9d1f94] shadow-md hover:shadow-lg`,
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
    ghost: "text-gray-600 hover:bg-gray-100",
    danger: "bg-red-50 text-red-600 hover:bg-red-100",
    gold: `bg-[${BRAND.gold}] text-white hover:bg-[#b8962e] shadow-md`
  };
  return <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>{children}</button>;
};

const Card = ({ children, className }: any) => <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 ${className}`}>{children}</div>;
const Input = ({ className, ...props }: any) => <input className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[${BRAND.primary}] focus:border-transparent ${className}`} {...props} />;
const Label = ({ children, className }: any) => <label className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}>{children}</label>;
const Switch = ({ checked, onCheckedChange }: any) => (
  <button 
    onClick={() => onCheckedChange(!checked)} 
    className={`w-11 h-6 rounded-full transition-colors relative ${checked ? `bg-[${BRAND.primary}]` : 'bg-gray-200'}`}
  >
    <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${checked ? 'left-[calc(100%-22px)]' : 'left-0.5'}`} />
  </button>
);
const Badge = ({ children, variant = 'default' }: any) => {
  const styles = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-green-100 text-green-800",
    warning: "bg-yellow-100 text-yellow-800",
    danger: "bg-red-100 text-red-800",
    purple: `bg-purple-100 text-[${BRAND.primary}]`
  };
  return <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[variant as keyof typeof styles]}`}>{children}</span>;
};

// --- Layout & Helper Components ---

const CognitioLogo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' | 'xl' }) => {
  const sizes = { sm: 'w-8 h-8', md: 'w-12 h-12', lg: 'w-24 h-24', xl: 'w-32 h-32' };
  return <img src={ICONS.logo} alt="Cognitio+ Logo" className={`${sizes[size]} object-contain`} />;
};

const AppLayout = ({ children, user, onLogout, onNavigate, onLoginClick }: { children: React.ReactNode; user: User | null; onLogout: () => void; onNavigate: (view: ViewType) => void; onLoginClick: () => void }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fa]">
      <GlobalStyles />
      <header className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
            <CognitioLogo size="sm" />
            <span className="brand-font font-bold text-xl text-[${BRAND.primary}]">Cognitio<span className={`text-[${BRAND.gold}]`}>+</span></span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {user ? (
              <>
                <nav className="flex items-center gap-4">
                  <button onClick={() => onNavigate('dashboard')} className="text-gray-600 hover:text-[${BRAND.primary}] font-medium transition-colors">Dashboard</button>
                  <button onClick={() => onNavigate('settings')} className="text-gray-600 hover:text-[${BRAND.primary}] font-medium transition-colors">Settings</button>
                </nav>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[${BRAND.primary}]/10 text-[${BRAND.primary}] flex items-center justify-center font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <button onClick={onLogout} className="text-sm text-red-500 hover:text-red-700 font-medium">Sign Out</button>
                </div>
              </>
            ) : (
               <Button onClick={onLoginClick} size="sm">Login / Sign Up</Button>
            )}
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 p-4 shadow-lg absolute w-full z-40">
             <nav className="flex flex-col gap-4">
                {user ? (
                  <>
                    <button onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }} className="text-left text-gray-700">Dashboard</button>
                    <button onClick={() => { onNavigate('settings'); setIsMenuOpen(false); }} className="text-left text-gray-700">Settings</button>
                    <button onClick={() => { onLogout(); setIsMenuOpen(false); }} className="text-left text-red-500">Sign Out</button>
                  </>
                ) : (
                  <Button onClick={() => { onLoginClick(); setIsMenuOpen(false); }}>Login / Sign Up</Button>
                )}
             </nav>
          </div>
        )}
      </header>
      <main className="flex-1 w-full max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 py-0 animate-fadeIn">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-4"><CognitioLogo size="sm" /></div>
          <p className="text-sm text-gray-500 font-['Roboto_Condensed']">
            © 2024 Cognitio Health. All rights reserved. <br/>
            <span className={`text-[${BRAND.primary}] font-bold`}>Powered by Awareness, Enhanced by Technology.</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

// --- Feature & Home Components ---

const StatsInfographic = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 px-4 w-full max-w-6xl mx-auto">
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 bg-purple-100 text-[${BRAND.primary}] rounded-full flex items-center justify-center mb-4`}><Users size={24}/></div>
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2 brand-font">1 in 5</h3>
      <p className="text-gray-500 text-sm">Adults experience mental illness each year.</p>
    </Card>
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4`}><TrendingUp size={24}/></div>
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2 brand-font">60%</h3>
      <p className="text-gray-500 text-sm">Of people with mental health conditions go untreated.</p>
    </Card>
    <Card className="p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
      <div className={`w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4`}><Award size={24}/></div>
      <h3 className="text-5xl font-extrabold text-gray-900 mb-2 brand-font">4x</h3>
      <p className="text-gray-500 text-sm">Improvement in resilience with regular practice.</p>
    </Card>
  </div>
);

const PillarsOfWellness = () => {
    const pillars = [
        { name: "Resilience", desc: "Your Partner in Resilience", icon: ICONS.partner },
        { name: "Culture", desc: "Rooted in Culture", icon: ICONS.rooted },
        { name: "Awareness", desc: "Powered by Awareness", icon: ICONS.awareness },
        { name: "Technology", desc: "Enhanced by Technology", icon: ICONS.technology },
    ];

    return (
        <div className="py-12 bg-white border-t border-b border-gray-100">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {pillars.map((pillar, i) => (
                        <div key={i} className="text-center p-4 rounded-xl transition duration-300 hover:bg-gray-50">
                            <img src={pillar.icon} 
                                 alt={pillar.name} 
                                 className="h-14 w-14 mx-auto mb-3 object-contain"
                                 onError={(e) => {
                                     e.currentTarget.onerror = null;
                                     e.currentTarget.src='https://placehold.co/56x56/b425aa/ffffff?text=P';
                                 }}/>
                            <p className="text-lg font-semibold text-gray-900 brand-font">{pillar.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const FeatureShowcase = () => {
  const features = [
    { title: "Performance Analytics", desc: "Deep-dive reports on your cognitive and physical metrics over time to identify trends.", icon: <BarChart2 size={24} className={`text-[${BRAND.primary}]`} /> },
    { title: "Learning Resources", desc: "Access curated articles, guided meditations, and training modules based on your personal data.", icon: <BookOpen size={24} className={`text-[${BRAND.primary}]`} /> },
    { title: "Secure & Private", desc: "Your data privacy is our top priority, secured with enterprise-grade encryption and access controls.", icon: <Lock size={24} className={`text-[${BRAND.primary}]`} /> },
    { title: "Resilience Navigator", desc: "Build strength with CASE Framework.", icon: <Shield size={24} className={`text-[${BRAND.primary}]`} /> },
    { title: "Habit Design Studio", desc: "Create lasting habits with B=MAP.", icon: <CheckSquare size={24} className={`text-[${BRAND.primary}]`} /> },
    { title: "Well-Be Monitor", desc: "Track physiological stress via HRV.", icon: <Heart size={24} className={`text-[${BRAND.primary}]`} /> },
    
  ];

  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4 oswald-font tracking-wide">
        Core Capabilities & Tools
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12">
        A unified platform for holistic mental, emotional, and physical health.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feat, i) => (
          <Card key={i} className="flex flex-col p-6 transition-all duration-300 hover:shadow-xl border-t-4 border-[${BRAND.primary}]">
            <div className={`w-12 h-12 bg-purple-50 rounded-full flex items-center justify-center mb-4`}>
                {feat.icon}
            </div>
            <h4 className="font-bold text-xl text-gray-800 brand-font mb-2">{feat.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

const DashboardUpdateNote = () => (
    <div className={`py-12 bg-[${BRAND.purple}]/5 border-y border-[${BRAND.primary}]/20 mb-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-xl font-bold text-[${BRAND.primary}] mb-2 oswald-font tracking-wider">
                Individual Dashboard Update
            </h3>
            <p className="text-lg text-[${BRAND.primary}]/90">
                <span className="font-semibold">Note:</span> The Comprehensive Wellness Tools have been successfully relocated and are now accessible within your dedicated 
                <span className="font-bold"> Individual Dashboard</span> upon login, ensuring a more personalized and focused experience.
            </p>
        </div>
    </div>
);


const HomeView = ({ onLoginClick }: { onLoginClick: () => void }) => (
  <>
    {/* 1. Hero & Mission Section (Combined) */}
    <div className={`cognitio-banner-bg py-24 text-center text-white relative overflow-hidden`} style={{ background: `linear-gradient(135deg, ${BRAND.primary} 0%, ${BRAND.purple} 100%)` }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <p className="text-xl font-medium tracking-widest uppercase mb-3 text-[${BRAND.gold}]">
                Empowering Integrated Healthcare
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight brand-font">
                Integrated Cognitive & Health Tracking
            </h1>
            <p className="mt-6 text-xl max-w-3xl mx-auto font-light">
                Cognitio+ provides a unified platform for managing mental performance, physical activity, and overall health data, helping you achieve optimal well-being.
            </p>
            <div className="mt-10 flex justify-center space-x-4">
                <Button 
                    className="px-10 py-3 text-lg font-bold shadow-2xl hover:bg-white hover:text-[${BRAND.primary}] transform hover:scale-105"
                    style={{ backgroundColor: BRAND.gold }}
                    onClick={onLoginClick}
                >
                    Begin Your Journey <ArrowRight size={20} />
                </Button>
                <Button 
                    variant="outline"
                    className="px-10 py-3 text-lg font-bold border-2 border-white text-white bg-transparent hover:bg-white/10"
                    onClick={() => document.getElementById('features-section')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    Explore Features
                </Button>
            </div>
        </div>
         {/* Background pattern */}
         <div className="absolute inset-0 z-0 opacity-10">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                        <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>
    </div>

    {/* 2. Pillars / Core Values */}
    <PillarsOfWellness />

    {/* 3. Stats Infographic */}
    <StatsInfographic />

    {/* 4. Feature Showcase (Core Capabilities) */}
    <div id="features-section" className="scroll-mt-20">
      <FeatureShowcase />
    </div>

    {/* 5. Dashboard Update Note */}
    <DashboardUpdateNote />

    {/* 6. Final Call to Action */}
    <div className="py-20 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 oswald-font tracking-wide">Ready to Transform Your Health?</h2>
        <p className="text-xl text-gray-600 mb-8">Join thousands who are optimizing their well-being with Cognitio+.</p>
        <Button 
            className="px-12 py-4 text-xl font-bold shadow-2xl"
            onClick={onLoginClick}
        >
            Start for Free <ChevronRight size={20} />
        </Button>
    </div>
  </>
);

const MockLoginView = ({ onNavigate }: { onNavigate: (view: ViewType) => void }) => (
    <Card className="max-w-md mx-auto p-8 mt-16">
        <h2 className={`text-3xl font-bold text-[${BRAND.primary}] mb-6 text-center`}>Welcome Back</h2>
        <form className="space-y-4">
            <div>
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="you@example.com" />
            </div>
            <div>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="********" />
            </div>
            <Button className="w-full mt-6" onClick={(e) => { e.preventDefault(); onNavigate('dashboard'); }}>Sign In</Button>
        </form>
        <p className="text-sm text-center mt-4 text-gray-500">
            New user? <button className={`text-[${BRAND.primary}] hover:underline`}>Create Account</button>
        </p>
    </Card>
);

const AppDashboard = () => (
    <Card className="p-8">
        <h2 className={`text-3xl font-bold text-[${BRAND.primary}] mb-6`}>Individual Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-4 flex items-center gap-4 border-l-4 border-green-500">
                <CheckCircle size={32} className="text-green-500" />
                <div>
                    <p className="text-lg font-semibold">Resilience Score: 8.5/10</p>
                    <p className="text-sm text-gray-500">Up 5% from last week.</p>
                </div>
            </Card>
            <Card className="p-4 flex items-center gap-4 border-l-4 border-blue-500">
                <Clock size={32} className="text-blue-500" />
                <div>
                    <p className="text-lg font-semibold">Mindfulness Streak: 12 Days</p>
                    <p className="text-sm text-gray-500">Keep up the great work!</p>
                </div>
            </Card>
            <Card className="p-4 flex items-center gap-4 border-l-4 border-yellow-500">
                <Activity size={32} className="text-yellow-500" />
                <div>
                    <p className="text-lg font-semibold">Well-Be Status: Moderate Stress</p>
                    <p className="text-sm text-gray-500">Try an Oasis session.</p>
                </div>
            </Card>
        </div>

        <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Recommended Actions</h3>
            <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <Zap size={20} className="text-orange-500" />
                        <span>Review your latest Habit Studio progress.</span>
                    </div>
                    <Button variant="ghost" className={`text-[${BRAND.primary}] p-0 h-auto`}>Go <ChevronRight size={16} /></Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                        <Music size={20} className="text-pink-500" />
                        <span>Listen to a guided sleep meditation from Oasis.</span>
                    </div>
                    <Button variant="ghost" className={`text-[${BRAND.primary}] p-0 h-auto`}>Go <ChevronRight size={16} /></Button>
                </div>
            </div>
        </div>
    </Card>
);

// --- Main App Component ---

const initialUser: User = {
  id: 'mock-user-123',
  name: 'Alex J.',
  email: 'alex.j@example.com',
  userType: 'individual',
  language: 'en',
  region: 'NA',
  goals: ['reduce stress', 'improve sleep'],
  vulnerabilities: [],
  onboardingCompleted: true,
  profile: {},
  gamification: {
    level: 5,
    xp: 450,
    badges: ['Explorer', 'Mindful Starter'],
    streaks: {},
    achievements: [],
  }
};

const App: React.FC = () => {
  // Mock authentication state (null for logged out, object for logged in)
  const [user, setUser] = useState<User | null>(null); // Start logged out
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleLogin = () => {
    // Mock login success
    setCurrentView('dashboard');
    setUser(initialUser);
  };

  const handleLogout = () => {
    // Mock logout
    setCurrentView('home');
    setUser(null);
  };

  const handleNavigate = (view: ViewType) => {
    setCurrentView(view);
    // For simplicity, reset to home if trying to navigate to a protected page while logged out
    if (view !== 'home' && !user && view !== 'onboarding') {
        setCurrentView('home');
    }
  };

  let content;
  switch (currentView) {
    case 'home':
      content = <HomeView onLoginClick={handleLogin} />;
      break;
    case 'dashboard':
      content = <AppDashboard />;
      break;
    case 'onboarding':
    case 'settings':
    case 'book-service':
    case 'resilience-navigator':
    case 'habit-studio':
    case 'well-be':
    case 'emotion-tracker':
    case 'oasis':
    case 'subscription-plans':
    case 'growth-tribe':
    case 'psych-assess':
        content = <div className="p-8 text-center"><h2 className={`text-2xl font-bold text-[${BRAND.primary}]`}>Under Construction: {currentView.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}</h2><p className="mt-4">This section would contain the detailed application feature.</p><Button onClick={() => handleNavigate('home')} className="mt-6"><ArrowLeft size={18} /> Back to Home</Button></div>;
        break;
    default:
      content = <HomeView onLoginClick={handleLogin} />;
  }

  return (
    <AppLayout 
        user={user} 
        onLogout={handleLogout} 
        onNavigate={handleNavigate} 
        onLoginClick={handleLogin}
    >
      {content}
    </AppLayout>
  );
};

export default App;
