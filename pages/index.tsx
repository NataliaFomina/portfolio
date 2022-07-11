import { ReactElement } from "react"
import Head from "next/head"
import Profile from "@/components/profile"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Layout from "@/components/layout"
import {
  getProfile,
  Profile as ProfileData,
  Skill as SkillData,
  Project as ProjectData,
  Experience as ExperienceData,
  Education as EducationData,
  getSkills,
  getProjects,
  getExperiences,
  getEducations,
} from "@/api"

type IndexPageProps = {
  profile: ProfileData
  skills: SkillData[]
  projects: ProjectData[]
  experiences: ExperienceData[]
  educations: EducationData[]
}

const IndexPage = ({
  profile,
  skills,
  projects,
  experiences,
  educations,
}: IndexPageProps) => {
  return (
    <>
      <Head>
        <title>Natalia Fomina</title>
      </Head>
      <Profile profile={profile} />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Education educations={educations} />
      <Contact />
    </>
  )
}

IndexPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getServerSideProps() {
  return {
    props: {
      profile: await getProfile(),
      skills: await getSkills(),
      projects: await getProjects(),
      experiences: await getExperiences(),
      educations: await getEducations(),
    },
  }
}

export default IndexPage
