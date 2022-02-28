import styled from "styled-components";

const Header = styled.header`
  padding: 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
`;

export default Header;
