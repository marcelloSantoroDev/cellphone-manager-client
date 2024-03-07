import { useEffect } from 'react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Login.css';
import AppContext from '../context/AppContext';
import loginPost from '../utils/loginPost';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const {userLogin, setUserLogin} = useContext(AppContext);
    const history = useHistory();


  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserLogin({...userLogin, [name]: value});
  }

      const handleClick = async (e) => {
        e.preventDefault()
        const {email, password} = userLogin;
        const data = await loginPost(email, password);
        if (typeof data === 'string') {
            alert(data);
          }else{
            localStorage.setItem('token', data.message);
            setUserLogin({email: '', password: ''});
            history.push(`/products-list`) 
        }
    }

    const handleLoginTester1 = () => {
        setUserLogin({email: 'alex@gmail.com', password: '123456'})
    }

    const handleLoginTester2 = () => {
        setUserLogin({email: 'mario@gmail.com', password: '123456'})
    }

    useEffect(() => {
        setUserLogin({email: '', password: ''});
    },[setUserLogin])


  return (
    <>
    <div className='login-container'>
      <div className='default-login-container'>
        <button onClick={handleLoginTester1}>Log in tester 1</button>
        <button onClick={handleLoginTester2}>Log in tester 2</button>
      </div>
        <form className='form-container' action="">
            <input
            name='email'
            value={userLogin.email}
            className='email-input'
            type="text"
            placeholder='Email'
            onChange={handleChange}
            />
            <input
            name='password'
            value={userLogin.password}
            className='password-input'
            type="password"
            placeholder='Password'
            onChange={handleChange}
            />
            <button onClick={handleClick}>Log in</button>
            <p>Don't have an account?  <Link className="sign-up-link" to="/signup">Sign up</Link></p>
        </form>
    </div>
        <Link className="link" to="/">Home</Link>
    </>
  )
}

export default Login