import React, { createRef } from "react"
import { Routes, Route } from "react-router-dom"
import { ChakraProvider } from "@chakra-ui/react"
import ScrollReveal from "./components/shared/ScrollReveal"
import Layout from "./components/layout"
import Home from "./pages/Home"
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
              <Route element={<Layout />}>
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
