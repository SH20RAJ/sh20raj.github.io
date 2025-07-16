import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleSection } from '@/components/CollapsibleSection';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center space-y-6 py-12">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-lg object-cover"
        />
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hi, I'm Shaswat Raj 👋
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer | Open Source Enthusiast | AI & Web Innovation Specialist
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-6">
          <Button asChild size="lg">
            <Link to="/projects">View My Work</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link to="/contact">Get In Touch</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://startups.shraj.workers.dev" target="_blank" rel="noopener noreferrer">
              Startup Portfolio
            </a>
          </Button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap justify-center gap-4 py-6">
        <Link to="/projects" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors flex items-center gap-2">
              📁 Featured Projects
        </Link>
        
        <Link to="/blog" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors flex items-center gap-2">
              ✍️ Tech Insights
        </Link>
        
        <Link to="/stats" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors flex items-center gap-2">
              🏆 Achievements
        </Link>
        
        <Link to="/stats" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors flex items-center gap-2">
              📊 Live Stats
        </Link>
        
        <Link to="/about" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors flex items-center gap-2">
              🧑‍💻 About Me
        </Link>
            </div>
      

      {/* Skills Overview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🚀 What I Do</h2>

        <CollapsibleSection title="Frontend Development" icon="⚛️" defaultOpen>
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Building responsive, interactive user interfaces with modern frameworks and cutting-edge technologies.
            </p>
            <div className="flex flex-wrap gap-2">
              {['React (95%)', 'Next.js (95%)', 'TypeScript (90%)', 'TailwindCSS (95%)', 'Vue.js (85%)', 'Framer Motion (90%)'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Backend Development" icon="🛠️">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Creating robust APIs and scalable server-side applications with modern architecture patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Node.js (90%)', 'Express (90%)', 'Laravel (85%)', 'MySQL (90%)', 'MongoDB (85%)', 'PostgreSQL (85%)'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="AI & Modern Tech" icon="🤖">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Integrating AI capabilities and leveraging cutting-edge technologies for innovative solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {['OpenAI Integration (90%)', 'WebRTC (85%)', 'WebSockets (85%)', 'PWA Development (90%)', 'Browser Extensions (85%)'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="DevOps & Tools" icon="⚙️">
          <div className="space-y-3">
            <p className="text-muted-foreground">
              Streamlined development workflow with modern tools, cloud platforms, and best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Git/GitHub (95%)', 'Docker (80%)', 'AWS (75%)', 'Cloudflare (80%)', 'GitHub Actions (85%)'].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </CollapsibleSection>
      </div>


    </div>
  );
};

export default Home;
