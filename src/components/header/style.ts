'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  position: relative;
  font-size: 1.6rem;
  height: 100vh;
  width: 100%;
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