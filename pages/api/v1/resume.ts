import fs from "fs"
import path from "path"
import type { NextApiRequest, NextApiResponse } from "next"
import Handlebars from "handlebars"
import { Converter } from "showdown"
import { launchChromium } from "playwright-aws-lambda"
import { Project, Experience, ResumeSkill, Education } from "@/api"
import { getProfile } from "./profile"
import { getResumeSkills } from "./resumeSkills"
import { getExperiences } from "./experiences"
import { getProjects } from "./projects"
import { getEducations } from "./educations"

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  if (req.method !== "GET") {
    res.status(404).send("")
  }
  const markdown = new Converter()
  const profile = await getProfile()
  profile.languagesDetailed = markdown.makeHtml(profile.languagesDetailed)
  const resumeSkills = await getResumeSkills()
  resumeSkills.forEach((resumeSkill: ResumeSkill) => {
    resumeSkill.description = markdown.makeHtml(resumeSkill.description)
  })
  const experiences = await getExperiences()
  experiences.forEach((experience: Experience) => {
    experience.description = markdown.makeHtml(experience.description)
  })
  const projects = await getProjects()
  projects.forEach((project: Project) => {
    project.description = markdown.makeHtml(project.description)
  })
  const educations = await getEducations()
  educations.forEach((education: Education) => {
    education.description = markdown.makeHtml(education.description)
  })
  const template = fs.readFileSync(
    path.join(process.cwd(), "templates", "resume.hbs"),
    "utf8"
  )
  const html = Handlebars.compile(template)({
    profile,
    skills: resumeSkills,
    workExperiences: experiences,
    projects,
    educations,
  })
  const browser = await launchChromium({ headless: true })
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.setContent(html, { waitUntil: "networkidle" })
  const buffer = await page.pdf({
    format: "a4",
    margin: {
      top: "0.75in",
      right: "0.75in",
      bottom: "0.75in",
      left: "0.75in",
    },
  })
  res.status(200).send(buffer)
}
