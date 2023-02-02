import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { DecoratorFn } from '@storybook/react'
import React from 'react'

export const withThemeProvider: DecoratorFn = (Story, context) => (
  <ThemeProvider attribute="class">
    <Story {...context} />
  </ThemeProvider>
)

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