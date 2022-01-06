import React, {useState} from 'react';

const Register = () => {
    const [userData, setUserData] = useState({});
    const handleChange = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input type='text' required/>
            </form>
        </div>
    );
};

export default Register;