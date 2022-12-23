import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';

const Container = styled.div`
`;

const Wrapper = styled.div`
    padding: 30px;
`;

const Title = styled.h1`
    display: flex;
    align-items: center;
    justify-content:center;
    font-weight: 200;
    font-size: 50px;
    margin-bottom: 20px;
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TopButton = styled.button`
    /* width: 13%; */
    padding: 30px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid black;
    background: ${props=> props.color};
    color: ${props=> props.fontColor};
`;

const TopTexts = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Text = styled.h2`
    text-decoration: underline;
    font-weight: 100;
    font-size: 30px;
    padding: 20px;
    cursor: pointer;

`;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
`;

const Info = styled.div`

`;

const Product = styled.div`
    display: flex;
    align-items: center;
`;

const ProductDetail = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
`;

const Image = styled.img`
    
`;

const Details = styled.div`
`;

const ProductName = styled.div`
`;

const ProductId = styled.div`
`;

const ProductColor = styled.div`
`;

const ProductSize = styled.div`
`;

const PriceDetail = styled.div`
`;

const PriceAmountContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
`;

const ProductAmount = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const ProductPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;    
`;


const Summary = styled.div`
    border: 10px solid black;
`;

const SummaryItem = styled.div`
`;

const SummaryItemText = styled.div`
`;

const SummaryItemPrice = styled.div`
`;

const Button = styled.div`
`;


const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
            <Wrapper>
                <Title> YOUR BAG </Title>
                <Top>
                    <TopButton color= "white" fontColor="black">Continue Shopping</TopButton>
                    <TopTexts>
                        <Text>Shopping Bag (2)</Text>
                        <Text>Your Wishlist (0)</Text>
                    </TopTexts>
                    <TopButton color= "Black" fontColor="white">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>
                                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                <Details>
                                    <ProductName>
                                        <b>Product:</b> JESSIE THUNDER SHOES
                                    </ProductName>
                                    <ProductId>
                                        <b>ID:</b> 93813718293
                                    </ProductId>
                                    <ProductColor>color</ProductColor>
                                    <ProductSize>
                                        <b>Size:</b> 37.5
                                    </ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <PriceAmountContainer>
                                    <Add/>
                                    <ProductAmount>2</ProductAmount>
                                    <Remove/>
                                </PriceAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <Button>CHECKOUT NOW</Button>
                    </Summary>
                </Bottom>
            </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Cart