import styled from 'styled-components';

export const FlagWrapper = styled.div`
  max-width: ${({ large }) => (large ? '560px' : '264px')};
  overflow: hidden;
  background-size: cover;
  height: ${({ large }) => (large ? '400px' : '160px')};
  background-repeat: no-repeat;
  background-position: center;
  ${({ large }) => large && 'background-size: 100%;'};
`;
