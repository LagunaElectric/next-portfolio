import React from 'react'
import BrandBanner, { BrandBannerProps } from "../../components/brand-banner"
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "Components/Brand Banner",
  component: BrandBanner,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    imageSrc: 'https://gading.dev/media/banners/1.jpg',
    imageAlt: 'Workflow',
    brandName: 'Workflow'
  },
  argTypes: {
    imageSrc: {
      control: {
        type: 'text'
      }
    },
    imageAlt: {
      control: {
        type: 'text'
      }
    },
    brandName: {
      control: {
        type: 'text'
      }
    }
  }
} as ComponentMeta<typeof BrandBanner>

const Template: ComponentStory<typeof BrandBanner> = (args: BrandBannerProps) => <BrandBanner {...args} />

export const Default = Template.bind({})
