import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import './Button.scss';
import Icon from './Icon';
import { hasEmptyValue } from '../../utils/helpers';

const Button = ({
    onClick,
    type,
    text,
    icon,
    active,
    transparent,
    outline,
    compact,
    reverse,
    disabled,
}) => {
    const extraClasses = useMemo(() => [
        active ? ' Button--active' : '',
        transparent ? ' Button--transparent' : '',
        outline ? ' Button--outline' : '',
        compact ? ' Button--compact' : '',
        reverse ? ' Button--reverse' : '',
        disabled ? ' Button--disabled' : '',
    ].join(''), [active, transparent, outline, compact, reverse, disabled]);

    return (
        <button
            type={type === 'button' ? 'button' : 'submit'}
            className={`Button${extraClasses}`}
            onClick={!disabled ? onClick : undefined}
        >
            {!hasEmptyValue(icon) && (
                <div className="Button__icon">
                    <Icon
                        icon={icon}
                        alt={icon}
                        className={active ? ' image-filter' : ''}
                    />
                </div>
            )}
            {!hasEmptyValue(text) && (
                <div className="Button__text">{text}</div>
            )}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    text: PropTypes.string,
    icon: PropTypes.string,
    active: PropTypes.bool,
    transparent: PropTypes.bool,
    outline: PropTypes.bool,
    compact: PropTypes.bool,
    reverse: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    onClick: () => {},
    type: 'button',
    text: '',
    icon: '',
    active: false,
    transparent: false,
    outline: false,
    compact: false,
    reverse: false,
    disabled: false,
};

export default Button;
