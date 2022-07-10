import React, { createRef } from "react"
import { Routes, Route } from "react-router-dom"
import ScrollReveal from "./utils/ScrollReveal"

// Layouts
import LayoutDefault from "./layouts/LayoutDefault"

// Views
import Home from "./views/Home"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"

type Props = {
  location?: any
}

class App extends React.Component<Props, {}> {
  scrollReveal = createRef<ScrollReveal>()

  componentDidMount() {
    document.body.classList.add("is-loaded")
    if (this.scrollReveal?.current) {
      this.scrollReveal.current.init()
    }
  }

  // Route change
  componentDidUpdate(prevProps: Props) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (this.scrollReveal?.current) {
        this.scrollReveal.current.init()
      }
    }
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <ScrollReveal
          ref={this.scrollReveal}
          children={() => (
            <Routes>
              <Route element={<LayoutDefault />}>
                <Route path="/" element={<Home />} />
              </Route>
            </Routes>
          )}
        />
      </ChakraProvider>
    )
  }
}

export default App
