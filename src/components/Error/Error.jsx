import styles from './error.module.css';

const Error = () => {
    return (
        <div className={styles.errorBlock}>
            <h1 className={styles.error__title}>OOOPS!!!</h1>
            <p className={styles.error_text}>Something went wrong. But don`t worry, it can happen with the best of us and just it happened to you :D. Try to use VPN or  
            wait a little bit please while we are fixing the problem.</p>
        </div>
    );
};

export default Error;