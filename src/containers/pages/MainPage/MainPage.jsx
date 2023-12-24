import Filters from '../../Filters/Filters';
import Films from '../../Films/Films';
import Header from '../../Header/Header';

import styles from './mainPage.module.css';

const MainPage = () => {
    return (
        <>
            <div>
                <Header>Home</Header>
            </div>
            <div className={styles.container}>
                <div className={styles.main}>
                    <Filters/>
                    <Films/>
                </div>
            </div>
        </>
    );
};

export default MainPage;

