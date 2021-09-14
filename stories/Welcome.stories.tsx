import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Welcome } from '@storybook/react/demo'
import { linkTo } from '@storybook/addon-links'

export default { title: 'Welcome' } as ComponentMeta<typeof Welcome>

export const toStorybook: ComponentStory<typeof Welcome> = () => (
  <Welcome showApp={linkTo('Button')} />
)
