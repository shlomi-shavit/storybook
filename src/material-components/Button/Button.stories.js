import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Button from '@material-ui/core/Button';
import { action, actions } from '@storybook/addon-actions';
import { addDecorator } from '@storybook/react'
import { withConsole } from '@storybook/addon-console'
import { text, boolean } from '@storybook/addon-knobs'

// icons-material -> npm install @mui/icons-material
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

import LoadingButton from '@mui/lab/LoadingButton'; // npm install @mui/lab

const Template = args => <Button {...args} style={{ backgroundColor: args.variant }} variant="contained" />

export default {
    title: 'materialui/form/Buttons',
    // decorators: [story => <Center>{story()}</Center>] // local decorators (center all buttons)
    argTypes: {
        buttonColor: {
            options: ['primary', 'secondary', 'info', 'warning', 'error', 'success'],
            // control: { type: 'radio' }
            control: { type: 'select' }
        },
        variant: {
            control: { type: 'color' }
        }
    }
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

export const Primary = () => (
    <Button color="primary" onClick={action('Primary button clicked')} variant="contained">Primary</Button>
);

export const Secondary = () => (
    <Button color="secondary" {...actions('onClick', 'onMouseOver')} variant="contained">Secondary</Button>
);

export const Log = () => (
    <Button color="warning" onClick={() => { console.log('hello') }} variant="contained">Log</Button>
);

export const MoreButtons = () => (
    <Stack direction="row" spacing={2}>
        <Button onClick={action('Link button clicked')} href="#text-buttons" variant="text">Link</Button>

        <Button color="success" variant="contained">Success</Button>

        <Button color="error" variant="outlined">Error</Button>

        <Button disabled onClick={action('Disabled button clicked?')} variant="outlined">Disabled</Button>

        <Button variant="outlined" startIcon={<DeleteIcon />}>Delete</Button>

        <Button variant="contained" endIcon={<SendIcon />}>Send</Button>
    </Stack>
)

export const LoadingButtons = () => {
    return (
        <Stack direction="row" spacing={2}>
            <LoadingButton loading variant="outlined">
                Submit
            </LoadingButton>
            <LoadingButton loading loadingIndicator="Loading..." variant="outlined">
                Fetch data
            </LoadingButton>
            <LoadingButton
                loading
                loadingPosition="start"
                startIcon={<SaveIcon />}
                variant="outlined"
            >
                Save
            </LoadingButton>
        </Stack>
    );
}

export const TestButton = Template.bind({})
TestButton.args = {
    color: 'primary',
    variant: 'primary',
    children: 'Test Button'
}

export const Knobs = () => (
    <Button color="warning" disabled={boolean('Disabled', false)} variant="contained">
        {text('label', 'Button label')}
    </Button>
);