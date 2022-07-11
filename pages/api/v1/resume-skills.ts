import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { ResumeSkill } from "@/api/resume-skills"

export async function getResumeSkills(): Promise<ResumeSkill[]> {
  const gql = new GraphQLClient(process.env.GRAPH_CMS_URL as string)
  const { resumeSkills } = await gql.request(`
  {
    resumeSkills(orderBy: sortOrder_DESC) {
      id
      title
      description
    }
  }
  `)
  return resumeSkills
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }

  res.status(200).json(await getResumeSkills())
}
