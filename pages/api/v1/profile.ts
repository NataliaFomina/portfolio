import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { graphCmsUrl } from "@/config"

export async function getProfile() {
  const gql = new GraphQLClient(graphCmsUrl)
  const { profiles } = await gql.request(`
  {
    profiles {
      id
      title
      fullName
      legalFullName
      bio
      location
      nationality
      locationDetailed
      email
      phone
      languages
      languagesDetailed
      portfolioUrl
      linkedInUrl
      gitHubUrl
      formUrl
    }
  }
  `)
  return profiles[0]
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }
  res.status(200).json(await getProfile())
}
