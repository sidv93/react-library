import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import './TextInput.scss';

const TextInput = forwardRef(({ error, ...props }, ref) => {
    return (
        <div className="TextInput">
            <input
                type="text"
                className={`TextInput__field ${error ? 'error' : ''}`}
                autoComplete="off"
                ref={ref}
                {...props}
            />
        </div>
    )
});

TextInput.propTypes = {
    error: PropTypes.bool,
};

TextInput.defaultProps = {
    error: false,
};

export default TextInput;

