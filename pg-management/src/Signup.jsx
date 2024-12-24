import React, { useState } from 'react';
import axios from 'axios'
function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupUsernameError, setSignupUsernameError] = useState('');
  const [signupPasswordError, setSignupPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3000/signup', { username, password, confirmPassword })
      .then(result => console.log(result))
       .catch(error => console.log(error));
      
     
    setSignupUsernameError('');
    setSignupPasswordError('');
    setConfirmPasswordError('');

    let valid = true;

    if (username === '') {
      setSignupUsernameError('Username is required.');
      valid = false;
    }

    if (password.length < 8) {
      setSignupPasswordError('Password must be at least 8 characters long.');
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match.');
      valid = false;
    }

    if (valid) {
      alert('Sign up successful! Please log in.');
      window.location.href = '/login';
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.signupContainer}>
        <h2><center>Sign Up</center></h2>
        <form id="signupForm" onSubmit={handleSignupSubmit}>
          <div style={styles.formGroup}>
            <label htmlFor="signupUsername">Username:</label>
            <input
              type="text"
              id="signupUsername"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
              required
            />
            {signupUsernameError && (
              <span style={styles.errorMessage}>{signupUsernameError}</span>
            )}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="signupPassword">Password:</label>
            <input
              type="password"
              id="signupPassword"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            {signupPasswordError && (
              <span style={styles.errorMessage}>{signupPasswordError}</span>
            )}
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
            {confirmPasswordError && (
              <span style={styles.errorMessage}>{confirmPasswordError}</span>
            )}
          </div>
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
  },
  signupContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  errorMessage: {
    color: 'red',
    fontSize: '0.9em',
  },
  button: {
    width: '100%',
        padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '1em',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Signup;