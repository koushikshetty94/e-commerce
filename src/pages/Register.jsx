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
    cursor: pointer;
`;
const Agreement = styled.span`
    margin: 10px 0;
`;
const Button = styled.button`
    padding: 10px;
    background-color: teal;
    color: white;
    margin-top: 10px;
`;

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title> Create an account</Title>
            <Form>
                <Input placeholder="first name"></Input>
                <Input placeholder="last name"></Input>
                <Input placeholder="email"></Input>
                <Input placeholder="username"></Input>
                <Input placeholder="password"></Input>
                <Input placeholder="confirm password"></Input>
                <Agreement> By creating an account, I consent to the 
                    processing of my personal information in accordance with the  
                     <b>Privacy policy</b>  
                </Agreement> 
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register