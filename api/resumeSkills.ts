import { apiUrl } from "@/config"

export type ResumeSkill = {
  id: string
  title: string
  description: string
}

export async function getResumeSkills(): Promise<ResumeSkill[]> {
  const response = await fetch(`${apiUrl}/api/v1/resumeSkills`)
  return response.json()
}
