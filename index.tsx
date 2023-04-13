import * as React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export interface ImgProps {
  src: any
  alt?: any
  type?: string
  css?: string
  id?: string
  children?: any
  tag?: string
  styles?: object
}

const Img: React.FunctionComponent<ImgProps> = ({
  src,
  alt = "Xiana by: Genaro Gonzalez",
  type,
  css = "",
  id = "",
  tag = "section",
  children,
  styles,
}: ImgProps) => {
  if (type === "fluit" || type === "dynamic") {
    console.error("Este formato no es soportado desde gatsby 3 " + type)
    return <></>
  }

  const imgSRC = getImage(src)

  if (type === "bg") {
    return (
      <>
        <GatsbyImage
          //@ts-ignore
          image={imgSRC}
          alt={alt}
          id={id}
          className={css}
          style={{
            position: "absolute",
            zIndex: "-10000",
            maxHeight: "100%",
            maxWidth: "100%",
          }}
        />
        {children}
      </>
    )
  }

  if (type === "img") {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        id={id}
        className={css}
        style={styles}
      />
    )
  }
  //@ts-ignore
  return <GatsbyImage image={imgSRC} alt={alt} className={css} id={id} />
}
export default Img
