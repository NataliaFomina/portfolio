import React from "react"
import { throttle } from "lodash"

type Props = {
  children?: any
}

type State = {
  viewportHeight: number
  revealEl: HTMLElement[]
}

class ScrollReveal extends React.Component<Props, State> {
  state: State = {
    viewportHeight: typeof window !== "undefined" ? window.innerHeight : 0,
    revealEl: [],
  }

  checkComplete = () => {
    return (
      this.state.revealEl.length <=
      document.querySelectorAll("[class*=reveal-].is-revealed").length
    )
  }

  elementIsVisible = (el: HTMLElement, offset: number) => {
    return el.getBoundingClientRect().top <= this.state.viewportHeight - offset
  }

  revealElements = () => {
    if (this.checkComplete()) return
    for (let i = 0; i < this.state.revealEl.length; i++) {
      let el = this.state.revealEl[i]
      let revealDelay = parseInt(el.getAttribute("data-reveal-delay") as string)
      let revealOffset = parseInt(
        el.getAttribute("data-reveal-offset")
          ? (el.getAttribute("data-reveal-offset") as string)
          : "200"
      )
      let listenedEl = el.getAttribute("data-reveal-container")
        ? el.closest(el.getAttribute("data-reveal-container") as any)
        : el
      if (
        this.elementIsVisible(listenedEl, revealOffset) &&
        !el.classList.contains("is-revealed")
      ) {
        if (revealDelay && revealDelay !== 0) {
          setTimeout(function () {
            el.classList.add("is-revealed")
          }, revealDelay)
        } else {
          el.classList.add("is-revealed")
        }
      }
    }
  }

  init = () => {
    setTimeout(() => {
      this.setState(
        { revealEl: document.querySelectorAll("[class*=reveal-]") as any },
        () => {
          if (!this.checkComplete()) {
            window.addEventListener("scroll", this.handleScroll)
            window.addEventListener("resize", this.handleResize)
          }
          this.revealElements()
        }
      )
    }, 100)
  }

  handleListeners = () => {
    if (!this.checkComplete()) return
    window.removeEventListener("scroll", this.handleScroll)
    window.removeEventListener("resize", this.handleResize)
  }

  handleScroll = throttle(() => {
    this.handleListeners()
    this.revealElements()
  }, 30)

  handleResize = throttle(() => {
    this.setState({ viewportHeight: window.innerHeight }, () => {
      this.handleListeners()
      this.revealElements()
    })
  }, 30)

  render() {
    return <React.Fragment>{this.props.children()}</React.Fragment>
  }
}

export default ScrollReveal
