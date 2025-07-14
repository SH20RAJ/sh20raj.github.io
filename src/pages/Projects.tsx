
import React from 'react';
import { ProjectCard } from '@/components/ProjectCard';

const projects = [
  {
    title: 'NotesFlow - Privacy-Focused Note-Taking App',
    description: 'A privacy-focused note-taking application with beautiful interface, local storage, import/export capabilities, and offline functionality. Features AES-256 encryption and PWA capabilities.',
    techStack: ['Next.js', 'React', 'PWA', 'LocalStorage', 'AES-256 Encryption'],
    liveUrl: 'https://notesflow.pages.dev',
    githubUrl: 'https://github.com/SH20RAJ/notesflow',
  },
  {
    title: 'SketchFlow - Collaborative Whiteboard Platform',
    description: 'A powerful collaborative whiteboard platform for real-time brainstorming and visual collaboration with voice/video chat integration and 50+ templates.',
    techStack: ['React', 'Canvas API', 'WebSockets', 'Node.js', 'MongoDB'],
    liveUrl: 'https://sketchflow.space',
    githubUrl: 'https://github.com/SH20RAJ/sketchflow',
  },
  {
    title: 'CreoYT - YouTube Creator Tools',
    description: 'All-in-one platform for YouTube creators with AI-powered tools for content optimization, thumbnail generation, competitor analysis, and analytics dashboard.',
    techStack: ['React', 'Next.js', 'YouTube API', 'OpenAI', 'MongoDB'],
    liveUrl: 'https://creoyt.netlify.app/',
    githubUrl: 'https://github.com/SH20RAJ/creoyt',
  },
  {
    title: 'AayeChup - AI Voice Conversation Platform',
    description: 'AI voice conversation platform enabling natural voice interactions with multiple AI personalities, real-time voice processing, and multi-language support.',
    techStack: ['Next.js', 'TypeScript', 'OpenAI Whisper', 'ElevenLabs', 'TailwindCSS'],
    liveUrl: 'https://aayechup.shade.cool',
    githubUrl: 'https://github.com/SH20RAJ/aayechup',
  },
  {
    title: 'TubeSonic - YouTube Downloader Desktop App',
    description: 'Lightning-fast desktop app for downloading YouTube videos and audio with beautiful glass morphism UI. Cross-platform compatibility built with Rust and Tauri.',
    techStack: ['Tauri', 'React', 'Rust', 'yt-dlp', 'Glass Morphism UI'],
    githubUrl: 'https://github.com/SH20RAJ/TubeSonic',
    liveUrl: 'https://github.com/SH20RAJ/TubeSonic/releases',
  },
  {
    title: 'SopPlayer - HTML5 Video Player Framework',
    description: 'A sleek and feature-rich HTML5 video player framework with intuitive custom controls, cross-browser compatibility, and customizable themes.',
    techStack: ['JavaScript', 'HTML5 Video', 'CSS', 'Media API'],
    liveUrl: 'https://sh20raj.github.io/Sopplayer/',
    githubUrl: 'https://github.com/SH20RAJ/Sopplayer',
  },
  {
    title: 'CodeSeek - AI VS Code Extension',
    description: 'AI-powered coding assistant with DeepSeek integration for VS Code. Features intelligent code completion, AI chat assistance, and bug detection.',
    techStack: ['JavaScript', 'VS Code API', 'DeepSeek AI', 'Extension Development'],
    liveUrl: 'https://marketplace.visualstudio.com/items?itemName=sh20raj.codeseek-shade',
    githubUrl: 'https://github.com/SH20RAJ/CodeSeek',
  },
  {
    title: 'Mac Cleanup Wizard - System Optimization Tool',
    description: 'Free and open-source desktop app for intelligent macOS system cleanup with AI-powered suggestions, category-wise file organization, and developer junk detection.',
    techStack: ['Electron.js', 'React', 'Node.js', 'OpenAI', 'macOS APIs'],
    githubUrl: 'https://github.com/SH20RAJ/mac-cleanup-wizard',
    liveUrl: 'https://github.com/SH20RAJ/mac-cleanup-wizard/releases',
  },
  {
    title: 'Reflecto - Daily Reflection App',
    description: 'A minimal yet smart daily reflection app with AI-curated questions, voice journaling capabilities, mood tracking, and personalized growth insights.',
    techStack: ['React', 'Next.js', 'AI', 'Tailwind CSS', 'Voice Recognition'],
    liveUrl: 'https://reflecto.netlify.app/',
    githubUrl: 'https://github.com/SH20RAJ/reflecto',
  },
  {
    title: 'Multiversal - Creative Content Platform',
    description: 'Creative platform for poets, writers, musicians, and storytellers to share diverse content with portfolio showcases and social interaction features.',
    techStack: ['Next.js', 'Prisma', 'MySQL', 'TailwindCSS', 'Social Features'],
    liveUrl: 'https://multiversal.pages.dev/',
    githubUrl: 'https://github.com/SH20RAJ/Multiversal',
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">📁 Featured Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A showcase of my innovative full-stack applications, AI-powered tools, and open-source contributions. 
          From privacy-focused note-taking apps to collaborative platforms and desktop applications.
        </p>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">400+ Repositories</span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">100K+ GitHub Stars</span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">50+ NPM Packages</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-semibold text-foreground mb-2">🚀 Startup Portfolio</h3>
        <p className="text-muted-foreground mb-4">
          I've founded 8 active startups across AI/ML, productivity, and health tech sectors. 
          Explore investment opportunities and live products on my startup dashboard.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://startups.shraj.workers.dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Visit Startup Dashboard →
          </a>
          <a 
            href="https://shaswat.live/projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-border hover:bg-accent text-foreground rounded-lg transition-colors"
          >
            View All Projects →
          </a>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border">
        <h3 className="text-lg font-semibold text-foreground mb-2">🌟 Open Source Impact</h3>
        <div className="grid md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-600">400+</div>
            <p className="text-sm text-muted-foreground">Active Repositories</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">100K+</div>
            <p className="text-sm text-muted-foreground">Combined Stars</p>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <p className="text-sm text-muted-foreground">NPM Packages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
