
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin, Globe, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Get in touch for collaborations or opportunities',
      value: 'sh20raj@gmail.com',
      link: 'mailto:sh20raj@gmail.com',
      primary: true,
    },
    {
      icon: Github,
      title: 'GitHub',
      description: 'Check out my 400+ repositories and open source work',
      value: '@SH20RAJ',
      link: 'https://github.com/SH20RAJ',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      description: 'Connect for professional networking',
      value: 'linkedin.com/in/sh20raj',
      link: 'https://linkedin.com/in/sh20raj',
    },
    {
      icon: Globe,
      title: 'Portfolio',
      description: 'Visit my complete portfolio website',
      value: 'sh20raj.github.io',
      link: 'https://sh20raj.github.io',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold text-foreground">📬 Contact</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities, collaborations,
          or just having a chat about technology, AI, and full-stack development.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">Open Source Enthusiast</span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">AI Integration Expert</span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">Startup Founder</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {contactMethods.map((method, index) => (
          <Card
            key={index}
            className={`hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${method.primary ? 'border-blue-200 dark:border-blue-800 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/20' : ''
              }`}
          >
            <CardHeader className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-accent rounded-lg flex items-center justify-center">
                <method.icon className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {method.title}
              </CardTitle>
              <CardDescription className="text-center">
                {method.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="font-mono text-sm text-muted-foreground mb-4">
                {method.value}
              </p>
              <Button
                variant={method.primary ? "default" : "outline"}
                size="sm"
                asChild
                className="w-full"
              >
                <a href={method.link} target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Startup Portfolio Highlight */}
      <Card className="border-purple-200 dark:border-purple-800 bg-gradient-to-r from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            🚀 Startup Portfolio & Investment Opportunities
          </CardTitle>
          <CardDescription>
            8 Active Startups | Multiple Industries | Series A to Pre-Launch Stages
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            I've founded and co-founded multiple innovative startups across AI/ML, productivity,
            social media, and health tech sectors. Explore live stats, investment opportunities,
            and try products on my startup dashboard.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="https://startups.shraj.workers.dev" target="_blank" rel="noopener noreferrer">
                🚀 Visit Startup Dashboard
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="https://sh20raj.github.io/projects" target="_blank" rel="noopener noreferrer">
                📁 View All Projects
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              💼 Let's Work Together
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              I'm currently available for:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Full-stack development projects (React, Next.js, Node.js)</li>
              <li>• AI integration and voice processing applications</li>
              <li>• Technical leadership and team mentoring</li>
              <li>• Open source collaboration and contributions</li>
              <li>• Startup consulting and CTO advisory roles</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              🌍 Availability & Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-medium text-foreground">📍 Based in India</p>
              <p className="text-sm text-muted-foreground">Open to remote work worldwide</p>
            </div>
            <div>
              <p className="font-medium text-foreground">⏰ Response Time</p>
              <p className="text-sm text-muted-foreground">Usually within 12-24 hours</p>
            </div>
            <div>
              <p className="font-medium text-foreground">📊 GitHub Stats</p>
              <p className="text-sm text-muted-foreground">400+ repos, 100K+ stars, 50+ packages</p>
            </div>
            <div>
              <p className="font-medium text-foreground">🏆 Success Rate</p>
              <p className="text-sm text-muted-foreground">100% client retention, 99.9% uptime</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center p-8 bg-muted rounded-lg">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          Ready to build something amazing together?
        </h3>
        <p className="text-muted-foreground mb-6">
          Whether you have a startup idea, need technical leadership, or want to collaborate
          on open source projects, I'd love to hear from you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild>
            <a href="mailto:sh20raj@gmail.com">
              Send me an email
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/sh20raj" target="_blank" rel="noopener noreferrer">
              Connect on LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
