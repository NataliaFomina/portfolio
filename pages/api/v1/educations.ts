import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { Education } from "api/educations"
import { graphCmsUrl } from "@/config"

export async function getEducations(): Promise<Education[]> {
  const gql = new GraphQLClient(graphCmsUrl)
  const { educations } = await gql.request(`
  {
    educations(orderBy: sortOrder_DESC) {
      id
      title
      websiteUrl
      location
      duration
      description
    }
  }
  `)
  return educations
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }
  res.status(200).json(await getEducations())
}
