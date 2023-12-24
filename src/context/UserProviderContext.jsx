import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { getData } from '../utils/helpers/localStorage';
import { LOCAL } from '../utils/constants/api';

export const UserContext = createContext();

const UserProviderContext = ({ children }) => {
    const [userData, setUserData] = useState({
        userToken: getData(LOCAL.TOKEN) || null,
        userId: null
    });

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            {children}
        </UserContext.Provider>
    );
};

UserProviderContext.propTypes = {
    children: PropTypes.node
};

export default UserProviderContext;
