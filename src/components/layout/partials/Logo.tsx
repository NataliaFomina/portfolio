import classNames from "classnames"
import { Link } from "react-router-dom"
import Image from "../../elements/Image"
import logo from "../../../assets/images/logo.svg"

type Props = {
  className?: string
}

const Logo = ({ className, ...props }: Props) => {
  const classes = classNames("brand", className)

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/">
          <Image src={logo} alt="Abstract" width={32} height={32} />
        </Link>
      </h1>
    </div>
  )
}

export default Logo
