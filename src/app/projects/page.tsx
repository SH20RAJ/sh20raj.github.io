"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export default function ProjectsPage() {
    return (
        <main className="flex flex-col min-h-[100dvh] space-y-10 py-12 px-4 md:px-6">
            <section id="header">
                <div className="mx-auto w-full max-w-2xl space-y-8">
                    <div className="flex flex-col items-start gap-4">
                        {/* Back Button */}
                        <BlurFade delay={BLUR_FADE_DELAY}>
                            <Link
                                href="/"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 py-2 px-4 group -ml-4"
                            >
                                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                                Back to Home
                            </Link>
                        </BlurFade>

                        <BlurFade delay={BLUR_FADE_DELAY * 2}>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                All Projects
                            </h1>
                        </BlurFade>
                        <BlurFade delay={BLUR_FADE_DELAY * 3}>
                            <p className="text-muted-foreground md:text-xl">
                                A complete list of projects I&apos;ve worked on, ranging from web applications to open-source tools.
                            </p>
                        </BlurFade>
                    </div>
                </div>
            </section>

            <section id="projects">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto w-full">
                    {DATA.projects.map((project, id) => (
                        <BlurFade
                            key={project.title}
                            delay={BLUR_FADE_DELAY * 4 + id * 0.05}
                        >
                            <ProjectCard
                                href={project.href}
                                key={project.title}
                                title={project.title}
                                description={project.description}
                                dates={project.dates}
                                tags={project.technologies}
                                image={project.image}
                                video={project.video}
                                links={project.links}
                            />
                        </BlurFade>
                    ))}
                </div>
            </section>
        </main>
    );
}
