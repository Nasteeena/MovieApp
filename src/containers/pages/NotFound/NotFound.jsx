import notFoundImg from './../../../assets/giphy.gif';

import styles from './notFound.module.css';

const NotFoundPage = () => {
    return (
        <div className={styles.wrapper}>
            <img 
                src={notFoundImg} 
                alt="Not Found" 
                className={styles.picture}
            />
        </div>
    );
};

export default NotFoundPage;