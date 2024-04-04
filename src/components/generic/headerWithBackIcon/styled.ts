import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import {defaultTheme} from '../../../styles/theme';
import {rw, rpx} from '../../../styles/utils';

const {primaryBackgroundColor} = defaultTheme;

export const BackIconContainer = styled.TouchableOpacity`
  height: 100%;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  height: 60px;
  background-color: ${primaryBackgroundColor};
  border-bottom-width: ${rpx(1)}px;
  border-style: solid;
  border-color: ${colors.socialBoxColor};
  padding-horizontal: ${rw(16)}px;
`;
