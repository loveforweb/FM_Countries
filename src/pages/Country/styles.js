import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const PageGrid = styled.div`
  padding-top: 81px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;

  ${breakpoint.md`
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-row-gap: 80px;
    grid-column-gap: 80px;
  `}
`;
