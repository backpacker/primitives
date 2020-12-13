import React, { useContext, useState } from 'react';

import defaultConfig from './config';
import { merge } from './utils/object';

const ConfigContext = React.createContext({});
const ConfigConsumer = ConfigContext.Consumer;

const ConfigProvider = ({ children, config: customConfig }) => {
  const [config, setConfig] = useState(merge(defaultConfig, customConfig));

  const setTheme = (newTheme = '') => {
    setConfig({
      ...config,
      activeTheme: newTheme
    });
  };

  const { activeTheme } = config;
  const theme = {
    ...config[activeTheme],
    spacing: (size = config[activeTheme].defaultSpacerSize) =>
      size * config[activeTheme].spacerUnit
  };

  const value = {
    theme,
    setTheme
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

/**
 * HOC for using the active theme in class components
 * @param {React.ReactElement} Component
 * @return {React.ReactElement}
 */
const withTheme = (Component) => (props) => (
  <ConfigContext.Consumer>
    {(value) => <Component {...props} theme={value.theme} />}
  </ConfigContext.Consumer>
);

/**
 * @typedef {Object} Theme
 * @property {Object} fontSize
 * @property {string} fontWeight
 * @property {string} fontFamily
 * @property {Object} weights
 * @property {number} spacerUnit
 * @property {number} defaultSpacerSize
 * @property {Function} spacing
 * @property {Object} colors
 * @property {boolean} isDark
 */
/**
 * Hook for using the active theme
 * @return {Theme}
 */
const useTheme = () => {
  const { theme } = useContext(ConfigContext);
  return theme;
};

export { ConfigProvider, ConfigConsumer, withTheme, useTheme };
export default ConfigContext;
