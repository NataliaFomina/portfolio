import classNames from "classnames"
import SectionHeader from "./partials/SectionHeader"
import Button from "../elements/Button"
import { Textarea, Stack, Input } from "@chakra-ui/react"

type Props = {
  className?: string
  topOuterDivider?: boolean
  bottomOuterDivider?: boolean
  topDivider?: boolean
  bottomDivider?: boolean
  hasBgColor?: boolean
  invertColor?: boolean
}

const Contacts = ({
  className,
  topOuterDivider = false,
  bottomOuterDivider = false,
  topDivider = false,
  bottomDivider = false,
  hasBgColor = false,
  invertColor = false,
  ...props
}: Props) => (
  <section
    {...props}
    id="contact"
    className={classNames(
      "signin section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )}
  >
    <div className="container">
      <div
        className={classNames(
          "signin-inner section-inner",
          topDivider && "has-top-divider",
          bottomDivider && "has-bottom-divider"
        )}
      >
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
                required
              />
              <Textarea
                id="message"
                name="message"
                placeholder="Your message"
                required
              />
            </Stack>
            <div className="mt-24 mb-32">
              <Button color="primary" wide>
                Send
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  </section>
)

export default Contacts
