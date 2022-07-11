export type Experience = {
  id: string
  title: string
  websiteUrl: string
  location: string
  duration: string
  description: string
}

export async function getExperiences(): Promise<Experience[]> {
  const response = await fetch(`${process.env.API_URL}/api/v1/experiences`)
  return response.json()
}
