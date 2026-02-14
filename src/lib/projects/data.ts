import type { ProjectContent } from "./types";
import content from "@/content/content.json";

const projects = content.projects as unknown as ProjectContent[];

export function getAllProjectSlugs(): string[] {
  return projects
    .map((p) => p.slug)
    .filter((s): s is string => typeof s === "string" && s.trim().length > 0);
}

export function getProjectBySlug(slug: string): ProjectContent | undefined {
  return projects.find((p) => p.slug === slug);
}
