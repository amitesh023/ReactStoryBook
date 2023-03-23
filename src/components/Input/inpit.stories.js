import React from 'react'

import Input from './Input'
import Incapsulator from '../incapsulator/incapsulator'

export default {
    title: 'Form/Input', // going to display in sidebar
    component: Input,
    args:{ // pass as many default args, going to work with 2nd aproach
        placeholder: "default placeholder"
    },
    // decorators are use to incapsulate any component with any html tags example - <div class="center"><input /></div>
    // from here we are just incapsulating input component and not each and every component (global decorator is use to do same for every component) 
    decorators: [story => <Incapsulator>{story()}</Incapsulator>]
}

//########################## Aproach-1  ################## 
//created 2 style of buttons - Aproach - 1(not preferable)
export const Style1 = () => <Input type="text" variant="style1" />
export const Style2 = () => <Input type="text" variant="style2" />

// To display custom name in sidebar
Style1.storyName = 'Input - Light'

//########################## Aproach-2 (Best) ##################
// created 2 style of buttons
const Template = args => <Input {...args} />

export const inputStyle1 = Template.bind({})
inputStyle1.args = {
    variant: "style1",
}
export const inputStyle2 = Template.bind({})
inputStyle2.args = {
    variant: "style2",
    placeholder:"Placeholder"
}