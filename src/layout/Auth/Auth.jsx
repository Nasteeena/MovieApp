import { Outlet } from 'react-router-dom';

import authImg from './../../assets/auth.avif';

import styles from './Auth.module.css';

const Auth = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <img src={authImg} alt="auth" className={styles.img}/>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Auth;
