import styles from './loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader_block}>
            <div className={styles.lds_roller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
};

export default Loader;