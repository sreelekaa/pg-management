import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'Sreeleka' && password === 'sreeleka11' || username === 'Sasmitha' && password === 'sasmitha05') {
      window.location.href = '/dashboard';
      return;
    }

    axios.post('http://localhost:3000/login', { username, password })
      .then(result => {
        setMessage(result.data); // Display the message from the server
        if (result.data === "Success") {
          window.location.href = '/home';
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        margin: 0,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          height: '400px',
          width: '250px',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: '90%',
                padding: '8px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '90%',
                padding: '8px',
                marginBottom: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '10px',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </form>
        <p style={{ marginTop: '10px' }}>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
        <div id="message" style={{ marginTop: '10px', color: 'red' }}>
          {message}
        </div>
      </div>
    </div>
  );
}

export default Login;
