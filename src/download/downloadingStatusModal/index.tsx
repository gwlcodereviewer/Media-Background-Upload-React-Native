/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useSelector} from 'react-redux';
import {strings} from '../../localization';
import {RootState} from '../../redux/store';
import { rpx, screenWidth } from '../../styles/utils';
import { colors } from '../../styles';
import { PrimaryButton } from '../../components/common';

/**
 * Name: Props
 * Desc: Interface type for props
 */
interface Props {
  visible: boolean;
  onClose: () => void;
}

/**
 * Name: DownloadStatusModal
 * Desc: Component to render Download status modal UI
 * @param {any} navigation - navigation data
 */
const DownloadStatusModal: React.FC<Props> = (props: Props) => {
  const {visible, onClose} = props;
  const downloadData = useSelector((state: RootState) => state.download.downloadData);
  const downloadProgress = useSelector(
    (state: RootState) => state.download.downloadingProgress,
  );
  const [slideAnim] = useState(new Animated.Value(-400)); // TODO: manage this also based on height
  const [downloadRecord, setDownloadRecord] = useState<any>();
  const [inQueueRecord, setInQueueRecord] = useState<any[]>();
  const [downloadStateProgress, setDownloadStateProgress] =
    useState<number>(0);

  /**
   * Name: useEffect
   * Desc: useEffect to animate the modal
   */
  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -400,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  /**
   * Name: handleClose
   * Desc: Function to animate the modal on close
   */
  const handleClose = () => {
    Animated.timing(slideAnim, {
      toValue: -400,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onClose();
    });
  };

  /**
   * Name: useEffect
   * Desc: useEffect to handle download start and complete
   */
  useEffect(() => {
    setDownloadStateProgress(downloadProgress);
  }, [downloadProgress]);

  /**
   * Name: useEffect
   * Desc: useEffect to handle download records
   */
  useEffect(() => {
    console.log('downloadData', downloadData);
    const tempArray = downloadData.map(obj => {
      return {...obj};
    });
    var foundData = tempArray.filter(obj => obj.isInProgress === true);
    console.log('foundData', foundData);

    setDownloadRecord(foundData[0]);
    var foundInQueueData = tempArray.filter(obj => obj.isInProgress === false);
    console.log('foundInQueueData', foundInQueueData);

    setInQueueRecord(foundInQueueData);
  }, [downloadData]);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      onRequestClose={() => handleClose()}>
      <View>
        <View style={styles.centeredView}>
          <Animated.View
            style={[
              styles.modalView,
              {
                transform: [{translateY: slideAnim}],
                minHeight: rpx(350),
              },
            ]}>
            <View style={styles.pointer} />
            <Text style={styles.headerText}>{strings.downloadInProgress}</Text>
            <ScrollView style={styles.parentContainer}>
              <View>
                {downloadRecord && (
                  <View style={styles.progressContainer}>
                    <Text style={styles.uploadText}>
                      {downloadRecord.fileName || downloadRecord.name}
                    </Text>
                    <Progress.Bar
                      progress={downloadStateProgress}
                      width={screenWidth - 100}
                      height={5}
                      color={colors.primaryButton}
                      style={styles.progress}
                    />
                  </View>
                )}
                {inQueueRecord && inQueueRecord.length > 0 && (
                  <Text style={styles.headerText}>
                    {strings.downloadInQueue} - {inQueueRecord.length}
                  </Text>
                )}
                {inQueueRecord &&
                  inQueueRecord.map(item => {
                    return (
                      <View style={styles.progressContainer}>
                        <Text style={styles.uploadText}>
                          {item.fileName || item.name}
                        </Text>
                        <Progress.Bar
                          indeterminate={true}
                          indeterminateAnimationDuration={2000}
                          width={screenWidth - 100}
                          height={5}
                          color={colors.primaryButton}
                          style={styles.progress}
                        />
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
            <View style={styles.closeButtonView}>
              <PrimaryButton
                title={strings.close}
                buttonStyle={{
                  height: rpx(32),
                  width: rpx(80),
                  backgroundColor: colors.stormGrey,
                  borderColor: colors.stormGrey,
                }}
                onPress={() => handleClose()}
              />
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'flex-start',
    marginTop: rpx(130),
    paddingHorizontal: rpx(30),
  },
  modalView: {
    backgroundColor: colors.lightGreenColor,
    padding: rpx(20),
    elevation: 5,
    width: '100%',
    borderBottomLeftRadius: rpx(20),
    borderBottomRightRadius: rpx(20),
    borderTopLeftRadius: rpx(20),
  },
  pointer: {
    width: rpx(0),
    height: rpx(0),
    borderLeftWidth: rpx(10),
    borderRightWidth: rpx(10),
    borderBottomWidth: rpx(15),
    borderStyle: 'solid',
    backgroundColor: colors.transparent,
    borderLeftColor: colors.transparent,
    borderRightColor: colors.transparent,
    borderBottomColor: colors.lightGreenColor,
    position: 'absolute',
    top: rpx(-15),
    alignSelf: 'flex-end',
  },
  headerText: {
    fontSize: rpx(18),
    fontWeight: '500',
  },
  uploadText: {
    fontSize: rpx(16),
  },
  progressContainer: {
    marginTop: rpx(5),
    borderTopWidth: rpx(2),
    borderTopColor: colors.borderColor,
    paddingTop: rpx(10),
    paddingBottom: rpx(20),
  },
  closeButtonView: {
    alignItems: 'center',
    paddingTop: rpx(10),
  },
  progress: {
    marginVertical: rpx(10),
    borderColor: colors.borderColor,
    borderWidth: rpx(2),
  },
  parentContainer: {height: rpx(300)},
});

export default DownloadStatusModal;
