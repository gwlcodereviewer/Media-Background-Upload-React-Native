import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import { rh, rw, rpx } from '../../../styles/utils';

export const SideMenuContainer = styled.SafeAreaView`
  flex: 1;
`;

export const ProfileContainer = styled.View`
  align-items: center;
`;

export const SideMenuProfileIcon = styled.Image`
  resize-mode: center;
  width: ${rpx(150)}px;
  height: ${rpx(150)}px;
  border-radius: ${rpx(75)}px;
`;

export const MenuItemContainer = styled.View`
  width: 100%;
`;

export const MenuItemRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: ${rh(10)}px;
`;

export const MenuItemDivider = styled.View`
  width: 100%;
  height: ${rh(1)}px;
  background-color: ${colors.ghostWhite};
  margin-top: ${rh(15)}px;
`;

export const SideMenuIcon = styled.Image`
  resize-mode: center;
  width: ${rpx(28)}px;
  height: ${rpx(28)}px;
  margin-right: ${rw(10)}px;
  margin-left: ${rw(20)}px;
`;

export const MenuText = styled.Text`
  font-size: ${rpx(15)}px;
  color: ${colors.warmGrey};
`;
