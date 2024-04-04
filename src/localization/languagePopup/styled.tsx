import styled from 'styled-components/native';
import {colors} from '../../styles';
import {FontFamily, rpx} from '../../styles/utils';
import {FontsWeight} from '../utils';

interface IModalInterface {
  bgColor?: string;
  weight?: string;
}
/**
 * Name: CenterContainer
 * Desc: Parent container of popup
 */
export const CenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding-horizontal: ${rpx(10)}px;
`;
/**
 * Name: ModalViewContainer
 * Desc: Popup view its content all view.
 */
export const ModalViewContainer = styled.View<IModalInterface>`
  width: 100%;
  border-radius: ${rpx(20)}px;
  background-color: ${props => props.bgColor || colors.black};
`;
/**
 * Name: ModalText
 * Desc: ModalText show as popup title.
 */
export const ModalText = styled.Text`
  text-align: left;
  color: ${colors.white};
  font-size: ${rpx(18)}px;
  padding-left: ${rpx(10)}px;
  font-family: ${FontFamily.SemiBold};
`;
/**
 * Name: RowContainer
 * Desc: language row
 */
export const RowContainer = styled.TouchableOpacity<IModalInterface>`
  padding-horizontal: ${rpx(20)}px;
  padding-vertical: ${rpx(15)}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-horizontal: ${rpx(10)}px;
  margin-vertical: ${rpx(5)}px;
`;
/**
 * Name: LanguageText
 * Desc: language text
 */
export const LanguageText = styled.Text<IModalInterface>`
  text-align: left;
  color: ${colors.white};
  font-size: ${rpx(14)}px;
  margin-left: ${rpx(15)}px;
  font-weight: ${props => props.weight || FontsWeight.REGULAR};
`;
/**
 * Name: RadioImage
 * Desc: radio icon for selection.
 */
export const RadioImage = styled.Image`
  height: ${rpx(25)}px;
  width: ${rpx(25)}px;
  margin-top: ${rpx(2)}px;
`;

/**
 * Name: CrossImage
 * Desc: cross icon to close modal.
 */
export const CrossImage = styled.Image`
  height: ${rpx(25)}px;
  width: ${rpx(25)}px;
  tint-color: ${colors.white};
`;
/**
 * Name: CrossImageContainer
 * Desc: cross icon to close modal.
 */
export const CrossImageContainer = styled.TouchableOpacity`
  height: ${rpx(25)}px;
  width: ${rpx(25)}px;
`;
/**
 * Name: Divider
 * Desc: header divider.
 */
export const Divider = styled.TouchableOpacity`
  height: ${rpx(1)}px;
  width: 100%;
  background-color: ${colors.whiteGrayColor};
  margin-bottom: ${rpx(10)}px;
`;
/**
 * Name: HeaderContainer
 * Desc: header container.
 */
export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${rpx(15)}px;
  padding-vertical: ${rpx(15)}px;
`;
/**
 * Name: FlagImage
 * Desc: flag icon .
 */
export const FlagImage = styled.Image``;
/**
 * Name: HeaderContainer
 * Desc: header container.
 */
export const LeftViewContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

/**
 * Name: InfoCrossImage
 * Desc: cross icon to close modal.
 */
export const InfoCrossImage = styled.Image`
  height: ${rpx(20)}px;
  width: ${rpx(20)}px;
  tint-color: ${colors.white};
`;
