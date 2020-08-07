import breakpoint from '../../utils/breakpoint';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  margin-top: 41px;
  margin-bottom: 50px;

  ${breakpoint.md`
    margin-top: 81px;
  `}
`;

export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 0;
  padding-left: 14px;
  padding-right: 14px;

  ${breakpoint.md`
    margin-top: 81px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    grid-row-gap: 80px;
    grid-column-gap: 80px;
    padding-left: 0;
    padding-right: 0;
  `}
`;
