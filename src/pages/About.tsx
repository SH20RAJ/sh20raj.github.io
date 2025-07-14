
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleSection } from '@/components/CollapsibleSection';
import { CodeBlock } from '@/components/CodeBlock';

const About = () => {
  const codeExample = `const developer = {
  name: "Shaswat Raj",
  role: "Full-Stack Developer",
  location: "India",
  experience: "5+ years",
  github: "SH20RAJ",
  email: "sh20raj@gmail.com",
  
  achievements: {
    repositories: 400,
    githubStars: "100K+",
    npmPackages: 50,
    activeStartups: 8,
    clientRetention: "100%"
  },
  
  specialties: [
    "AI Integration", 
    "Open Source Leadership", 
    "Scalable Architecture",
    "Team Leadership"
  ],
  
  currentlyLearning: ["Web3", "Advanced AI/ML", "Cloud Architecture"],
  
  getSkills() {
    return {
      frontend: ["React (95%)", "Next.js (95%)", "TypeScript (90%)"],
      backend: ["Node.js (90%)", "Laravel (85%)", "MySQL (90%)"],
      ai: ["OpenAI (90%)", "WebRTC (85%)", "Voice Processing"],
      tools: ["Docker (80%)", "AWS (75%)", "GitHub Actions (85%)"]
    };
  }
};`;

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">🧑‍💻 About Me</h1>
        <p className="text-lg text-muted-foreground">
          Full Stack Developer | Open Source Enthusiast | AI & Web Innovation Specialist
        </p>
      </div>

      {/* Bio Section */}
      <Card>
        <CardHeader>
          <CardTitle>👋 Professional Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Passionate Full Stack Developer with 5+ years of experience building scalable web applications 
            and innovative digital solutions. Proven expertise in modern JavaScript frameworks, AI integration, 
            and leading cross-functional teams.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Creator of 40+ open-source projects with combined 100K+ GitHub stars, demonstrating strong 
            technical leadership and community contribution. I specialize in React, Next.js, Node.js, 
            and AI-powered applications with a focus on performance, security, and user experience.
          </p>
          <div className="flex flex-wrap gap-2 pt-4">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">
              400+ Repositories
            </span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">
              100K+ GitHub Stars
            </span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">
              8 Active Startups
            </span>
          </div>
        </CardContent>
      </Card>

      {/* Code representation */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">💻 In Code</h2>
        <CodeBlock code={codeExample} language="javascript" filename="shaswat-raj.js" />
      </div>

      {/* Professional Experience */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">💼 Professional Experience</h2>
        
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Full Stack Developer</CardTitle>
              <CardDescription>Freelance & Contract Work | 2023 - Present</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Lead development of complex full-stack applications using Next.js, React, and Node.js</li>
                <li>• Architect scalable solutions handling 10K+ concurrent users</li>
                <li>• Implement AI-powered features using OpenAI and custom ML models</li>
                <li>• Delivered 15+ production applications with 99.9% uptime</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Full Stack Developer</CardTitle>
              <CardDescription>Various Companies | 2021 - 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Developed responsive web applications using React, Vue.js, and Angular</li>
                <li>• Built robust backend APIs with Node.js, Express, and Laravel</li>
                <li>• Optimized application performance resulting in 40% faster load times</li>
                <li>• Reduced deployment time by 60% through CI/CD implementation</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Skills */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">🛠️ Technical Skills</h2>
        
        <CollapsibleSection title="Programming Languages" icon="💻" defaultOpen>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Primary Languages</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>JavaScript</strong> (95%) - Expert level with ES6+</li>
                <li>• <strong>TypeScript</strong> (90%) - Strong typing, advanced patterns</li>
                <li>• <strong>Python</strong> (80%) - Web development, automation</li>
                <li>• <strong>PHP</strong> (85%) - Laravel, custom frameworks</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Web Technologies</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>HTML5</strong> (98%) - Semantic markup, accessibility</li>
                <li>• <strong>CSS3</strong> (95%) - Flexbox, Grid, animations</li>
                <li>• <strong>SQL</strong> (90%) - Complex queries, optimization</li>
                <li>• <strong>C/C++</strong> (70%) - Algorithm implementation</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Frontend Technologies" icon="🎨">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Frameworks & Libraries</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>React</strong> (95%) - Hooks, Context API, performance optimization</li>
                <li>• <strong>Next.js</strong> (95%) - SSR, SSG, API routes, middleware</li>
                <li>• <strong>Vue.js</strong> (85%) - Composition API, Vuex, Nuxt.js</li>
                <li>• <strong>Angular</strong> (75%) - Services, RxJS, TypeScript integration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Styling & Animation</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>TailwindCSS</strong> (95%) - Utility-first approach</li>
                <li>• <strong>Framer Motion</strong> (90%) - Complex animations</li>
                <li>• <strong>SCSS/Sass</strong> (90%) - Advanced features, mixins</li>
                <li>• <strong>Styled Components</strong> (85%) - CSS-in-JS</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Backend & Database" icon="🗄️">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Backend Technologies</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>Node.js</strong> (90%) - Express, API development</li>
                <li>• <strong>Laravel</strong> (85%) - Eloquent ORM, authentication</li>
                <li>• <strong>Express.js</strong> (90%) - Middleware, RESTful APIs</li>
                <li>• <strong>GraphQL</strong> (75%) - Schema design, resolvers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Databases</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>MySQL</strong> (90%) - Complex queries, optimization</li>
                <li>• <strong>MongoDB</strong> (85%) - Aggregation pipelines</li>
                <li>• <strong>PostgreSQL</strong> (85%) - Advanced features</li>
                <li>• <strong>Redis</strong> (70%) - Caching, session management</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="AI & Modern Technologies" icon="🤖">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">AI Integration</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>OpenAI Integration</strong> (90%) - GPT models, embeddings</li>
                <li>• <strong>Voice Processing</strong> (85%) - Whisper API, ElevenLabs</li>
                <li>• <strong>Machine Learning</strong> (75%) - Model integration</li>
                <li>• <strong>AI-Powered Apps</strong> (90%) - Full-stack AI solutions</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Modern Web Tech</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>WebRTC</strong> (85%) - Peer-to-peer communication</li>
                <li>• <strong>WebSockets</strong> (85%) - Real-time applications</li>
                <li>• <strong>PWA Development</strong> (90%) - Service workers</li>
                <li>• <strong>Browser Extensions</strong> (85%) - Chrome/Firefox</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="DevOps & Tools" icon="⚙️">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-foreground mb-2">Development Tools</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>Git/GitHub</strong> (95%) - Advanced workflows</li>
                <li>• <strong>VS Code</strong> (98%) - Extension development</li>
                <li>• <strong>Docker</strong> (80%) - Containerization</li>
                <li>• <strong>GitHub Actions</strong> (85%) - CI/CD pipelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Cloud & Deployment</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>AWS</strong> (75%) - EC2, S3, Lambda</li>
                <li>• <strong>Cloudflare</strong> (80%) - CDN, security</li>
                <li>• <strong>Vercel</strong> (90%) - Next.js deployment</li>
                <li>• <strong>Netlify</strong> (85%) - Static site hosting</li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>
      </div>

      {/* Key Achievements */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">🏆 Key Achievements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🌟 Open Source Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">400+</div>
                  <p className="text-sm text-muted-foreground">Active Repositories</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100K+</div>
                  <p className="text-sm text-muted-foreground">GitHub Stars</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 50+ NPM packages published</li>
                <li>• GitHub Arctic Code Vault Contributor</li>
                <li>• Top 1% developer in region</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💼 Professional Success
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <p className="text-sm text-muted-foreground">Production Apps</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-600">100%</div>
                  <p className="text-sm text-muted-foreground">Client Retention</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• 99.9% uptime across all projects</li>
                <li>• 8 active startup ventures</li>
                <li>• Performance optimization expert</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* What Sets Me Apart */}
      <Card>
        <CardHeader>
          <CardTitle>🌟 What Sets Me Apart</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-medium text-foreground mb-2">Technical Excellence</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Clean, maintainable code</li>
                <li>• Performance optimization</li>
                <li>• Security-first approach</li>
                <li>• Comprehensive testing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Leadership & Innovation</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Team collaboration expert</li>
                <li>• Mentoring junior developers</li>
                <li>• AI integration pioneer</li>
                <li>• Open source advocate</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-foreground mb-2">Business Impact</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Scalable architecture design</li>
                <li>• Cross-functional communication</li>
                <li>• Problem-solving mindset</li>
                <li>• Future-ready solutions</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
