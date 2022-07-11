import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { Skill } from "api/skills"

export async function getSkills(): Promise<Skill[]> {
  const gql = new GraphQLClient(process.env.GRAPH_CMS_URL as string)
  const { skills } = await gql.request(`
  {
    skills(orderBy: sortOrder_DESC) {
      id
      name
    }
  }
  `)
  return skills
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }

  res.status(200).json(await getSkills())
}
