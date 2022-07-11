import { apiUrl } from "@/config"

export type Profile = {
  id: string
  title: string
  fullName: string
  legalFullName: string
  bio: string
  location: string
  nationality: string
  locationDetailed: string
  email: string
  phone: string
  languages: string
  languagesDetailed: string
  portfolioUrl: string
  linkedInUrl: string
  gitHubUrl: string
  formUrl: string
}

export async function getProfile(): Promise<Profile> {
  const response = await fetch(`${apiUrl}/api/v1/profile`)
  return response.json()
}
