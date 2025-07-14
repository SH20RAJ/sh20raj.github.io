
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const blogPosts = [
  {
    title: 'Building AI-Powered Voice Applications with OpenAI Whisper and ElevenLabs',
    excerpt: 'A comprehensive guide to creating natural voice conversation platforms using modern AI APIs, WebRTC, and real-time processing techniques.',
    date: '2024-12-15',
    readTime: '12 min read',
    tags: ['AI', 'Voice Processing', 'OpenAI', 'WebRTC'],
    featured: true,
  },
  {
    title: 'Scaling React Applications: Lessons from 100K+ Users',
    excerpt: 'Performance optimization strategies, caching techniques, and architecture decisions that helped scale applications to handle massive user loads.',
    date: '2024-12-01',
    readTime: '10 min read',
    tags: ['React', 'Performance', 'Scalability', 'Architecture'],
    featured: true,
  },
  {
    title: 'From Idea to 100K+ GitHub Stars: Open Source Journey',
    excerpt: 'My experience building and maintaining 40+ open source projects, community building strategies, and sustainable development practices.',
    date: '2024-11-20',
    readTime: '15 min read',
    tags: ['Open Source', 'GitHub', 'Community', 'Leadership'],
  },
  {
    title: 'Building Cross-Platform Desktop Apps with Tauri and React',
    excerpt: 'Why I chose Tauri over Electron for TubeSonic, performance comparisons, and a complete guide to building secure desktop applications.',
    date: '2024-11-05',
    readTime: '8 min read',
    tags: ['Desktop Apps', 'Tauri', 'React', 'Cross-Platform'],
  },
  {
    title: 'Next.js App Router: Advanced Patterns and Best Practices',
    excerpt: 'Deep dive into Next.js 13+ App Router, server components, streaming, and advanced patterns for building production-ready applications.',
    date: '2024-10-22',
    readTime: '14 min read',
    tags: ['Next.js', 'App Router', 'Server Components', 'SSR'],
  },
  {
    title: 'TypeScript Advanced Patterns for Full-Stack Development',
    excerpt: 'Advanced TypeScript techniques, type-safe API design, and patterns that improve developer experience in full-stack applications.',
    date: '2024-10-08',
    readTime: '11 min read',
    tags: ['TypeScript', 'API Design', 'Full-Stack', 'DX'],
  },
  {
    title: 'Startup Tech Stack Decisions: 8 Ventures, 8 Different Approaches',
    excerpt: 'Technology choices across my 8 startup ventures, what worked, what didn\'t, and key learnings for technical decision making.',
    date: '2024-09-25',
    readTime: '16 min read',
    tags: ['Startups', 'Tech Stack', 'Decision Making', 'Leadership'],
  },
  {
    title: 'Web Scraping at Scale: Ethical Practices and Modern Techniques',
    excerpt: 'Building robust web scraping systems, handling anti-bot measures, rate limiting, and maintaining ethical standards.',
    date: '2024-09-10',
    readTime: '9 min read',
    tags: ['Web Scraping', 'Data Extraction', 'Ethics', 'Automation'],
  },
];

const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">✍️ Blog</h1>
        <p className="text-lg text-muted-foreground">
          Insights on full-stack development, AI integration, open source leadership, 
          and startup building from my 5+ years of experience.
        </p>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">AI & Voice Processing</span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">React & Next.js</span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">Open Source</span>
          <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full">Startup Journey</span>
        </div>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <Card 
            key={index} 
            className={`hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer ${
              post.featured ? 'border-blue-200 dark:border-blue-800 bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20' : ''
            }`}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="text-xl font-semibold text-foreground hover:text-blue-600 transition-colors">
                    {post.title}
                    {post.featured && <span className="ml-2 text-sm">⭐</span>}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {post.excerpt}
                  </CardDescription>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Featured Topics */}
      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-4">📚 What I Write About</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-medium text-foreground mb-2">🤖 AI & Innovation</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• OpenAI integration and voice processing</li>
              <li>• AI-powered application development</li>
              <li>• Machine learning in web applications</li>
              <li>• Future of AI in full-stack development</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-foreground mb-2">🚀 Development & Leadership</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• React, Next.js, and TypeScript best practices</li>
              <li>• Scalable architecture and performance</li>
              <li>• Open source project management</li>
              <li>• Startup technical decision making</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="text-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
        <h3 className="text-xl font-semibold text-foreground mb-4">
          📝 Stay Updated
        </h3>
        <p className="text-muted-foreground mb-6">
          I'm working on more in-depth tutorials, AI integration guides, and startup journey insights. 
          Follow me on GitHub or connect on LinkedIn to stay updated with my latest content!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://github.com/SH20RAJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-lg transition-colors"
          >
            Follow on GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sh20raj" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>

      {/* GitHub Stats */}
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">400+</div>
            <p className="text-muted-foreground">Repositories</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">100K+</div>
            <p className="text-muted-foreground">GitHub Stars</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <p className="text-muted-foreground">NPM Packages</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
