import React from 'react'
import Dropdown from './Dropdown'

export default {
    title: 'form/fields/Dropdown',
    component: Dropdown
}

export const Primary = () =>
    <Dropdown variant='dropdown_1'>
        <div>Dropdown</div>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
        </ul>
    </Dropdown>


export const Secondary = () =>
    <Dropdown variant='dropdown_2'>
        <div>Dropdown</div>
        <ul>
            <li>First</li>
            <li>Second</li>
            <li>Third</li>
            <li>Fourth</li>
        </ul>
    </Dropdown>
