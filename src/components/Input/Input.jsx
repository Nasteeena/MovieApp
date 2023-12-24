import PropTypes from 'prop-types';

import styles from './input.module.css';

const Input = ({...props}) => {
    return (
        <input {...props} className={styles.input}/>
    );
};

Input.prototype = {
    props: PropTypes.node
};

export default Input;
