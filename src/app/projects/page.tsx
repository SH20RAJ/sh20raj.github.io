import { ProjectsClient } from "./projects-client";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Projects — ${DATA.name}`,
  description: `A collection of products, tools, and open-source projects built by ${DATA.name}.`,
};

export default function Page() {
  return <ProjectsClient projects={DATA.projects} />;
}
