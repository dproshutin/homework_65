import React from 'react';

const InputField = props => {
    return (
        <input
            name={props.name}
            type={props.type}
            value={props.title}
            onChange={props.change}
            required
        />
    );
};

export default InputField;