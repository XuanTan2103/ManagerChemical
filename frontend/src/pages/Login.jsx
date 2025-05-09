import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.formCard}>
            
                <form className={styles.loginForm}>
                    <h1>Login</h1>
                    <label>Username</label>
                    <input type="email" placeholder="Username" required />
                    <label>Password</label>
                    <input type="password" placeholder="••••••••" required />
                    <div className={styles.forgotPassword}>
                        <a href="/forgot-password">Forgot password?</a>
                    </div>
                    <button type="submit">Login</button>
                </form>
            
        </div>
    );
};

export default Login
