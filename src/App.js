import React from "react"
import { Routes, Route } from "react-router-dom"
import ScrollReveal from "./utils/ScrollReveal"

// Layouts
import LayoutDefault from "./layouts/LayoutDefault"

// Views
import Home from "./views/Home"

import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme"

class App extends React.Component {
  componentDidMount() {
    document.body.classList.add("is-loaded")
    this.refs.scrollReveal.init()
  }

  // Route change
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.refs.scrollReveal.init()
    }
  }

  render() {
    return (
      <ChakraProvider theme={theme}>
        <ScrollReveal
          ref="scrollReveal"
          children={() => (
            <Routes>
              <Route exact path="/" element={<Home />} layout={LayoutDefault} />
            </Routes>
          )}
        />
      </ChakraProvider>
    )
  }
}

export default App
