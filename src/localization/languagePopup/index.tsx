import React from 'react';
import {Modal} from 'react-native';
import {
  CenterContainer,
  CrossImage,
  CrossImageContainer,
  Divider,
  HeaderContainer,
  LanguageText,
  LeftViewContainer,
  ModalText,
  ModalViewContainer,
  RadioImage,
  RowContainer,
} from './styled';
import {strings} from '..';
import pngImages from '../../assets/images/pngImages';
import {FontsWeight, changeLanguage} from '../utils';
 
/**
 * props type declaration
 */
interface Props {
  onChange?: () => void;
  modalVisible: boolean;
  onLanguageChange?: (item: any) => void;
  selectedLanguageCode: string;
  bgColor?: string;
}
/**
 * desc: LanguageModal screen UI
 * @param props
 */
const LanguageModal: React.FC<Props> = (props: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        if (props?.onChange) {
          props?.onChange();
        }
      }}>
      <CenterContainer>
        <ModalViewContainer bgColor={props?.bgColor}>
          <HeaderContainer>
            <ModalText>{strings.changeLanguage}</ModalText>
            <CrossImageContainer
              onPress={() => {
                if (props?.onChange) {
                  props?.onChange();
                }
              }}>
              <CrossImage source={pngImages.cross} />
            </CrossImageContainer>
          </HeaderContainer>
          <Divider />
          {strings.langArray.map((item, index) => (
            <RowContainer
              key={index}
              onPress={() => {
                if (props?.onLanguageChange) {
                  changeLanguage(item.code, true);
                  props?.onLanguageChange(item);
                }
              }}>
              <LeftViewContainer>
                <LanguageText
                  weight={
                    props.selectedLanguageCode === item.code
                      ? FontsWeight.BOLD
                      : FontsWeight.REGULAR
                  }>
                  {item.name}
                </LanguageText>
              </LeftViewContainer>
              {props.selectedLanguageCode === item.code && (
                <RadioImage source={pngImages.tickCircle} />
              )}
            </RowContainer>
          ))}
        </ModalViewContainer>
      </CenterContainer>
    </Modal>
  );
};

export default LanguageModal;
