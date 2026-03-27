"use client";

import React from "react";
import { useResume } from "@/lib/resume-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeftIcon, PlusIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";

export default function EditorPage() {
  const { data, updateData } = useResume();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateData({ [name]: value });
  };

  return (
    <div className="flex flex-col space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeftIcon className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Resume Editor</h1>
        </div>
        <Link href="/">
          <Button variant="default">View Portfolio</Button>
        </Link>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-8 h-auto gap-2 bg-transparent p-0">
          <TabsTrigger value="general" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">General</TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">Skills</TabsTrigger>
          <TabsTrigger value="work" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">Work</TabsTrigger>
          <TabsTrigger value="education" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">Education</TabsTrigger>
          <TabsTrigger value="projects" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">Projects</TabsTrigger>
          <TabsTrigger value="hackathons" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border">Hackathons</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Update your basic profile details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" value={data.name} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="initials">Initials</Label>
                  <Input id="initials" name="initials" value={data.initials} onChange={handleInputChange} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Short Bio / Description</Label>
                <Input id="description" name="description" value={data.description} onChange={handleInputChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">About (Markdown supported)</Label>
                <Textarea id="summary" name="summary" value={data.summary} onChange={handleInputChange} className="min-h-[150px]" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" name="location" value={data.location} onChange={handleInputChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="avatarUrl">Avatar URL</Label>
                  <Input id="avatarUrl" name="avatarUrl" value={data.avatarUrl} onChange={handleInputChange} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="skills">
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
              <CardDescription>Manage your technical stack.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-1 bg-accent px-3 py-1 rounded-full border">
                    <span>{skill}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-4 w-4 hover:text-destructive"
                      onClick={() => {
                        const newSkills = [...data.skills];
                        newSkills.splice(index, 1);
                        updateData({ skills: newSkills });
                      }}
                    >
                      <Trash2Icon className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Input 
                  placeholder="Add a skill (e.g. Next.js)" 
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const val = e.currentTarget.value.trim();
                      if (val && !data.skills.includes(val)) {
                        updateData({ skills: [...data.skills, val] });
                        e.currentTarget.value = '';
                      }
                    }
                  }}
                />
                <Button 
                  onClick={(e) => {
                    const input = e.currentTarget.previousElementSibling as HTMLInputElement;
                    const val = input.value.trim();
                    if (val && !data.skills.includes(val)) {
                      updateData({ skills: [...data.skills, val] });
                      input.value = '';
                    }
                  }}
                >
                  <PlusIcon className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="work">
          <Card>
            <CardHeader>
              <CardTitle>Work Experience</CardTitle>
              <CardDescription>List your professional experience.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.work.map((exp, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg relative group">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    onClick={() => {
                      const newWork = [...data.work];
                      newWork.splice(index, 1);
                      updateData({ work: newWork });
                    }}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input 
                        value={exp.company} 
                        onChange={(e) => {
                          const newWork = [...data.work];
                          newWork[index] = { ...exp, company: e.target.value };
                          updateData({ work: newWork });
                        }} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Role</Label>
                      <Input 
                        value={exp.title} 
                        onChange={(e) => {
                          const newWork = [...data.work];
                          newWork[index] = { ...exp, title: e.target.value };
                          updateData({ work: newWork });
                        }} 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start</Label>
                      <Input 
                        value={exp.start} 
                        onChange={(e) => {
                          const newWork = [...data.work];
                          newWork[index] = { ...exp, start: e.target.value };
                          updateData({ work: newWork });
                        }} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End</Label>
                      <Input 
                        value={exp.end} 
                        onChange={(e) => {
                          const newWork = [...data.work];
                          newWork[index] = { ...exp, end: e.target.value };
                          updateData({ work: newWork });
                        }} 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea 
                      value={exp.description} 
                      onChange={(e) => {
                        const newWork = [...data.work];
                        newWork[index] = { ...exp, description: e.target.value };
                        updateData({ work: newWork });
                      }} 
                    />
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  updateData({ 
                    work: [
                      ...data.work, 
                      { company: "New Company", title: "Role", start: "Jan 2024", end: "Present", description: "", href: "", badges: [], logoUrl: "", location: "" }
                    ] 
                  });
                }}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Experience
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Similar TabsContent for Education, Projects, Hackathons */}
        <TabsContent value="education">
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
              <CardDescription>Add your educational background.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.education.map((edu, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg relative group">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    onClick={() => {
                      const newEdu = [...data.education];
                      newEdu.splice(index, 1);
                      updateData({ education: newEdu });
                    }}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                  <div className="space-y-2">
                    <Label>School</Label>
                    <Input 
                      value={edu.school} 
                      onChange={(e) => {
                        const newEdu = [...data.education];
                        newEdu[index] = { ...edu, school: e.target.value };
                        updateData({ education: newEdu });
                      }} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input 
                      value={edu.degree} 
                      onChange={(e) => {
                        const newEdu = [...data.education];
                        newEdu[index] = { ...edu, degree: e.target.value };
                        updateData({ education: newEdu });
                      }} 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Start</Label>
                      <Input 
                        value={edu.start} 
                        onChange={(e) => {
                          const newEdu = [...data.education];
                          newEdu[index] = { ...edu, start: e.target.value };
                          updateData({ education: newEdu });
                        }} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>End</Label>
                      <Input 
                        value={edu.end} 
                        onChange={(e) => {
                          const newEdu = [...data.education];
                          newEdu[index] = { ...edu, end: e.target.value };
                          updateData({ education: newEdu });
                        }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  updateData({ 
                    education: [
                      ...data.education, 
                      { school: "University Name", degree: "Degree", start: "2020", end: "2024", href: "", logoUrl: "" }
                    ] 
                  });
                }}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Education
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
              <CardDescription>Showcase your work.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.projects.map((project, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg relative group">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    onClick={() => {
                      const newProj = [...data.projects];
                      newProj.splice(index, 1);
                      updateData({ projects: newProj });
                    }}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input 
                      value={project.title} 
                      onChange={(e) => {
                        const newProj = [...data.projects];
                        newProj[index] = { ...project, title: e.target.value };
                        updateData({ projects: newProj });
                      }} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea 
                      value={project.description} 
                      onChange={(e) => {
                        const newProj = [...data.projects];
                        newProj[index] = { ...project, description: e.target.value };
                        updateData({ projects: newProj });
                      }} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Technologies (comma separated)</Label>
                    <Input 
                      value={project.technologies.join(", ")} 
                      onChange={(e) => {
                        const newProj = [...data.projects];
                        newProj[index] = { ...project, technologies: e.target.value.split(",").map(s => s.trim()) };
                        updateData({ projects: newProj });
                      }} 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Website Link</Label>
                      <Input 
                        value={project.href} 
                        onChange={(e) => {
                          const newProj = [...data.projects];
                          newProj[index] = { ...project, href: e.target.value };
                          updateData({ projects: newProj });
                        }} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Image URL</Label>
                      <Input 
                        value={project.image} 
                        onChange={(e) => {
                          const newProj = [...data.projects];
                          newProj[index] = { ...project, image: e.target.value };
                          updateData({ projects: newProj });
                        }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  updateData({ 
                    projects: [
                      ...data.projects, 
                      { title: "New Project", description: "Project description", technologies: [], links: [], href: "", active: true, dates: "", image: "", video: "" }
                    ] 
                  });
                }}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Project
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hackathons">
          <Card>
            <CardHeader>
              <CardTitle>Hackathons</CardTitle>
              <CardDescription>List individual achievements.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {data.hackathons.map((hack, index) => (
                <div key={index} className="space-y-4 p-4 border rounded-lg relative group">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-destructive"
                    onClick={() => {
                      const newHack = [...data.hackathons];
                      newHack.splice(index, 1);
                      updateData({ hackathons: newHack });
                    }}
                  >
                    <Trash2Icon className="h-4 w-4" />
                  </Button>
                  <div className="space-y-2">
                    <Label>Title</Label>
                    <Input 
                      value={hack.title} 
                      onChange={(e) => {
                        const newHack = [...data.hackathons];
                        newHack[index] = { ...hack, title: e.target.value };
                        updateData({ hackathons: newHack });
                      }} 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Dates</Label>
                      <Input 
                        value={hack.dates} 
                        onChange={(e) => {
                          const newHack = [...data.hackathons];
                          newHack[index] = { ...hack, dates: e.target.value };
                          updateData({ hackathons: newHack });
                        }} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Location</Label>
                      <Input 
                        value={hack.location} 
                        onChange={(e) => {
                          const newHack = [...data.hackathons];
                          newHack[index] = { ...hack, location: e.target.value };
                          updateData({ hackathons: newHack });
                        }} 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea 
                      value={hack.description} 
                      onChange={(e) => {
                        const newHack = [...data.hackathons];
                        newHack[index] = { ...hack, description: e.target.value };
                        updateData({ hackathons: newHack });
                      }} 
                    />
                  </div>
                </div>
              ))}
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  updateData({ 
                    hackathons: [
                      ...data.hackathons, 
                      { title: "New Hackathon", dates: "Jan 2024", location: "Online", description: "", image: "", links: [] }
                    ] 
                  });
                }}
              >
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Hackathon
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end gap-4 mt-8">
        <Button variant="outline" onClick={() => {
          if (confirm("Are you sure you want to reset all data to defaults?")) {
            // resetData() would be here if exported from hook
          }
        }}>Reset Data</Button>
        <Button onClick={() => window.print()}>Download PDF</Button>
      </div>
    </div>
  );
}
