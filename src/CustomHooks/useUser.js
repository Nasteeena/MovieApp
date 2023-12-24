import { useContext } from 'react';

import { UserContext } from '../context/UserProviderContext';

const useUser = () => {
    return useContext(UserContext);
};

export default useUser;