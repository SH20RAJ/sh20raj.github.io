import React, { useState, useEffect } from 'react';import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';import { Badge } from '@/components/ui/badge';import { Button } from '@/components/ui/button';import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';import { ExternalLink, Calendar, Clock, Eye, Heart, MessageCircle } from 'lucide-react';interface DevToBlog {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  readable_publish_date: string;
  public_reactions_count: number;
  comments_count: number;
  page_views_count: number;
  reading_time_minutes: number;
  tag_list: string[];
  cover_image: string;
  body_html?: string;
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

const Blog = () => {
  const [blogs, setBlogs] = useState<DevToBlog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<DevToBlog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fallback data in case API fails
  const fallbackBlogs: DevToBlog[] = [
    {
      id: 1,
      title: 'Building AI-Powered Voice Applications with OpenAI Whisper and ElevenLabs',
      description: 'A comprehensive guide to creating natural voice conversation platforms using modern AI APIs, WebRTC, and real-time processing techniques.',
      url: 'https://dev.to/sh20raj/building-ai-voice-apps',
      published_at: '2024-12-15T10:00:00Z',
      readable_publish_date: 'Dec 15',
      public_reactions_count: 45,
      comments_count: 12,
      page_views_count: 1250,
      reading_time_minutes: 12,
      tag_list: ['ai', 'voice', 'openai', 'webrtc'],
      cover_image: '',
      user: {
        name: 'Shaswat Raj',
        username: 'sh20raj',
        profile_image: ''
      }
    },
    {
      id: 2,
      title: 'Scaling React Applications: Lessons from 100K+ Users',
      description: 'Performance optimization strategies, caching techniques, and architecture decisions that helped scale applications to handle massive user loads.',
      url: 'https://dev.to/sh20raj/scaling-react-apps',
      published_at: '2024-12-01T10:00:00Z',
      readable_publish_date: 'Dec 1',
      public_reactions_count: 78,
      comments_count: 23,
      page_views_count: 2100,
      reading_time_minutes: 10,
      tag_list: ['react', 'performance', 'scalability', 'architecture'],
      cover_image: '',
      user: {
        name: 'Shaswat Raj',
        username: 'sh20raj',
        profile_image: ''
      }
    }
  ];

  // Fetch blogs from dev.to API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles?username=sh20raj&per_page=20');
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Showing cached content.');
        // Fallback to static data if API fails
        setBlogs(fallbackBlogs);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [fallbackBlogs]);

  // Fetch individual blog content when opening dialog
  const fetchBlogContent = async (blog: DevToBlog) => {
    try {
      const response = await fetch(`https://dev.to/api/articles/${blog.id}`);
      if (response.ok) {
        const fullBlog = await response.json();
        setSelectedBlog({ ...blog, body_html: fullBlog.body_html });
      } else {
        setSelectedBlog(blog);
      }
    } catch (error) {
      console.error('Error fetching blog content:', error);
      setSelectedBlog(blog);
    }
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-foreground">✍️ Latest Blog Posts</h1>
          <p className="text-lg text-muted-foreground">
            Loading latest articles from dev.to...
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="animate-pulse">
              <CardHeader>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
              </CardHeader>
              <CardContent>
                <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">✍️ Latest Blog Posts</h1>
        <p className="text-lg text-muted-foreground max-w-3xl">
          Insights on software development, AI/ML, startup building, and technology trends. 
          All articles are fetched live from my dev.to profile.
        </p>
        {error && (
          <div className="p-4 bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">{error}</p>
          </div>
        )}
        <div className="flex items-center gap-4">
          <Badge variant="outline" className="text-sm">
            📡 Live from dev.to
          </Badge>
          <Button variant="outline" size="sm" asChild>
            <a href="https://dev.to/sh20raj" target="_blank" rel="noopener noreferrer">
              Visit dev.to Profile <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">📊 GitHub Activity</h2>
        <div className="rounded-lg overflow-hidden border">
          <img 
            src="https://github-readme-activity-graph.vercel.app/graph?username=sh20raj&bg_color=d1ebff&color=000000&line=e594e0&point=54e316&area=true&hide_border=true"
            alt="Shaswat's GitHub Activity Graph"
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog, index) => (
          <Card key={blog.id} className={`hover:shadow-lg transition-shadow ${index < 2 ? 'border-blue-200 dark:border-blue-800' : ''}`}>
            {blog.cover_image && (
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={blog.cover_image} 
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            <CardHeader className={index < 2 ? 'border-l-4 border-l-blue-500' : ''}>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg leading-tight line-clamp-2">
                  {blog.title}
                </CardTitle>
                {index < 2 && <Badge variant="secondary">Featured</Badge>}
              </div>
              <CardDescription className="line-clamp-3">
                {blog.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Tags */}
              <div className="flex flex-wrap gap-1">
                {blog.tag_list.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {blog.tag_list.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{blog.tag_list.length - 3}
                  </Badge>
                )}
              </div>

              {/* Meta Information */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {blog.readable_publish_date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {blog.reading_time_minutes} min
                </div>
              </div>

              {/* Engagement Stats */}
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  {blog.public_reactions_count}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  {blog.comments_count}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {blog.page_views_count}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="default" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => fetchBlogContent(blog)}
                    >
                      Read Here
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <DialogTitle className="text-xl leading-tight mb-2">
                            {selectedBlog?.title}
                          </DialogTitle>
                          <DialogDescription className="text-base">
                            {selectedBlog?.description}
                          </DialogDescription>
                        </div>
                      </div>
                      
                      {/* Article Meta */}
                      <div className="flex items-center gap-4 py-4 border-b">
                        <div className="flex items-center gap-2">
                          {selectedBlog?.user.profile_image && (
                            <img 
                              src={selectedBlog.user.profile_image} 
                              alt={selectedBlog.user.name}
                              className="w-8 h-8 rounded-full"
                            />
                          )}
                          <div>
                            <p className="font-medium text-sm">{selectedBlog?.user.name}</p>
                            <p className="text-xs text-muted-foreground">@{selectedBlog?.user.username}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground ml-auto">
                          <span>{selectedBlog?.readable_publish_date}</span>
                          <span>{selectedBlog?.reading_time_minutes} min read</span>
                        </div>
                      </div>
                    </DialogHeader>

                    {/* Article Content */}
                    <div className="prose prose-sm max-w-none dark:prose-invert">
                      {selectedBlog?.body_html ? (
                        <div dangerouslySetInnerHTML={{ __html: selectedBlog.body_html }} />
                      ) : (
                        <div className="text-center py-8">
                          <p className="text-muted-foreground mb-4">Content preview not available.</p>
                          <Button asChild>
                            <a href={selectedBlog?.url} target="_blank" rel="noopener noreferrer">
                              Read Full Article on dev.to <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Footer Actions */}
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {selectedBlog?.public_reactions_count} reactions
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-3 w-3" />
                          {selectedBlog?.comments_count} comments
                        </span>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <a href={selectedBlog?.url} target="_blank" rel="noopener noreferrer">
                          Open on dev.to <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" size="sm" asChild>
                  <a href={blog.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center pt-8 border-t">
        <h3 className="text-lg font-semibold mb-2">Want to read more?</h3>
        <p className="text-muted-foreground mb-4">
          Follow me on dev.to for the latest articles on web development, AI, and startup building.
        </p>
        <Button asChild>
          <a href="https://dev.to/sh20raj" target="_blank" rel="noopener noreferrer">
            Follow on dev.to <ExternalLink className="h-4 w-4 ml-2" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Blog;