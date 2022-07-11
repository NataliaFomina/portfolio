import Image from "next/image"
import logo from "../../assets/images/logo.svg"

const Logo = () => (
  <div className="brand">
    <h1 className="m-0">
      <Image src={logo.src} alt="Abstract" width={32} height={32} />
    </h1>
  </div>
)

export default Logo
