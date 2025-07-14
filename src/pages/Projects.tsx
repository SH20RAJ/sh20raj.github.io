import React, { useState, useEffect, useMemo } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, X, Package, Star, GitFork, Users, Calendar, Download, ExternalLink, Github } from 'lucide-react';
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
  const [npmPackages, setNpmPackages] = useState<any[]>([]);
  const [githubStats, setGithubStats] = useState<any>(null);
  const [npmLoading, setNpmLoading] = useState(true);
  const [githubLoading, setGithubLoading] = useState(true);

  // Fetch NPM packages
  useEffect(() => {
    const fetchNpmPackages = async () => {
      try {
        const response = await fetch('https://registry.npmjs.org/-/v1/search?text=maintainer:sh20raj&size=250');
        const data = await response.json();
        setNpmPackages(data.objects || []);
      } catch (error) {
        console.error('Error fetching NPM packages:', error);
      } finally {
        setNpmLoading(false);
      }
    };

    fetchNpmPackages();
  }, []);

  // Fetch GitHub stats
  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/users/SH20RAJ');
        const data = await response.json();
        setGithubStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setGithubLoading(false);
      }
    };

    fetchGithubStats();
  }, []);

  // Calculate NPM stats
  const npmStats = useMemo(() => {
    if (!npmPackages.length) return { totalDownloads: 0, totalPackages: 0 };
    
    const totalDownloads = npmPackages.reduce((sum, pkg) => 
      sum + (pkg.downloads?.monthly || 0), 0
    );
    
    return {
      totalDownloads,
      totalPackages: npmPackages.length,
      weeklyDownloads: npmPackages.reduce((sum, pkg) => 
        sum + (pkg.downloads?.weekly || 0), 0
      )
    };
  }, [npmPackages]);

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
          <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">{npmStats.totalPackages} NPM Packages</span>
          <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">{githubStats?.public_repos || 0} GitHub Repos</span>
        </div>
      </div>

      {/* Live Stats Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* NPM Stats */}
        <Card className="border-blue-200 dark:border-blue-800">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Package className="h-4 w-4 text-blue-600" />
              NPM Packages
            </CardTitle>
            <Badge variant="secondary" className="ml-auto">
              Live Data
            </Badge>
          </CardHeader>
          <CardContent>
            {npmLoading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{npmStats.totalPackages}</span>
                  <span className="text-sm text-muted-foreground">Published Packages</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Downloads:</span>
                    <span className="font-medium">{npmStats.totalDownloads.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Weekly Downloads:</span>
                    <span className="font-medium">{npmStats.weeklyDownloads.toLocaleString()}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://www.npmjs.com/~sh20raj" target="_blank" rel="noopener noreferrer">
                    View NPM Profile <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* GitHub Stats */}
        <Card className="border-green-200 dark:border-green-800">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              <Github className="h-4 w-4 text-green-600" />
              GitHub Profile
            </CardTitle>
            <Badge variant="secondary" className="ml-auto">
              Live Data
            </Badge>
          </CardHeader>
          <CardContent>
            {githubLoading ? (
              <div className="animate-pulse space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </div>
            ) : githubStats ? (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{githubStats.public_repos}</div>
                    <div className="text-xs text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-green-600">{githubStats.followers}</div>
                    <div className="text-xs text-muted-foreground">Followers</div>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Public Gists:</span>
                    <span className="font-medium">{githubStats.public_gists}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Following:</span>
                    <span className="font-medium">{githubStats.following}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Member Since:</span>
                    <span className="font-medium">{new Date(githubStats.created_at).getFullYear()}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href="https://github.com/SH20RAJ" target="_blank" rel="noopener noreferrer">
                    View GitHub Profile <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                Failed to load GitHub data
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* NPM Packages Section */}
      {npmPackages.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">NPM Packages</h2>
            <Button variant="outline" asChild>
              <a href="https://www.npmjs.com/~sh20raj" target="_blank" rel="noopener noreferrer">
                View All on NPM <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {npmPackages.slice(0, 6).map((pkg) => (
              <Card key={pkg.package.name} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Package className="h-4 w-4 text-blue-600" />
                      {pkg.package.name}
                    </CardTitle>
                    <Badge variant="outline">v{pkg.package.version}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {pkg.package.description || "No description available"}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Download className="h-3 w-3" />
                        Quality:
                      </span>
                      <span className="font-medium">{(pkg.score.final * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Updated:
                      </span>
                      <span className="font-medium">
                        {new Date(pkg.package.date).toLocaleDateString()}
                      </span>
                    </div>
                    {pkg.package.keywords && pkg.package.keywords.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {pkg.package.keywords.slice(0, 3).map((keyword: string) => (
                          <Badge key={keyword} variant="secondary" className="text-xs">
                            {keyword}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={pkg.package.links?.npm} target="_blank" rel="noopener noreferrer">
                        NPM <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                    {pkg.package.links?.repository && (
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={pkg.package.links.repository} target="_blank" rel="noopener noreferrer">
                          Code <Github className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

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