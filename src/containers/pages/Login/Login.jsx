import { useEffect } from 'react';

import useUser from '../../../CustomHooks/useUser';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';

import { USER, LOCAL, COMBINED_URL } from '../../../utils/constants/api';
import { ROUTE } from '../../../utils/constants/routerConstants';

import { keepData } from '../../../utils/helpers/localStorage';
import getRequest from '../../../network/getResponse';

import { Link, useNavigate } from 'react-router-dom';

import styles from './login.module.css';

const Login = () => {
    const navigate = useNavigate();
    const { setUserData, userData } = useUser();

    useEffect(()=> {
        if(userData.userToken) {
            navigate(ROUTE.MAIN);
        }
    }, [userData.userToken, navigate]);

    const getUser = async (token, url) => {
        const res = await getRequest(token, url);
        if(res) {
            setUserData(state => {
                return {
                    ...state,
                    userId: res.id
                };
            });
        }
    };

    useEffect(()=> {
        getUser(USER.TOKEN, COMBINED_URL.ACCOUNT);
    }, [userData.userToken]);

    const login = (e) => {
        e.preventDefault();
        setUserData(state => {
            return {
                ...state,
                userToken: USER.TOKEN
            };
        });
        keepData(LOCAL.TOKEN, USER.TOKEN);
    };

    return (
        <>
            <Heading className={styles.header}>Логин</Heading>
            <form className={styles.form} onSubmit={login}>
                <div className={styles.wrapper}>
                    <Input defaultValue={USER.TOKEN} type='text' placeholder='Введите токен'/>
                </div>
                <Button appearance='big'>Войти</Button>
            </form>
            <div className={styles.info}>
                <div>Если вы не зарегестрированы</div>
                <div>перейдите <Link className={styles.link} to='/auth/register'>сюда</Link></div>
            </div>
        </>
    );
};

export default Login;
