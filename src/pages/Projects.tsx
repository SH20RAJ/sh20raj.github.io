import React, { useState, useEffect, useMemo } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X } from 'lucide-react';
import projectsData from '@/data/projects.json';

// Transform the JSON data to match the expected format
const projects = projectsData.map(project => ({
  title: project.name,
  description: project.description,
  techStack: project.tech || [],
  liveUrl: project.live,
  githubUrl: project.github,
  image: project.image,
  category: project.category
}));

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
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">{projectsData.length}+ Projects</span>
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
            <div className="text-2xl font-bold text-blue-600">{projectsData.length}+</div>
            <p className="text-sm text-muted-foreground">Active Projects</p>
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