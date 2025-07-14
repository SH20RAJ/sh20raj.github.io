import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Calendar, Clock, Eye, Heart, MessageCircle } from 'lucide-react';

interface DevToBlog {
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

// Fallback data in case API fails - moved outside component to prevent recreation
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

const Blog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [blogs, setBlogs] = useState<DevToBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
  }, []); // Remove fallbackBlogs from dependency array to prevent infinite loop

  // Check if we're viewing a specific blog
  const isFullScreenView = !!slug;
  const fullScreenBlog = location.state?.blog || null;

  // Fetch full blog content for full-screen view
  useEffect(() => {
    if (isFullScreenView && fullScreenBlog && !fullScreenBlog.body_html) {
      const fetchBlogContent = async () => {
        try {
          const response = await fetch(`https://dev.to/api/articles/${fullScreenBlog.id}`);
          if (response.ok) {
            const fullBlog = await response.json();
            // Update the blog in location state
            navigate(location.pathname, { 
              state: { blog: { ...fullScreenBlog, body_html: fullBlog.body_html } },
              replace: true 
            });
          }
        } catch (error) {
          console.error('Error fetching blog content:', error);
        }
      };
      fetchBlogContent();
    }
  }, [isFullScreenView, fullScreenBlog, navigate, location.pathname]);

  // Create slug from title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Handle full screen blog viewing
  const openBlogFullScreen = (blog: DevToBlog) => {
    const blogSlug = createSlug(blog.title);
    navigate(`/blog/${blogSlug}`, { state: { blog } });
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

  // Full screen blog view
  if (isFullScreenView && fullScreenBlog) {
    return (
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="outline" onClick={() => navigate('/blog')}>
            ← Back to Blog
          </Button>
          <Button variant="outline" size="sm" asChild>
            <a href={fullScreenBlog.url} target="_blank" rel="noopener noreferrer">
              Open on dev.to <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </Button>
        </div>
        
        <article className="space-y-6">
          <header className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight">{fullScreenBlog.title}</h1>
            <p className="text-xl text-muted-foreground">{fullScreenBlog.description}</p>
            
            <div className="flex items-center gap-6 py-4 border-b">
              <div className="flex items-center gap-3">
                {fullScreenBlog.user.profile_image && (
                  <img 
                    src={fullScreenBlog.user.profile_image} 
                    alt={fullScreenBlog.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium">{fullScreenBlog.user.name}</p>
                  <p className="text-sm text-muted-foreground">@{fullScreenBlog.user.username}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {fullScreenBlog.readable_publish_date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {fullScreenBlog.reading_time_minutes} min read
                </span>
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  {fullScreenBlog.public_reactions_count}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  {fullScreenBlog.comments_count}
                </span>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:scroll-mt-20 prose-img:rounded-lg">
            {fullScreenBlog.body_html ? (
              <div dangerouslySetInnerHTML={{ __html: fullScreenBlog.body_html }} />
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground mb-6">Content not available for preview.</p>
                <Button size="lg" asChild>
                  <a href={fullScreenBlog.url} target="_blank" rel="noopener noreferrer">
                    Read Full Article on dev.to <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </div>
            )}
          </div>

          <footer className="pt-8 border-t">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  {fullScreenBlog.public_reactions_count} reactions
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  {fullScreenBlog.comments_count} comments
                </span>
              </div>
              <Button asChild>
                <a href={fullScreenBlog.url} target="_blank" rel="noopener noreferrer">
                  Engage on dev.to <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </footer>
        </article>
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
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => openBlogFullScreen(blog)}
                >
                  Read Full Article
                </Button>

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