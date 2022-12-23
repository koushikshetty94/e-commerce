import styled from "styled-components"

const Container = styled.div`
    background-color: teal;
    color: white;
    height: 40px;
    font-size:14px
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: center
` 
const Announcements = () => {
  return (
    <Container>
        Free shipping for orders above 50$
    </Container>
  )
}

export default Announcements
