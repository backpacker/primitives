import React from 'react';
import {
  ViewStyle,
  TextStyle,
  LayoutAnimationConfig,
  ModalProps
} from '@types/react-native';

export interface LayoutTypes extends ViewStyle {
  /**
   * Shorthand for justifyContent: center, alignItems: center
   */
  center?: boolean;
}

export interface TextTypes extends TextStyle {
  /**
   * One of the variants defined in the current theme
   */
  variant:
    | 'largeTitle'
    | 'title1'
    | 'title2'
    | 'title3'
    | 'headline'
    | 'body'
    | 'callout'
    | 'subhead'
    | 'footnote'
    | 'caption1'
    | 'caption2';
  uppercase?: boolean;
  underline?: boolean;
  strikeout?: boolean;
  extralight?: boolean;
  thin?: boolean;
  light?: boolean;
  medium?: boolean;
  semibold?: boolean;
  bold?: boolean;
  heavy?: boolean;
  extraheavy?: boolean;
  center?: boolean;
}

export interface SpacerTypes extends ViewStyle {
  size?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;
}

export interface TouchableTypes extends ViewStyle {
  onPress?: () => void;
  isDisabled?: boolean;
  activeOpacity?: number;
}

export interface ExpandableTypes {
  initialState?: boolean;
  renderHeader: () => React.ReactElement | null;
  onShow: () => void;
  onHide: () => void;
  layoutAnimationPreset: LayoutAnimationConfig;
}

export interface ModalTypes extends ModalProps {
  onShow: () => void;
  onHide: () => void;
}

export interface BackpackerFontWeights {
  extralight: TextStyle;
  thin: TextStyle;
  light: TextStyle;
  normal: TextStyle;
  medium: TextStyle;
  semibold: TextStyle;
  bold: TextStyle;
  heavy: TextStyle;
  extraheavy: TextStyle;
}

export interface BackpackerTheme {
  fontFamily?: string;
  fontWeights?: BackpackerFontWeights;
  textVariants?: {
    largeTitle: TextStyle;
    title1: TextStyle;
    title2: TextStyle;
    title3: TextStyle;
    headline: TextStyle;
    body: TextStyle;
    callout: TextStyle;
    subhead: TextStyle;
    footnote: TextStyle;
    caption1: TextStyle;
    caption2: TextStyle;
  };
  spacerUnit?: number;
  defaultSpacerSize?: number;
  colors?: {
    [key: string]: string;
  };
  isDark: boolean;
}

type ConfigType = {
  [key: string]: BackpackerTheme;
} & { activeTheme: string };

export interface ConfigContextTypes {
  config: ConfigType;
}

export const Column: React.FC<LayoutTypes>;
export const Row: React.FC<LayoutTypes>;
export const Float: React.FC<LayoutTypes>;
export const Text: React.FC<TextTypes>;
export const Spacer: React.FC<SpacerTypes>;
export const Touchable: React.FC<TouchableTypes>;
export const Expandable: React.FC<ExpandableTypes>;
export class Modal extends React.Component<ModalTypes> {}

export const ConfigProvider: React.FC<ConfigContextTypes>;

export function useTheme(): {
  theme: BackpackerTheme;
  setTheme: (string) => void;
};

export const defaultTheme: BackpackerTheme;
export const fontWeights: BackpackerTheme.fontWeights;
