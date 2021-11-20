import React from "react"

// Global decorator
import { addDecorator, addParameters } from '@storybook/react'
import Center from "../src/components/Center/Center"
// import { muiTheme } from 'storybook-addon-material-ui'
import { withKnobs } from "@storybook/addon-knobs"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import { withA11y } from "@storybook/addon-a11y"

addDecorator(story => <Center>{story()}</Center>)
// addDecorator(muiTheme)
addDecorator(withKnobs)
addDecorator(withA11y)

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  }
})
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}