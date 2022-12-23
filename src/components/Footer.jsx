import React from 'react'
import styled from 'styled-components';
import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, Pinterest, Room, Twitter } from '@material-ui/icons';

const Container = styled.div`
    display: flex;
    `;

const Left = styled.div`
    flex: 1;
    padding: 20px;
    `;

const Desc = styled.div`
    margin-top: 30px;
    margin-bottom: 10px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const Social = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    padding-bottom: 20px;
`;

const Logo = styled.h1`
`;


const ContactItem = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 20px;
`;

const Payment = styled.img`
    width: 50%;
    `;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                Shettys.
            </Logo>
            <Desc>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus eum nulla earum odit repellat pariatur consectetur amet laboriosam iure. Deserunt et porro! 
            </Desc>
            <SocialContainer>
                <Social color= "3B5999">
                    <Facebook/>
                </Social>
                <Social color= "E4405F">
                    <Instagram/>
                </Social>
                <Social color= "55ACEE">
                    <Twitter/>
                </Social>
                <Social color= "E60023">
                    <Pinterest/>
                </Social>
            </SocialContainer>

        </Left>
        <Center>
            <Title>Usefull links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men's Fashion</ListItem>
                <ListItem>Women's Fashion</ListItem>
                <ListItem>Accesories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>
                Contact Details
            </Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}}/> #17/2, M.M Road, Cox Town, Bengalru - 05
                </ContactItem>
                <ContactItem>
                    <LocalPhoneOutlined style={{marginRight: "10px"}}/> +91 9986094549 
                </ContactItem>
                <ContactItem>
                    <EmailOutlined style={{marginRight: "10px"}}/> koushikshetty19@gmail.com 
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"></Payment>
        </Right>
        </Container>
  )
}

export default Footer