import React from 'react'
import Header from "../../components/header"
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "Components/Composite/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  }
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = () => <Header />

export const Default = Template.bind({})
