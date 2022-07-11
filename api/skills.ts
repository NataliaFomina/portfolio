import { apiUrl } from "@/config"

export type Skill = {
  id: string
  name: string
}

export async function getSkills(): Promise<Skill[]> {
  const response = await fetch(`${apiUrl}/api/v1/skills`)
  return response.json()
}
