import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Flex from './Flex';
import logo from '../icons/logo.svg';
import icon from '../icons/carrot.svg';

type Props = {
  handleRequestDemo: () => void
}

const Header = ({ handleRequestDemo }: Props) => {
  return (
    <Wrapper>
      <Flex>
        <Nav alignItems="center">
          <a href="https://www.invisionapp.com/">
            <img src={logo} alt="" />
          </a>

          <Item>
            Platform
            <img src={icon} alt="" />
          </Item>
          <Item>
            Design Education
            <img src={icon} alt="" />
          </Item>
          <Item>Pricing</Item>
          <Item isActive>Enterprise</Item>
        </Nav>
        <Flex alignItems="center">
          <Item>Login</Item>
          <StyledButton onClick={handleRequestDemo}>
            Request a demo
          </StyledButton>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 1rem;
  @media (min-width: 878px) {
    padding: 2rem 3rem;
  }
`;

const Nav = styled(Flex)`
  flex-grow: 1;
`;

const Item = styled.li`
  display: none;
  @media (min-width: 878px) {
    display: inline-block;
    font-size: 14px;
    list-style: none;
    margin-left: 2rem;
    color: ${props => (props.isActive ? '#ff3366' : 'inherit')};
    transition: color 0.15s ease-in-out;
    :hover {
      color: #ff3366;
      cursor: pointer;
    }
    img {
      margin-left: 5px;
      vertical-align: middle;
    }
  }
`;

const StyledButton = styled(Button.Inverse)`
  display: none;
  @media (min-width: 878px) {
    margin-left: 2rem;
    display: inline-block;
  }
`;

export default Header;
