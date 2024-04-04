import React from 'react';
import colors from '../../../styles/colors';
import { CheckBoxTouch, CheckedIcon, CheckBoxContainer } from './styled';

/**
 * desc: Checkbox props type declaration
 */
interface ICheckBoxProps {
  onPressCheck?: () => void;
  isChecked?: boolean;
  type?: string;
  testID?: string;
}

/**
 * Check Box UI
 * @returns React component
 */
const CheckBoxCircle: React.FC<ICheckBoxProps> = (props: ICheckBoxProps) => {
  const { onPressCheck, isChecked = false, testID } = props;
  const { white, hawkesBlue, dodgerBlue } = colors;
  const fillColor = isChecked ? dodgerBlue : white;

  return (
    <CheckBoxTouch onPress={onPressCheck} testID={testID}>
      <CheckBoxContainer border={hawkesBlue}>
        <CheckedIcon color={fillColor} />
      </CheckBoxContainer>
    </CheckBoxTouch>
  );
};

export default CheckBoxCircle;
