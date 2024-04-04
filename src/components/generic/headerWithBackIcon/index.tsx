import React from 'react';
import {SafeAreaView} from 'react-native';
import {INavigation} from '../../../types';
import {LogoContainer, BackIconContainer} from './styled';
import {TEST_IDS} from '../../../testUtils';
import BackIcon from '../../../assets/images/backIcon/BackIcon';

/**
 * Props type declaration
 */
interface Props {
  navigation?: INavigation;
}

/**
 * Header Back Icon
 * @param props
 * @returns
 */
const HeaderWithBackIcon: React.FC<Props> = (props: Props) => {
  const {navigation} = props;
  const {headerWithBackBackIcon} = TEST_IDS;
  return (
    <SafeAreaView>
      <LogoContainer>
        <BackIconContainer
          testID={headerWithBackBackIcon}
          onPress={() => navigation?.goBack()}>
          <BackIcon />
        </BackIconContainer>
      </LogoContainer>
    </SafeAreaView>
  );
};

export default HeaderWithBackIcon;
