import { Metadata } from "next"

export function constructMetadata({
    title = "Yarn - Group chat that's fun and easy",
    description = "Yarn is a group chat app that's fun and easy to use. It's a great way to stay in touch with friends and family, and it's free!",
    image = "/thumbnail.png",
    icons = "/icon.ico",
    noIndex = false
  }: {
    title?: string
    description?: string
    image?: string
    icons?: string
    noIndex?: boolean
  } = {}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          {
            url: image
          }
        ]
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
        creator: "@exprays"
      },
      icons,
      metadataBase: new URL('https://yarn.thestarsociety.tech'),
      themeColor: '#FFF',
      ...(noIndex && {
        robots: {
          index: false,
          follow: false
        }
      })
    }
  }