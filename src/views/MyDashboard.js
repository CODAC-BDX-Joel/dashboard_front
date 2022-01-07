import React, {useContext} from 'react';
import {AuthContext} from "../contexts/AuthContext";

const MyDashboard = () => {
    const {userToken, setUserToken} = useContext(AuthContext);

    const changeToken = ()=> {
        setUserToken('newToken')
    }
    return (
        <div>
            My dashboard
            token - {userToken}
            <button onClick={changeToken}>Change token </button>
        </div>
    );
};

export default MyDashboard;