import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../context/UserProviderContext';

const RelocateToPage = ({ children }) => {
    const { userData } = useContext(UserContext);

    if(!userData.userToken ) {
        return <Navigate to='/auth/login' replace/>;
    }

    return (
        children
    );
};

export default RelocateToPage;