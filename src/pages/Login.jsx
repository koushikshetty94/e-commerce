import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    width: 30%;
    padding: 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 50px;
    font-weight: 300;
    margin-bottom: 10px;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 50%;
`;

const Input = styled.input`
    margin: 5px;
    padding: 10px;
    cursor: pointer;
`;
const Link = styled.a`
    margin: 10px 0;
    text-decoration: underline;

`;
const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    margin-top: 10px;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title> Login</Title>
            <Form>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Link> Forgot Password</Link> 
                <Link> Create New Account</Link> 
                <Button>Login</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login