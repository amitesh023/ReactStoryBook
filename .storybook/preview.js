import { withA11y } from "@storybook/addon-a11y"
import { addDecorator } from "@storybook/react"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
 
  // To Sort sidebar of storybook
  options: { 
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
}

addDecorator(withA11y)