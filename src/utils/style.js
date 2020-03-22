import { StyleSheet } from 'react-native';

const makeStyle = (styleArr = []) => {
  return StyleSheet.flatten(styleArr);
};

export { makeStyle };
