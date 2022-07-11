import { extendTheme } from "@chakra-ui/react"
import styles from "./styles"
import colors from "./colors"
import Heading from "./components/heading"
import Input from "./components/input"
import Textarea from "./components/textarea"
import Button from "./components/button"

const overrides = {
  styles,
  colors,
  components: {
    Heading,
    Input,
    Textarea,
    Button,
  },
}

export default extendTheme(overrides)
