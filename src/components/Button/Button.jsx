import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './button.module.css';

const Button = ({children, className, appearance = 'small', ...props}) => {

    return (
        <button {...props} className={cn(styles['button'], className, styles['accent'], {
            [styles['small']] : appearance === 'small',
            [styles['big']] : appearance === 'big'
        })}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    appearance: PropTypes.string,
    props: PropTypes.node
};

export default Button;