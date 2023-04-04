import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  text-align: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormInput = styled.input`
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:focus {
    outline: none;
    border-color: #06c;
    box-shadow: 0 0 5px rgba(0, 102, 204, 0.5);
  }
`;

const FormButton = styled.button`
  padding: 10px;
  font-size: 1.2rem;
  background-color: #06c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #004080;
  }
`;

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate successful login
    onLogin('mocked_token');
  };

  return (
    <LoginContainer>
      <LoginTitle>Login</LoginTitle>
      <LoginForm onSubmit={handleSubmit}>
        <FormInput
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <FormInput
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <FormButton type="submit">Login</FormButton>
      </LoginForm>
    </LoginContainer>
  );
}



export default Login;
