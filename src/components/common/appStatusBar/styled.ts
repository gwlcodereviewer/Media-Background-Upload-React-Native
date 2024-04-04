import styled from 'styled-components/native';
import { IStatusView } from '../../../styles/types';

export const StatusView = styled.View<IStatusView>`
  height: 0px;
  width: 100%;
  top: 0;
  position: absolute;
  background-color: ${props => props.bgColor};
`;
