import styled from 'styled-components/native';
import colors from './colors';
import {rpx, rh, rw} from './utils';

/**
 * Name: Container
 * Desc: The Container
 */
export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${rw(50)}px;
`;

/**
 * Name: AsteriskLabel
 * Desc: Asterisk Label
 */
export const AsteriskLabel = styled.Text`
  font-size: ${rpx(14)}px;
  line-height: ${rh(18)}px;
  color: ${colors.black};
  padding-left: ${rpx(5)}px;
`;

/**
 * Name: RowView
 * Desc: The screen RowView view
 */
export const RowView = styled.View`
  flex-direction: row;
  align-items: center;
`;

/**
 * Name: ScreenWrapper
 * Desc: The screen wrapper view
 */
export const ScreenWrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
