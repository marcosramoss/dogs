import React from 'react'
import { UserContext } from '../../Contexto'
import { Navigate } from 'react-router-dom';

export const ProtectedRouter = ({ children }) => {
    const { login } = React.useContext(UserContext)
    if (login === true) {
        return children
    } else if (login === false) {
        return <Navigate to="/login" />
    } else {
        return <></>
    }
}

export default ProtectedRouter