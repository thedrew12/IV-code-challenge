import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || 'start'};
  justify-content: ${props => props.justifyContent || 'start'};
  flex-wrap: ${props => (props.shouldWrap ? 'wrap' : 'nowrap')};
  flex-direction: ${props => props.direction || 'row'};
`;

export default Flex;
