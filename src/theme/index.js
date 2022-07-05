import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import Heading from "./components/heading"
import Input from "./components/input"
import Textarea from "./components/textarea"

const overrides = {
  styles,
  components: {
    Heading,
    Input,
    Textarea,
  },
}

export default extendTheme(overrides)
