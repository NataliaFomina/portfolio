import classNames from "classnames"
import { SimpleGrid } from "@chakra-ui/react"
import Item from "./Item"
import { Skill as SkillData } from "@/api"

type Props = {
  skills: SkillData[]
}

const Skills = ({ skills }: Props) => (
  <section className={classNames("clients section", "reveal-fade")}>
    <div className="container">
      <div
        className={classNames(
          "clients-inner",
          "section-inner",
          "has-top-divider",
          "has-bottom-divider"
        )}
      >
        <SimpleGrid minChildWidth="100px" spacingY="20px">
          {skills.map((skill) => (
            <Item key={skill.id} name={skill.name} fontSize="36px" />
          ))}
        </SimpleGrid>
      </div>
    </div>
  </section>
)

export default Skills
