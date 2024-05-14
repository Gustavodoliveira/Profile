

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  font-size: 1.6rem;
  height: 100vh;
  width: 100%;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
    flex-wrap: wrap;
  }


  .Arrow-on-bottom{
    font-size: 4rem;
    position: absolute;
    left:48%;
    top: 80%;
    animation-name: in-bottom;
    animation-duration: 5s;
    animation-iteration-count: infinite;
  }

  @keyframes in-bottom {
    0% {top: 80%}
    50% {top: 90%}
    100% {top: 80%}
  } 
`;

export const HeaderText = styled.div`
    position: absolute;
    top: 25%;
    left: 8%;

    @media (max-width: 800px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      position: relative;
      margin-top: -10rem;

      h1,h2{
        padding: .4rem;
        letter-spacing: .1rem;
      }
      
    }
    
    h1,h2{
      font-weight: 200;
      letter-spacing: .2rem;
    }

    h2{
      font-family: cursive;
      margin-left: .4rem
      
    }
`;



export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 8.5%;

  @media (max-width: 800px) {
    display: flex;
    align-items: center;
    margin-top: -20rem;
    margin-left: -15rem;
    position: relative;
    flex-wrap: wrap;
    gap: 1rem;
   

    
  }

  .btn-github{
    display: flex;
    align-items: center;
    gap: .8rem;
    background-image: linear-gradient(45deg, #ff69b4,#f08080);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding: 1rem;
    border: 1px solid #ff69b4;
    font-size: 1.6rem;

    @media (max-width: 800px) {
      gap: .4rem;
      padding: .5rem;
      font-size: 1rem;
    }


    .github-icon{
      color: #ff69b4;
      font-size: 2rem;

      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }

  .btn-linkedin{
    display: flex;
    align-items: center;
    gap: .8rem;
    background-image: linear-gradient(45deg, #007dbb,#185a7a);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    padding: 1rem;
    border: 1px solid #258dbf;
    font-size: 1.6rem;

    @media (max-width: 800px) {
      gap: .4rem;
      padding: .5rem;
      font-size: 1rem;
    }


    .linkedin-icon{
      color: #0e76a8;

      @media (max-width: 800px) {
        font-size: 1rem;
      }
    }
  }

  

`;

export const HeaderImageAndCvContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 5rem;
  position: absolute;
  top: 25%;
  right: 10%;

  @media (max-width: 800px) {
    display: flex;
    margin-top: 34rem;
    align-items: center;
    position: relative;
    left: 0;
    right: 0;
  }
 
 .btn-cv{
    top: 10rem;
    color: ${({theme}) => theme.Colors.quaternary};
    padding: 1rem;
    border: 1px solid ${({theme}) => theme.Colors.quaternary};

    @media (max-width: 800px) {
      gap: .4rem;
      padding: .5rem;
      font-size: 1rem;
    }
 
  }
`;
