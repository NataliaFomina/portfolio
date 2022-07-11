import { apiUrl } from "@/config"

export type Education = {
  id: string
  title: string
  websiteUrl: string
  location: string
  duration: string
  description: string
}

export async function getEducations(): Promise<Education[]> {
  const response = await fetch(`${apiUrl}/api/v1/educations`)
  return response.json()
}
