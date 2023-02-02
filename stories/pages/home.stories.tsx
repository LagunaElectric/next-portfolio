import React from 'react'
import Home from "../../pages"
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "Pages/Home",
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Default = Template.bind({})
