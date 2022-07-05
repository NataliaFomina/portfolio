import React from "react"
import { Routes, Route } from "react-router-dom"
import ScrollReveal from "./utils/ScrollReveal"

// Layouts
import LayoutDefault from "./layouts/LayoutDefault"
import LayoutAlternative from "./layouts/LayoutAlternative"
import LayoutSignin from "./layouts/LayoutSignin"

// Views
import Home from "./views/Home"
import Secondary from "./views/Secondary"
import Login from "./views/Login"
import Signup from "./views/Signup"

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
              <Route
                exact
                path="/secondary"
                element={<Secondary />}
                layout={LayoutAlternative}
              />
              <Route
                exact
                path="/login"
                element={<Login />}
                layout={LayoutSignin}
              />
              <Route
                exact
                path="/signup"
                element={<Signup />}
                layout={LayoutSignin}
              />
            </Routes>
          )}
        />
      </ChakraProvider>
    )
  }
}

export default App
