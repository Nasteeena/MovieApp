import { useState } from 'react';

import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import Heading from '../../../components/Heading/Heading';

import { validateEmail } from '../../../utils/helpers/helper';

import { Link, useNavigate } from 'react-router-dom';

import styles from './register.module.css';

const Register = () => {
    const [valid, setValid] = useState(true);
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();
        setValid(true);
        const inputValue = e.target.email;
        if(!validateEmail(inputValue.value)) {
            setValid(false);
        } else {
            setValid(true);
            navigate('/auth/login');
        }
    };

    return (
        <>
            <Heading className={styles.header}>Регистрация</Heading>
            <form className={styles.form} onSubmit={register}>
                {!valid && <div className={styles.error}>Введите правильную почту</div>}
                <div className={styles.wrapper}>
                    <Input name='email' type='text' placeholder='Введите почту'/>
                </div>
                <Button appearance='big'>Получить токен</Button>
            </form>
            <div className={styles.info}>
                <div>Если у вас есть токен</div>
                <div>перейдите <Link className={styles.link} to='/auth/login'>сюда</Link></div>
            </div>
        </>
    );
};

export default Register;