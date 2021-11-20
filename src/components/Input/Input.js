import React from 'react'
import './Input.scss'

const Input = (props) => {
    const { size = 'small', ...rest } = props;

    return (
        <input type='text' className={`input ${size}`} {...rest} />
    )
}

export default Input
