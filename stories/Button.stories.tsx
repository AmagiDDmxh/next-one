import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@storybook/react/demo'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    argTypes: { onClick: { action: 'clicked' } },
  },
} as ComponentMeta<typeof Button>

const TemplateWithText: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Hello Button</Button>
)

const TemplateWithEmoji: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)

export const withText = TemplateWithText.bind({})

withText.args = {}

export const withSomeEmoji = TemplateWithEmoji.bind({})

withSomeEmoji.args = {}
