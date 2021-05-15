import React from 'react';

import './Textarea.scss';

const Textarea = (props) => {
    return (
        <div className="Textarea">
            <textarea
                className="Textarea__input"
                {...props}
            />
        </div>
    )
};

export default Textarea;
