import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import { Heading } from "@chakra-ui/react"

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(["h1", "h2", "h3"]),
}

const defaultProps = {
  children: null,
}

class SectionHeader extends React.Component {
  render() {
    const { className, data, children, ...props } = this.props

    const classes = classNames("section-header", className)

    return (
      <React.Fragment>
        {(data.title || data.paragraph) && (
          <div {...props} className={classes}>
            <div className="container-xs">
              {children}
              {data.title && (
                <Heading
                  fontSize="38px"
                  className={classNames(
                    "mt-0",
                    data.paragraph ? "mb-16" : "mb-0"
                  )}
                >
                  {data.title}
                </Heading>
              )}
              {data.paragraph && <p className="m-0">{data.paragraph}</p>}
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

SectionHeader.propTypes = propTypes
SectionHeader.defaultProps = defaultProps

export default SectionHeader
