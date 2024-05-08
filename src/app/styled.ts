
import styled from 'styled-components';


export const MainContainer = styled.main`

`;

export const HardSkillContainer = styled.section`
height: 200px;
  margin: 8rem auto;

  h2{
    font-size: 2.6rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: .2rem;
  }

`;

export const IconsSection = styled.section`
 display: flex;
  align-items: center;
  justify-content: center;
  margin: 7rem 0;
  gap: 7rem;
  position: relative;

  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    font-size: .5rem;
     

  }

  
  
  .react{
    color: ${({theme}) => theme.Colors.blue};
   
    position: absolute;
    top: -30%;

    @media (min-width: 800px) {
      display: block;
      animation-name: toTheTop;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
      position: relative;
      top: 10%;
    }

  }

  .redux{
    color: ${({theme}) => theme.Colors.quaternary} ;
    position: absolute;
    top:30%;

    @media (min-width: 800px) {
      animation-name: toTheBottom;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 800px) {
      position: relative;
      top: 10%;
    }
  }

  .mongoDb{
    color: ${({theme}) => theme.Colors.quinary};
    position: absolute;
    top: -30%;

    @media (min-width: 800px) {
      animation-name: toTheTop;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }

  .mySql{
    color: ${({theme}) => theme.Colors.orange};
    position: absolute;
    top: 30%;

    @media (min-width: 800px) {
      animation-name: toTheBottom;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }

  .node{
    color: ${({theme}) => theme.Colors.quinary};
    position: absolute;
    top: -30%;

    @media (min-width: 800px) {
      animation-name: toTheTop;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }

  .next{
    color: ${({theme}) => theme.Colors.white};
    position: absolute;
    top: 30%;

    @media (min-width: 800px) {
      animation-name: toTheBottom;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }

  }

  .sass{
    color: #FA07D8;
    position: absolute;
    top: -30%;

    @media (min-width: 800px) {
      animation-name: toTheTop;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }

    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }
  .styled-Components{
    color: #FAD401;
    position: absolute;
    top: 25%;

    @media (min-width: 800px) {
      animation-name: toTheTop;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }

  .react-native{
    color: ${({theme}) => theme.Colors.blue};
    position: absolute;
    top: 25%;

    @media (min-width: 800px) {
      animation-name: toTheBottom;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    @media (max-width: 800px) {
      top: 10%;
      position: relative;

    }
  }


  @keyframes toTheTop {
    0%{
    top: -30%;
    }
    50%{
      top: 70%;
    }
    100%{top: -30%}
  }
  @keyframes toTheBottom {
    0%{
      top: 30%
    }
    50%{
      top: -70%;
    }
    100%{
      top: 30%;
    }
  }
`;

export const CardSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;

  h2 {
     text-align: center;
     font-size: 2rem;

  }

  .card_content{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    margin-top: 2rem;

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }

`;

export const ContactsSection = styled.section`


`;
