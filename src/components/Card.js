import styled from 'styled-components';

const Card = styled.div`
  border-radius: 4px;
  background-color: #ffffff;
  position: relative;
  padding: 1.5rem;
  width: ${props => props.width || 'auto'};
`;

export default Card;
