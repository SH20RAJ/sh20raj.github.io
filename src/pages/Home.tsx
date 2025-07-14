
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleSection } from '@/components/CollapsibleSection';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12">
        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
          <span className="text-white font-bold text-2xl">SR</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Hi, I'm Shaswat Raj 👋
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Full Stack Developer | Open Source Enthusiast | AI & Web Innovation Specialist
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
          and innovative digital solutions. Creator of 40+ open-source projects with 100K+ GitHub stars.
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
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              📁 Featured Projects
            </CardTitle>
            <CardDescription>
              10+ innovative full-stack applications and tools
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/projects">Browse Projects →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ✍️ Tech Insights
            </CardTitle>
            <CardDescription>
              Thoughts on AI, web development, and innovation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/blog">Read Blog →</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🧑‍💻 About Me
            </CardTitle>
            <CardDescription>
              5+ years experience, 40+ open source projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="ghost" asChild className="w-full justify-start">
              <Link to="/about">Learn More →</Link>
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Key Achievements */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-foreground">🏆 Key Achievements</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-blue-600">400+</div>
              <p className="text-muted-foreground">Active Repositories</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-green-600">100K+</div>
              <p className="text-muted-foreground">Combined GitHub Stars</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-purple-600">8</div>
              <p className="text-muted-foreground">Active Startups</p>
            </CardContent>
          </Card>
        </div>
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
