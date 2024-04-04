import styled from 'styled-components/native';

import {IInputHeader, IInputText} from './types';
import {rh, rpx, rw} from '../../../styles/utils';
import {colors} from '../../../styles';

type IContainerSize = {
  flex?: number;
};

export const InputContainer = styled.View<IContainerSize>`
  margin-vertical: ${rh(10)}px;
`;

export const InputWrapper = styled.View<IInputText>`
  border-width: ${rw(1)}px;
  background-color: ${props =>
    props.borderColor ? props.backgroundColor : colors.white};
  height: ${props =>
    props.multiline === true ? `${rh(110)}px` : `${rh(50)}px`};

  width: ${props => (props.width ? `${rw(props.width)}px` : '100%')};
  border: ${props =>
    props.borderColor ? props.borderColor : colors.inputBorderColor};
  border-radius: ${rpx(8)}px;
`;

export const SimpleLabel = styled.Text`
  position: absolute;
  background-color: transparent;
  left: ${rw(5)}px;
  font-size: ${rpx(16)}px;
  color: ${colors.placeholderTextColor};
  bottom: ${rh(10)}px;
`;

export const ErrorText = styled.Text`
  font-size: ${rpx(14)}px;
  color: ${colors.amaranth};
  margin-top: ${rh(5)}px;
  margin-left: ${rh(5)}px;
`;
export const InputHeader = styled.Text<IInputHeader>`
  font-size: ${rpx(16)}px;
  line-height: ${rh(40)}px;
  color: ${props => (props.color ? props.color : colors.stormGrey)};
  font-weight: 500;
  margin-top: ${rh(5)}px;
  margin-bottom: ${rh(8)}px;
`;

export const SimpleView = styled.View``;

export const Required = styled.Text`
  font-size: ${rpx(16)}px;
  line-height: ${rh(20)}px;
  color: ${colors.amaranth};
  font-weight: 500;
  margin-top: ${rh(5)}px;
  margin-bottom: ${rh(8)}px;
`;
