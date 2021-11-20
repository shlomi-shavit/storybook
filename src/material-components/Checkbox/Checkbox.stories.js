import React from 'react'
import Checkbox from '@mui/material/Checkbox';
// import { action } from '@storybook/addon-actions';

export default {
    title: 'materialui/form/Checkbox',
}

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const CheckboxExample = () => (
    <div>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} />
        <Checkbox {...label} disabled />
        <Checkbox {...label} disabled checked />
    </div>
);

