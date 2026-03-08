/**
 * Projects Utilities
 * Functions for reading and processing project data
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  content: string;
}

const projectsDirectory = path.join(process.cwd(), "content/projects");

/**
 * Get all projects
 */
export function getAllProjects(): Project[] {
  // Check if directory exists
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return getProjectBySlug(slug);
    })
    .filter((project): project is Project => project !== null);

  return allProjects;
}

/**
 * Get a single project by slug
 */
export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      longDescription: data.longDescription || data.description || "",
      image: data.image || "/placeholder-project.jpg",
      tags: data.tags || [],
      demoUrl: data.demoUrl,
      githubUrl: data.githubUrl,
      featured: data.featured || false,
      content,
    };
  } catch (error) {
    console.error(`Error reading project ${slug}:`, error);
    return null;
  }
}

/**
 * Get all project slugs
 */
export function getAllProjectSlugs(): string[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => fileName.replace(/\.md$/, ""));
}

/**
 * Get featured projects
 */
export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

/**
 * Get all unique tags
 */
export function getAllTags(): string[] {
  const projects = getAllProjects();
  const tags = projects.flatMap((project) => project.tags);
  return Array.from(new Set(tags));
}

/**
 * Get projects by tag
 */
export function getProjectsByTag(tag: string): Project[] {
  return getAllProjects().filter((project) => project.tags.includes(tag));
}
