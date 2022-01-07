import {DB_URI} from "../conf/conf";
import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const LoginPage = () => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false)
    const [userCredentials, setUserCredentials] = useState({})
    const handleChange = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value})
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            setIsLoading(false);
            const init = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userCredentials)
            }
            const response = await fetch(`${DB_URI}/login`, init);
            if (response.ok && response.status === 201) {
                const data = await response.json();
                //store access_token in AuthContext

                //store users widgets data in WidgetsContext


                //redirect to 'MyDashboard'
                console.log(data);
            } else {
                setIsLoading(false);
                alert('Login failed');
                history.push('/login');
            }
        } catch (e) {
            alert(e.message);
            setIsLoading(false);
            alert('Login failed');
            history.push('/login');
        }
    };

    const Form = <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type='text' name='username' required onChange={handleChange}/>
        <label>Password</label>
        <input type='password' name='password' required onChange={handleChange}/>
        <button>Login</button>
    </form>

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {!isLoading && <div>{Form}</div>}
        </div>
    );
};

export default LoginPage;