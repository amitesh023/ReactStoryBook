import React from 'react'
import BootGrid from './BootGrid'

export default {
    title: 'Bootstrap Grid', // going to display in sidebar
    component: BootGrid,
    args:{ // pass as many default args, going to work with 2nd aproach
        //placeholder: "default placeholder"
    },
    argTypes: {
        numberOfChildren: { type: "number", defaultValue: 4 },
        justify:{type: "select", options: ["justify-content-start", "justify-content-end", "justify-content-center", "justify-content-between"]},
        align:{type: "select", options: ["none", "align-items-start", "align-items-end", "align-items-center", "align-items-baseline"]}
    },
}

//########################## Aproach-2 (Best) ##################
// created 2 style of buttons
const Template = ({ numberOfChildren, ...args }) => (
    <BootGrid {...args}>
      {[...Array(numberOfChildren).keys()].map(n => (
        <div class="btn bg-primary">
        Box {n + 1}
        </div>
      ))}
        </BootGrid>
  )

export const grid = Template.bind({})
grid.args = {
    //variant: "style1",
}
// export const inputStyle2 = Template.bind({})
// inputStyle2.args = {
//     variant: "style2",
//     placeholder:"Placeholder"
// }