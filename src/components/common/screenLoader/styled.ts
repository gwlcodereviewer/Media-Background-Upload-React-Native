import styled from 'styled-components/native';
import { ILoaderContainer } from '../../../styles/types';

export const LoaderContainer = styled.View<ILoaderContainer>`
  flex: 1;
  background-color: ${(props) => props.color};
  justify-content: center;
`;
