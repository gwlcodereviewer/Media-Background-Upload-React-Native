import styled from 'styled-components/native';
import { styleUtils } from '../../../styles';
import { ICheckedIcon } from '../../../styles/types';
import Images from '../../../assets/images';

const { rpx } = styleUtils;

export const CheckBoxTouch = styled.TouchableOpacity`
  width: ${rpx(28)}px;
  height: ${rpx(28)}px;
  align-items: center;
  justify-content: center;
`;

export const CheckBoxContainer = styled.View<ICheckedIcon>`
  border-width: ${props => (props.border ? rpx(1) : 0)}px;
  border-color: ${props => props.border};
  border-style: solid;
  border-radius: ${rpx(12)}px;
`;

export const CheckedIcon = styled(Images.checkedIcon).attrs(
  (props: ICheckedIcon) => ({
    width: rpx(22),
    height: rpx(22),
    fill: props.color
  })
)``;
