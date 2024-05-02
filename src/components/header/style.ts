

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  font-size: 1.6rem;
  height: 100vh;
  width: 100%;


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
    
    h1,h2{
      font-weight: 200;
      letter-spacing: .2rem;
    }

    h2{
      font-family: cursive;
      margin-left: .4rem
      
    }
`;

export const NavContainer = styled.nav`
  display: flex;
  position: absolute;
  top: 1rem;
  right: 8rem;

    ul{
      display: flex;
      list-style: none;
      gap: 2rem;


      & > li > a{
        color: ${({theme}) => theme.Colors.white};
        position: relative;
        

      
       

        &::after{
          content: '';
          position: absolute;
          left: 0;
          bottom: -.2rem;
          background-color: ${({theme}) => theme.Colors.tertiary};
          width: 0%;
          height: .2rem;
          
          

         
        } 
        &:hover::after{
            width: 100%;
            transition: .5s ease-in;
          }

        &:hover{
          color: ${({theme}) => theme.Colors.transparent};
          transition: .5s ease-in;
        }  
      }
      
    }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  position: absolute;
  top: 50%;
  left: 10%;

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


    .github-icon{
      color: #ff69b4;
      font-size: 2rem;
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


    .linkedin-icon{
      color: #0e76a8
    }
  }


`;

export const HeaderImageAndCvContainer = styled.div`
  position: absolute;
 top: 20%;
 right: 10%;
`;
