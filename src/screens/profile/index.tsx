import React from 'react';
import {Text} from 'react-native';
import AppStatusBar from '../../components/common/appStatusBar';
import {strings} from '../../localization';
import {INavigation} from '../../types';
import {Wrapper} from './styled';

/**
 * props type declaration
 */
interface ProfileProps {
  navigation?: INavigation;
}

/**
 * desc: Profile screen UI
 */
const Profile: React.FC<ProfileProps> = () => {
  const {profile} = strings;
  return (
    <Wrapper>
      <AppStatusBar />
      <Text>{profile}</Text>
    </Wrapper>
  );
};

export default Profile;
