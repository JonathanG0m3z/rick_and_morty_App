import React from "react";
import styles from './Form.module.css'

export default function Form(props) {
    const [userData, setUserData] = React.useState({username:'', password:''});
    const [errors, setError] = React.useState({username:'', password:''});

    React.useEffect(()=>{
        validation()
    }, [userData]);

    const handleInputChange = (event)=>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value});
    };

    function validation() {
        const email = userData.username;
        const password = userData.password;
    
        const patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const isEmail = patternEmail.test(email);
        const sizeEmail = email.length > 0 && email.length <=35;
        
        const patternPassword = /^[A-Za-z]\w{7,15}$/;
        const isSecure = patternPassword.test(password);
        const sizePassword = password.length >= 6 && password.length <=10;
    
        setError({username: isEmail && sizeEmail ? '' : 'Porfavor, complete este campo',
        password: isSecure && sizePassword ? '' : 'Porfavor, complete este campo'}
        )
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.login(userData);
    }

    return (
    <div className={styles.divContainer}>
        <div className={styles.divLogin}>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Username</label>
            <input autoComplete="off" className={errors.username!=='' ? styles.inputError : ''} onChange={handleInputChange} value={userData.username} type="text" name="username" />
            <label htmlFor="">Password</label>
            <input className={errors.password!=='' ? styles.inputError : ''} onChange={handleInputChange} value={userData.password} type="password" name="password" />
            <button name="login" type="submit">LOGIN</button>
            </form>
            
        </div>
    </div>
  );
}
