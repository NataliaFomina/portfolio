import classNames from "classnames"
import { Textarea, Stack, Input, Button } from "@chakra-ui/react"
import SectionHeader from "../shared/SectionHeader"

const Contact = () => (
  <section id="contact" className={classNames("signin", "section")}>
    <div className="container">
      <div className={classNames("signin-inner", "section-inner")}>
        <SectionHeader
          tag="h1"
          data={{
            title: "Write me a note",
          }}
          className="center-content"
        />
        <form
          action="https://formspree.io/f/xpzonjaz"
          method="POST"
          style={{ maxWidth: "700px", margin: "0 auto" }}
        >
          <fieldset>
            <Stack spacing={3}>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Your email"
                autoComplete="off"
                required
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                autoComplete="off"
                required
              />
            </Stack>
            <div className="mt-24 mb-32">
              <Button colorScheme="brand" w="full">
                Send
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
)

export default Contact
