import { MenuItem } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
height: 60px;
`
const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
justify-content: space-between;
align-items: center;
`;
const Left = styled.div`
flex:1;
display: flex;
align-items: center;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
/* padding: 20px; */
font-size: 12px;
`;

const Center = styled.div`
flex:1;
text-align: center;
`;
const Logo = styled.h1`
font-weight: bold;
`;
const Right = styled.div`
flex:1;
display: flex;
justify-content: flex-end;
align-items: center;
`;

const Input = styled.input`
border: none;
`;

const Language = styled.span`
font-size: 20px;
cursor: pointer;
`;



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left><Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <Search style={{color:"grey", fontSize: "15px"}}/>
                </SearchContainer>
            </Left>
            <Center> <Logo>Shetty's.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>LOGIN</MenuItem>
                <MenuItem>
                <Badge badgeContent={0} color="primary">
                    <ShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
        
    </Container>
  )
}

export default Navbar
