import React from 'react';
import {
  ViewStyle,
  TextStyle,
  LayoutAnimationConfig,
  ModalProps,
  AccessibilityRole,
  AccessibilityState,
  LayoutChangeEvent,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextLayoutEventData
} from '@types/react-native';

export interface LayoutTypes extends ViewStyle {
  /**
   * Shorthand for justifyContent: center, alignItems: center
   */
  center?: boolean;

  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: (event: LayoutChangeEvent) => void;
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

  /**
   * Shorthand for textTransform: 'uppercase'
   */
  uppercase?: boolean;

  /**
   * Shorthand for textDecorationLine: 'underline'
   */
  underline?: boolean;

  /**
   * Shorthand for textDecorationLine: 'line-through'
   */
  strikeout?: boolean;

  /**
   * If true applies the props specified for `extralight` font weight to the Text component
   * The `extralight` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  extralight?: boolean;

  /**
   * If true applies the props specified for `thin` font weight to the Text component
   * The `thin` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  thin?: boolean;

  /**
   * If true applies the props specified for `light` font weight to the Text component
   * The `light` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  light?: boolean;

  /**
   * If true applies the props specified for `medium` font weight to the Text component
   * The `medium` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  medium?: boolean;

  /**
   * If true applies the props specified for `semibold` font weight to the Text component
   * The `semibold` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  semibold?: boolean;

  /**
   * If true applies the props specified for `bold` font weight to the Text component
   * The `bold` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  bold?: boolean;

  /**
   * If true applies the props specified for `heavy` font weight to the Text component
   * The `heavy` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  heavy?: boolean;

  /**
   * If true applies the props specified for `extraheavy` font weight to the Text component
   * The `extraheavy` font weight props are specified in the theme config object
   * @see BackpackerTheme.fontWeights
   */
  extraheavy?: boolean;

  /**
   * Shorthand for textAlign: 'center'
   */
  center?: boolean;

  /**
   * An accessibility hint helps users understand what will happen when they perform an action on the accessibility element when that result is not obvious from the accessibility label.
   */
  accessibilityHint?: string;

  /**
   * Overrides the text that's read by the screen reader when the user interacts with the element. By default, the
   * label is constructed by traversing all the children and accumulating all the Text nodes separated by space.
   */
  accessibilityLabel?: string;

  /**
   * Accessibility Role tells a person using either VoiceOver on iOS or TalkBack on Android the type of element that is focused on.
   */
  accessibilityRole?: AccessibilityRole;

  /**
   * Accessibility State tells a person using either VoiceOver on iOS or TalkBack on Android the state of the element currently focused on.
   */
  accessibilityState?: AccessibilityState;

  /**
   * When true, indicates that the view is an accessibility element.
   * By default, all the touchable elements are accessible.
   */
  accessible?: boolean;

  /**
   * Specifies whether font should be scaled down automatically to fit given style constraints.
   */
  adjustsFontSizeToFit?: boolean;

  /**
   * Specifies whether fonts should scale to respect Text Size accessibility settings.
   * The default is `true`.
   */
  allowFontScaling?: boolean;

  /**
   * This can be one of the following values:
   *
   * - `head` - The line is displayed so that the end fits in the container and the missing text
   * at the beginning of the line is indicated by an ellipsis glyph. e.g., "...wxyz"
   * - `middle` - The line is displayed so that the beginning and end fit in the container and the
   * missing text in the middle is indicated by an ellipsis glyph. "ab...yz"
   * - `tail` - The line is displayed so that the beginning fits in the container and the
   * missing text at the end of the line is indicated by an ellipsis glyph. e.g., "abcd..."
   * - `clip` - Lines are not drawn past the edge of the text container.
   *
   * The default is `tail`.
   *
   * `numberOfLines` must be set in conjunction with this prop.
   *
   * > `clip` is working only for iOS
   */
  ellipsizeMode: 'head' | 'middle' | 'tail' | 'clip';

  /**
   * Specifies largest possible scale a font can reach when allowFontScaling is enabled. Possible values:
   * - null/undefined (default): inherit from the parent node or the global default (0)
   * - 0: no max, ignore parent/global default
   * - >= 1: sets the maxFontSizeMultiplier of this node to this value
   */
  maxFontSizeMultiplier?: number;

  /**
   * Specifies smallest possible scale a font can reach when adjustsFontSizeToFit is enabled. (values 0.01-1.0).
   */
  minimumFontScale?: number;

  /**
   * Used to reference react managed views from native code.
   */
  nativeID?: string;

  /**
   * Used to truncate the text with an ellipsis after computing the text
   * layout, including line wrapping, such that the total number of lines
   * does not exceed this number.
   *
   * This prop is commonly used with `ellipsizeMode`.
   */
  numberOfLines?: number;

  /**
   * Invoked on mount and layout changes with
   *
   * {nativeEvent: { layout: {x, y, width, height}}}.
   */
  onLayout?: (event: LayoutChangeEvent) => void;

  /**
   * This function is called on long press.
   * e.g., `onLongPress={this.increaseSize}>``
   */
  onLongPress?: (event: GestureResponderEvent) => void;

  /**
   * This function is called on press.
   * Text intrinsically supports press handling with a default highlight state (which can be disabled with suppressHighlighting).
   */
  onPress?: (event: GestureResponderEvent) => void;

  /**
   * Invoked on Text layout
   */
  onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;

  /**
   * Lets the user select text, to use the native copy and paste functionality.
   */
  selectable?: boolean;
}

export interface SpacerTypes extends ViewStyle {
  /**
   * Used to specify the size of the spacer.
   * The default value is `defaultSpacerSize` attribute of the theme config
   */
  size?: number;

  /**
   * Shorthand for width: '100%'
   */
  fullWidth?: boolean;

  /**
   * Shorthand for height: '100%'
   */
  fullHeight?: boolean;
}

export interface TouchableTypes extends ViewStyle {
  /**
   * Called when a tap gesture is detected.
   */
  onPress?: () => void;

  /**
   * If true, disable all interactions for this component.
   */
  isDisabled?: boolean;

  /**
   * Determines what the opacity of the wrapped view should be when touch is active.
   */
  activeOpacity?: number;
}

export interface ExpandableTypes {
  /**
   * If true, the component will be initially expanded, otherwise it will be initially collapsed.
   */
  initialState?: boolean;

  /**
   * Specifies the component to be rendered as the header of the Expandable component.
   */
  renderHeader: () => React.ReactElement | null;

  /**
   * Called when the component is expanded.
   */
  onShow: () => void;

  /**
   * Called when the component is collapsed.
   */
  onHide: () => void;

  /**
   * The preset configured for the animation scheduled to happen on component expand and collapse.
   */
  layoutAnimationPreset: LayoutAnimationConfig;
}

export interface ModalTypes extends ModalProps {
  /**
   * Called when the modal is displayed.
   */
  onShow: () => void;

  /**
   * Called when the modal is hidden.
   */
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
  spacing?: (size: number) => number;
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
  setTheme: (theme: string) => void;
};

export const defaultTheme: BackpackerTheme;
export const fontWeights: BackpackerTheme.fontWeights;
