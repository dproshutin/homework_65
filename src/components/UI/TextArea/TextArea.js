import React from 'react';

const TextArea = props => {
    return (
        <textarea
            name={props.name}
            rows={props.rows}
            cols={props.cols}
            value={props.message}
            onChange={props.change}
            required
        />
    );
};

export default TextArea;