import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import defaultConfig from './config';

const ConfigContext = React.createContext({});
const ConfigConsumer = ConfigContext.Consumer;

const ConfigProvider = ({ children, config: customConfig, defaultTheme }) => {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const theme = useMemo(() => {
    const config = { ...defaultConfig, ...customConfig };
    const defaultSpacerSize = config?.[activeTheme]?.defaultSpacerSize || 2;
    const spacerUnit = config?.[activeTheme]?.spacerUnit;

    return {
      ...config[activeTheme],
      spacing: (size = defaultSpacerSize) => size * spacerUnit
    };
  }, [activeTheme]);

  const setTheme = (newTheme) => {
    setActiveTheme(newTheme);
  };

  const value = {
    theme,
    setTheme
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

ConfigProvider.propTypes = {
  config: PropTypes.shape({}),
  defaultTheme: PropTypes.string
};

ConfigProvider.defaultProps = {
  config: {},
  defaultTheme: 'default'
};

/**
 * HOC for using the active theme in class components
 * @param {React.ReactElement} Component
 * @return {React.ReactElement}
 */
const withTheme = (Component) => (props) =>
  (
    <ConfigContext.Consumer>
      {(value) => <Component {...props} {...value} />}
    </ConfigContext.Consumer>
  );

/**
 * @typedef {Object} Theme
 * @property {string} fontFamily
 * @property {Object} fontWeights
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
const useTheme = () => useContext(ConfigContext);

export { ConfigProvider, ConfigConsumer, withTheme, useTheme };
export default ConfigContext;
