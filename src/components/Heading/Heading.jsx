import PropTypes from 'prop-types';

import cn from 'classnames';

import styles from './heading.module.css';

const Heading = ({children, appearance, className, ...props}) => {

    return (
        <>
            {appearance == 'h1' && <h1 {...props} className={cn(styles.header, styles.h1, className)}>{children}</h1>}
            {appearance == 'h2' && <h2 {...props} className={cn(styles.header, styles.h2, className)}>{children}</h2>}
        </>
    );
};

export default Heading;

Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    props: PropTypes.node,
    appearance: PropTypes.string
};
