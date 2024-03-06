import React, { useContext, useEffect } from 'react';
import './CSS/Signup.css';
import AppContext from '../context/AppContext';
import signupPost from '../utils/signupPost';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';


function Signup() {
    const {userSignup, setUserSignup} = useContext(AppContext);
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserSignup({...userSignup, [name]: value})
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const {name, email, password} = userSignup;
        const data = await signupPost(name, email, password);
        if (typeof data === 'string') {
            alert(data);
        }else{
            localStorage.setItem('token', data.message);
            setUserSignup({name: '', email: '', password: ''});
            history.push(`/products-list`) 
        }
    
    }

    useEffect(() => {
        setUserSignup({name: '', email: '', password: ''});
    },[setUserSignup])


    return (
        <>
        <div className='signup-container'>
            <form className='form-container' action="">
                <input
                name='name'
                value={userSignup.name}
                onChange={handleChange}
                className='name-input'
                type="text"
                placeholder='Name'
                />
                <input
                name='email'
                value={userSignup.email}
                onChange={handleChange}
                className='email-input'
                type="text"
                placeholder='Email'
                />
                <input
                name='password'
                value={userSignup.password}
                onChange={handleChange}
                className='password-input'
                type="password"
                placeholder='Password'
                />
                <button onClick={handleClick}>Sign up</button>
            </form>
        </div>
        <Link className="link" to="/">Home</Link>

        </>
    )
}

export default Signup;