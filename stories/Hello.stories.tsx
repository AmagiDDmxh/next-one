import { ComponentStory } from '@storybook/react'
import React from 'react'
import Hello from '../components'

export default { title: 'Hello World' }

export const simpleComponent: ComponentStory<typeof Hello> = () => <Hello />
