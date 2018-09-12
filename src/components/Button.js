// @flow
import React from 'react';
import styled from 'styled-components';

const Button = styled(({ as: T, ...props }) => <T {...props} />)`
  border-radius: 2.5rem;
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  border: none;
`;

const Primary = styled(Button)`
  background: #ff3366;
  color: #ffffff;
  padding: 1.5rem 3rem;
  :hover {
    background-color: rgb(232, 30, 97);
  }
`;

const Inverse = styled(Button)`
  border: 1px solid #ff3366;
  color: #ff3366;
  background: transparent;
  :hover {
    background: #ff3366;
    color: #ffffff;
  }
`;

Button.Inverse = Inverse;
Button.Primary = Primary;

Button.defaultProps = {
  as: 'button'
};

export default Button;
