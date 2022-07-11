import type { NextApiRequest, NextApiResponse } from "next"
import { GraphQLClient } from "graphql-request"
import { graphCmsUrl } from "@/config"
import { Project } from "api/projects"

export async function getProjects(): Promise<Project[]> {
  const gql = new GraphQLClient(graphCmsUrl)
  const { projects } = await gql.request(`
  {
    projects(orderBy: sortOrder_DESC) {
      id
      title
      headline
      websiteUrl
      githubUrl
      description
      tags
    }
  }
  `)
  return projects
}

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }
  res.status(200).json(await getProjects())
}
