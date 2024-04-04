/**
 * Styles Object type declaration
 */

export type ICheckedIcon = {
  color?: string;
  border?: string;
  isActive?: boolean;
};

export type IInput = {
  isRightIcon?: boolean;
  isValid?: boolean;
  color?: string;
  bgColor?: string;
  containerHeight?: number;
};

export type ILabel = {
  color?: string;
};

export type IStatusView = {
  bgColor: string;
};

export type ILoaderContainer = {
  color?: string;
  marginRight?: number;
};

export type IInputText = {
  isDescription?: boolean;
  isLeftIcon?: boolean;
  isRightIcon?: boolean;
};

export type IInputProps = {
  textAlignment?: string;
};

export type ILanguageProps = {
  code?: string;
  key?: string;
};
