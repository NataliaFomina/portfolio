import React from "react"

type Props = {
  src: string
  width: number
  height: number
  alt: string
  className?: string
}

type State = {
  isLoaded: boolean
}

class Image extends React.Component<Props, State> {
  state = {
    isLoaded: false,
  }
  image = React.createRef<HTMLImageElement>()

  componentDidMount() {
    if (this.image?.current) {
      const placeholderImage = document.createElement("img")
      this.handlePlaceholder(this.image.current, placeholderImage)
    }
  }

  placeholderSrc = (w: number, h: number) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`
  }

  handlePlaceholder = (
    img: HTMLImageElement,
    placeholder: HTMLImageElement
  ) => {
    img.style.display = "none"
    img.before(placeholder)

    const width = parseInt(img.getAttribute("width") || "0")
    const height = parseInt(img.getAttribute("height") || "0")

    placeholder.src = this.placeholderSrc(width, height)
    placeholder.width = width
    placeholder.height = height
    placeholder.style.opacity = "0"

    img.className && placeholder.classList.add(img.className)
    img.addEventListener("load", () => {
      placeholder.remove()
      img.style.display = ""
      this.setState({
        isLoaded: true,
      })
    })
  }

  render() {
    const { className, src, width, height, alt, ...props } = this.props
    return (
      <img
        {...props}
        ref={this.image}
        className={className}
        src={src}
        width={width}
        height={height}
        alt={alt}
      />
    )
  }
}

export default Image
