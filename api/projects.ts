import { apiUrl } from "@/config"

export type Project = {
  id: string
  title: string
  headline: string
  websiteUrl: string
  githubUrl: string
  description: string
  tags: string[]
}

export async function getProjects(): Promise<Project[]> {
  const response = await fetch(`${apiUrl}/api/v1/projects`)
  const json = await response.json()
  return json.map((data: any) => ({
    ...data,
    tags: data.tags.split(",").map((tag: string) => tag.trim()),
  }))
}
