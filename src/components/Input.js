// @flow
import React from 'react';
import type { Element } from 'react';
import styled, { css } from 'styled-components';
import Label from './Label';

type Props = {
  as: string,
  children: any,
  id: string,
  label?: string
}

const borderStyles = props => {
  if (props.hasError) {
    return 'border-color: red';
  }

  return '';
};

const styles = css`
  border: 1px solid #c7cad1;
  border-radius: 4px;
  height: 52px;
  text-indent: 1rem;
  box-sizing: border-box;
  width: 100%;
  &::placeholder {
    color: #c7cad1;
  }

  &:focus {
    outline: none;
    border: 1px solid #182237;
  }

  ${borderStyles};
`;

const Input = styled(
  ({ as: Tag, id, label, ...rest }: Props): Element<*> => {
    return (
      <div>
        <Label htmlFor={id}>{label}</Label>
        <Tag {...rest} />
      </div>
    );
  }
).withConfig({ displayName: 'Input' })`
  ${styles};
`;

Input.defaultProps = {
  as: 'input'
};

export default Input;
