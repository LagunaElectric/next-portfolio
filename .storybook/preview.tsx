import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { DecoratorFn } from '@storybook/react'
import React from 'react'
import * as NextImage from 'next/image'

const OriginalNextImage = NextImage.default
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />
})

export const withThemeProvider: DecoratorFn = (Story, context) => {
  return (
    <ThemeProvider attribute="class">
      <Story {...context} />
    </ThemeProvider>
  )
}

export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}