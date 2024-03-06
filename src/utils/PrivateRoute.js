import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import authPost from './authPost';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [verificationComplete, setVerificationComplete] = useState(false);
    const token = localStorage.getItem('token') || '';

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                const result = await authPost(token);

                if (result.type === 'VALID_TOKEN') {
                    setIsAuthenticated(true);
                }
                setVerificationComplete(true);
            } catch (error) {
                console.error('Erro ao verificar autenticação:', error);
                setVerificationComplete(true);
            }
        };

        checkAuthentication();
    }, [token]);

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!verificationComplete) {
                    return <div>Verificando autenticação...</div>;
                }

                return isAuthenticated ? <Component {...props} /> : <Redirect to="/" />;
            }}
        />
    );
};

export default PrivateRoute;
