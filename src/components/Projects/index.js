import { Title } from '@mui/icons-material';
import { Container } from '@mui/material';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
 
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Tooglegroup = styled.div`
    display: flex
    border: 1.5px solid  ${({  theme }) => theme.primary};
    color: ${({  theme  })} => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px  0:
        
       @media (max-width: 768px) {
    font-size: 16px;
  }
`;
  const Projects = () => {
  return (
  <Container id="Projects">
     <Wrapper>
    <Title>Projects</Title>
        <Desc>
         Here are some of my projects.
        </Desc>
        <Tooglegroup>
            <ToogleButton>All</ToogleButton>
        </Tooglegroup>
     </Wrapper>
  </Container>

  );
    };

export default Projects
