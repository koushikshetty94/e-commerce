import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 60vh;
    background-color: #fcf5f5;
    align-items: center;
    justify-content: center;

`;

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20 px;
`;

const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`;

const InputContainer = styled.div`
    width: 50%;
    height: 60px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgrey;
    `;

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`;

const Button = styled.button`
    flex: 1 ;
    border: none;
    background-color: teal;
    color: white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>
            Newsletter
        </Title>
        <Description>
            Get timely updates from your favourite products.
        </Description>
        <InputContainer>
        <Input placeholder='Your Email'/>
            <Button>
                <Send></Send>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter;