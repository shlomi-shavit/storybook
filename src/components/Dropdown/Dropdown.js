import React from 'react'
import './Dropdown.scss'

const Dropdown = (props) => {
    const { variant = 'dropdown_1', children, ...rest } = props;

    return (
        <div className={`dropdown ${variant}`} {...rest}>
            {children}
        </div>
    )
}

export default Dropdown
