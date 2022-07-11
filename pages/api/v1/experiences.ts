import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { Experience } from "@/api"

export async function getExperiences(): Promise<Experience[]> {
  const gql = new GraphQLClient(process.env.GRAPH_CMS_URL as string)
  const { workExperiences } = await gql.request(`
  {
    workExperiences(orderBy: sortOrder_DESC) {
      id
      title
      websiteUrl
      location
      duration
      description
    }
  }
  `)
  return workExperiences
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }
  res.status(200).json(await getExperiences())
}
