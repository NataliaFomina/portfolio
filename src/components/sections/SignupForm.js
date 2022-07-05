import React from "react"
import classNames from "classnames"
import { SectionProps } from "../../utils/SectionProps"
import SectionHeader from "./partials/SectionHeader"
import Button from "../elements/Button"
import { Textarea, Stack, Input } from "@chakra-ui/react"

const propTypes = {
  ...SectionProps.types,
}

const defaultProps = {
  ...SectionProps.defaults,
}

class SignupForm extends React.Component {
  render() {
    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      ...props
    } = this.props

    const outerClasses = classNames(
      "signin section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    )

    const innerClasses = classNames(
      "signin-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    )

    const sectionHeader = {
      title: "Write me a note",
    }

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              tag="h1"
              data={sectionHeader}
              className="center-content"
            />
            <div className="tiles-wrap">
              <div className="tiles-item">
                <div className="tiles-item-inner">
                  <form action="https://formspree.io/f/xpzonjaz" method="POST">
                    <fieldset>
                      <Stack spacing={3}>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          label="Email"
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
            </div>
          </div>
        </div>
      </section>
    )
  }
}

SignupForm.propTypes = propTypes
SignupForm.defaultProps = defaultProps

export default SignupForm
