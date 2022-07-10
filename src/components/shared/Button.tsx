import { ElementType, HTMLProps, ReactNode } from "react"
import classNames from "classnames"

interface Props extends HTMLProps<HTMLElement> {
  className?: string
  tag?: ElementType
  color?: string
  loading?: boolean
  wide?: boolean
  wideMobile?: boolean
  disabled?: boolean
  children?: ReactNode
}

const Button = ({
  className,
  tag = "button",
  color = "",
  size,
  loading = false,
  wide = false,
  wideMobile = false,
  disabled = false,
  children,
  ...props
}: Props) => {
  const classes = classNames(
    "button",
    className,
    color ? `button-${color}` : "",
    size ? `button-${size}` : "",
    {
      "is-loading": loading,
      "button-block": wide,
      "button-wide-mobile": wideMobile,
    }
  )
  const Component = tag
  return (
    <Component {...props} className={classes} disabled={disabled}>
      {children}
    </Component>
  )
}

export default Button
