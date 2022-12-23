import React from 'react';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcement';
import Footer from '../components/Footer';
import styled from 'styled-components';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';


const Container = styled.div`
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
    align-items: center;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    `;

const Title = styled.h1`
    margin: 20px;
    font-size: 50px;
`;

const Select = styled.select`
    font-size: 20px;
    font-weight: 600;
    padding: 20px;
    margin-right: 20px;
`;

const Option = styled.option`
`;

const FilterText = styled.div`
    margin-right: 20px;
    padding: 10px;    
`;

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Announcements/>
      <Title>Dresses</Title>
      <FilterContainer>
          <Filter>
              <FilterText>Filter Products:</FilterText>
          <Select>
              <Option disabled selected>
                  Color
              </Option>
              <Option> Black </Option>
              <Option> Blue </Option>
              <Option> Red </Option>
              <Option> Green </Option>
          </Select>
          <Select>
              <Option disabled selected>
                  Size
              </Option>
              <Option>Small</Option>
              <Option>Medium</Option>
              <Option>Large</Option>
              <Option>XL</Option>
          </Select>
          </Filter>
          <Filter>
              <FilterText>Sort Products:</FilterText>
          <Select>
              <Option disabled selected>
                  Newest</Option>
              <Option>Newest (asc)</Option>
              <Option>Newest (desc)</Option>
          </Select>
          </Filter>
      </FilterContainer>
      <Products/>
      <Newsletter/>
      <Footer/>
   </Container>
  )
}

export default ProductList