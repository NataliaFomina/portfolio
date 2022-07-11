import { createRef, ReactElement, ReactNode, useEffect } from "react"
import type { NextPage } from "next"
import type { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { ChakraProvider } from "@chakra-ui/react"
import ScrollReveal from "@/components/shared/ScrollReveal"
import theme from "@/theme/index"
import "../assets/scss/style.scss"
import { useRouter } from "next/router"

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const scrollReveal = createRef<ScrollReveal>()
  const getLayout = Component.getLayout ?? ((page) => page)
  const router = useRouter()

  useEffect(() => {
    document.body.classList.add("is-loaded")
    scrollReveal.current?.init()
  }, [])

  useEffect(() => {
    scrollReveal.current?.init()
  }, [router.pathname])

  return (
    <div className="body-wrap">
      <ChakraProvider theme={theme}>
        <ScrollReveal
          ref={scrollReveal}
          children={() => {
            return getLayout(<Component {...pageProps} />)
          }}
        />
      </ChakraProvider>
    </div>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
})
