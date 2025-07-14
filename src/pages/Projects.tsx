import React, { useState, useEffect, useMemo } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

// Get unique categories and technologies for filters
const categories = [...new Set(projectsData.map(p => p.category).filter(Boolean))];
const allTechnologies = [...new Set(projectsData.flatMap(p => p.tech || []))];

// Category display names
const categoryNames: { [key: string]: string } = {
  'fullstack': 'Full-Stack',
  'websites': 'Websites',
  'desktop': 'Desktop Apps',
  'jsframeworks': 'JS Frameworks',
  'fun': 'Fun Projects',
  'vscode': 'VS Code Extensions',
  'chrome': 'Chrome Extensions',
  'jslibraries': 'JS Libraries',
  'mobile': 'Mobile Apps',
  'scraping': 'Scraping Tools',
  'php': 'PHP Projects'
};

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);


  // URL state management
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const search = urlParams.get('search') || '';
    const category = urlParams.get('category') || 'all';
    const techs = urlParams.get('tech') ? urlParams.get('tech')!.split(',') : [];
    
    setSearchQuery(search);
    setSelectedCategory(category);
    setSelectedTechs(techs);
  }, []);

  const updateURL = (search: string, category: string, techs: string[]) => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (category !== 'all') params.set('category', category);
    if (techs.length > 0) params.set('tech', techs.join(','));
    
    const newUrl = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newUrl);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    updateURL(value, selectedCategory, selectedTechs);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    updateURL(searchQuery, category, selectedTechs);
  };

  const handleTechToggle = (tech: string) => {
    const newTechs = selectedTechs.includes(tech)
      ? selectedTechs.filter(t => t !== tech)
      : [...selectedTechs, tech];
    setSelectedTechs(newTechs);
    updateURL(searchQuery, selectedCategory, newTechs);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTechs([]);
    updateURL('', 'all', []);
  };

  // Filter projects based on current filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = !searchQuery || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      const matchesTech = selectedTechs.length === 0 || 
        selectedTechs.some(tech => project.techStack.includes(tech));
      
      return matchesSearch && matchesCategory && matchesTech;
    });
  }, [searchQuery, selectedCategory, selectedTechs]);

  const activeFiltersCount = (selectedCategory !== 'all' ? 1 : 0) + selectedTechs.length;
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">📁 Featured Projects</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          A showcase of my innovative full-stack applications, AI-powered tools, and open-source contributions. 
          From privacy-focused note-taking apps to collaborative platforms and desktop applications.
        </p>
        <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">{filteredProjects.length} of {projectsData.length} Projects</span>
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">🔥 Live Portfolio</span>
          <a href="/stats" className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors">📊 View Live Stats</a>
        </div>
      </div>

      {/* Search and Filter Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filters
            {activeFiltersCount > 0 && (
              <Badge variant="secondary" className="ml-1">
                {activeFiltersCount}
              </Badge>
            )}
          </Button>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" onClick={clearFilters} className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="p-4 border rounded-lg bg-muted/50 space-y-4">
            {/* Category Filter */}
            <div>
              <h4 className="font-medium mb-2">Category</h4>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'all' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleCategoryChange('all')}
                >
                  All
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleCategoryChange(category)}
                  >
                    {categoryNames[category] || category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Technology Filter */}
            <div>
              <h4 className="font-medium mb-2">Technologies ({selectedTechs.length} selected)</h4>
              <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-2 border rounded">
                {allTechnologies.sort().map(tech => (
                  <Button
                    key={tech}
                    variant={selectedTechs.includes(tech) ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handleTechToggle(tech)}
                    className="text-xs"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Active Filters Display */}
        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Category: {categoryNames[selectedCategory] || selectedCategory}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleCategoryChange('all')}
                />
              </Badge>
            )}
            {selectedTechs.map(tech => (
              <Badge key={tech} variant="secondary" className="flex items-center gap-1">
                {tech}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => handleTechToggle(tech)}
                />
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Featured Projects Section */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Featured Projects</h2>
        
        {/* Projects Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium mb-2">No projects found</h3>
              <p>Try adjusting your search criteria or filters</p>
            </div>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
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