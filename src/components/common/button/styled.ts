import styled from 'styled-components/native';
import {styleUtils} from '../../../styles';
import { FontFamily } from '../../../styles/utils';

const {rpx, rw} = styleUtils;

export const ButtonLayout = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: ${rpx(8)}px;
  padding-vertical: ${rw(13)}px;
  margin-top: ${rpx(30)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${rpx(16)}px;
  line-height: ${rpx(24)}px;
  font-family: ${FontFamily.Bold};
`;
