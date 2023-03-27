'use client'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const fonts = {
  body: 'Nunito',
  heading: 'Raleway'
}

const theme = extendTheme({
  fonts
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><ChakraProvider theme={theme}>{children}</ChakraProvider></body>
    </html>
  )
}
