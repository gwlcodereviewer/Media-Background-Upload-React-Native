import React, { useState } from 'react';
import {Text} from 'react-native';
import {PrimaryButton, AppStatusBar} from '../../components/common';
import {strings} from '../../localization';
import {theme} from '../../styles';
import {Container} from '../../styles/style';
import {INavigation} from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { FontFamily, rpx } from '../../styles/utils';
import { onImageLibraryPress } from '../../utils';
import { RootState } from '../../redux/store';
import { setUploadData } from '../../redux/api/uploadState';
import UploadingStatusModal from '../../uploadManager/uploadingStatusModal';

/**
 * props type declaration
 */
interface HomeProps {
  navigation?: INavigation;
}

/**
 * desc: Home screen UI
 */
const Home: React.FC<HomeProps> = (props: HomeProps) => {
  const {home} = strings;
  const dispatch = useDispatch();
  const uploadData = useSelector((state: RootState) => state.upload.uploadData);
  const [showUploadModal, setShowUploadModal] = useState<boolean>(false);

  return (
    <Container>
      <AppStatusBar />
      <Text>{home}</Text>
      <Text style={{fontSize: rpx(24), fontFamily: FontFamily.SemiBold, padding: 50}} onPress={()=>{
        onImageLibraryPress('photo', 1, [], true)
        .then((res: any) => {
          res[0].isInProgress = false;
          const newState = uploadData.map(obj => {
            return {...obj};
          });
          newState.push(res[0]);
          dispatch(setUploadData(newState));
        })
        .catch(() => {
         });
      }}>Upload Media</Text>
      <Text style={{fontSize: rpx(24), fontFamily: FontFamily.SemiBold, padding: 50}} onPress={()=>{
        setShowUploadModal(true);
      }}>View Uploading Media</Text>

      <UploadingStatusModal 
       visible={showUploadModal && uploadData && uploadData.length > 0}
       onClose={() => setShowUploadModal(false)}
      />
    </Container>
  );
};

export default Home;
