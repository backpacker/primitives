import { StyleSheet } from 'react-native';

const makeStyle = (styleArr = []) => StyleSheet.flatten(styleArr);

export { makeStyle };
