
import styled from 'styled-components';


export const MainContainer = styled.main`

`;

export const HardSkillContainer = styled.section`
  margin: 4rem auto;

  h2{
    font-size: 2.6rem;
    text-align: center;
    font-weight: 300;
    letter-spacing: .2rem;
  }

`;

export const Icons = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 7rem;
  position: relative;

  .react{
    color: ${({theme}) => theme.Colors.blue};
    animation-name: toTheTop;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    position: absolute;
    top: -30%;

  }

  .redux{
    color: ${({theme}) => theme.Colors.quaternary} ;
    position: absolute;
    top:30%;
    animation-name: toTheBottom;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .mongoDb{
    color: ${({theme}) => theme.Colors.quinary};
    position: absolute;
    animation-name: toTheTop;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    top: -30%;
  }

  .mySql{
    color: ${({theme}) => theme.Colors.orange};
    position: absolute;
    top: 30%;
    animation-name: toTheBottom;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .node{
    color: ${({theme}) => theme.Colors.quinary};
    position: absolute;
    top: -30%;
    animation-name: toTheTop;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .next{
    color: ${({theme}) => theme.Colors.white};
    position: absolute;
    top: 30%;
    animation-name: toTheBottom;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .sass{
    color: #FA07D8;
    position: absolute;
    top: -30%;
    animation-name: toTheTop;
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }
  .styled-Components{
    color: #FAD401;
    position: absolute;
    top: 25%;
    animation-name: toTheBottom;
    animation-duration: 3s;
    animation-iteration-count: infinite;
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

