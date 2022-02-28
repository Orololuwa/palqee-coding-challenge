import styled, { keyframes } from "styled-components";

const slideInLeft = keyframes`
    0% {
        width: 0;
    }
    100%{
        width: 15%;
    }
`;

const Nav = styled.nav`
  summary {
    cursor: pointer;
    margin-top: 10px;
  }

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease-out;
    position: relative;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: 3.5px;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.black};

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 2.5px;
        left: 25px;
        transform: translateX(-50%);
        width: 15%;
        height: 2.5px;
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.black};
        animation: ${slideInLeft} 0.5s;
      }
    }
  }
  .active {
    a {
      color: ${({ theme }) => theme.colors.black};

      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 2.5px;
        left: 25px;
        transform: translateX(-50%);
        width: 15%;
        height: 2.5px;
        border-radius: 5px;
        background: ${({ theme }) => theme.colors.black};
      }
    }
  }
`;

export default Nav;
