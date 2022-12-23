import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Announcements from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';


const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`;

const Title = styled.h1`
     
`;

const Desc = styled.p`
    margin: 20px 0;
`;

const Price = styled.span`
    font-weight: 50;
    font-size: 80px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 30px 0 ;
    width: 50%;
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;

const FilterTitle = styled.span`
    font-size: 30px;
    font-weight: 200;
    `;

const FilterColor = styled.div`
    margin: 0 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    cursor:pointer;
`;
const FilterSize = styled.select`
    padding: 10px;
    margin-left: 10px;
    `;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;

`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    `;

const Amount = styled.span`
    font-size: 30px;
    font-weight: 300;
    border: 2px solid teal;
    width: 40px;
    height: 40px;
    border-radius: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
`;

const Button = styled.button`
    cursor: pointer;
    padding: 15px;
    background-color: white;
    border: 2px solid teal;
    font-weight: 500;
    &:hover{
        background-color: teal;
    }

    `;

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"></Image>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Modi laborum nam quos repellendus pariatur natus nulla 
                    praesentium porro aut nisi! Corrupti corporis dignissimos 
                    minima ea explicabo inventore eum cumque earum?
                </Desc>
                <Price>$ 30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color= "black"/>
                        <FilterColor color= "blue"/>
                        <FilterColor color= "red"/>
                        <FilterColor color= "green"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Add/>
                            <Amount>1</Amount>
                        <Remove/>
                    </AmountContainer>
                    <Button>
                        ADD TO CART
                    </Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product