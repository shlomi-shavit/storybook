import React from 'react'
import Button from './Button'
// import Center from '../Center/Center'

export default {
    title: 'form/Buttons',
    component: Button,
    // decorators: [story => <Center>{story()}</Center>] // local decorators (center all buttons)
    argTypes: {
        // color: {
        //     options: ['set colors', 'color picker'],
        //     control: { type: 'select' },
        // },
        variant: {
            options: ['', 'primary', 'secondary', 'danger', 'success', 'myColor'],
            // control: { type: 'radio' },
            control: { type: 'select' }
        },
        color: {
            control: { type: 'color' }
        }
    }
}

const Template = args => {
    // todo: remove inline style if i choose empty variant
    // todo 2: change variant name to something else
    // remove unnecessary repo's

    console.log(args);
    return <Button {...args} style={{ backgroundColor: args.color }} />
}

// export const Primary = () => <Center><Button variant='primary'>Primary</Button></Center> // center only one element
export const Primary = () => <Button variant='primary'>Primary</Button>
export const Secondary = () => <Button variant='secondary'>Secondary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'Primary Args'
}

export const LongPrimaryA = Template.bind({})
LongPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Long PrimaryA args'
}

export const TestButton = Template.bind({});
TestButton.args = {
    variant: '',
    color: '',
    children: 'Test button',
};