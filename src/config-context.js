import React, { useContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import baseConfig from './config';

const ConfigContext = React.createContext(undefined);

function ConfigProvider({ config: customConfig, defaultTheme, children }) {
  const [activeTheme, setActiveTheme] = useState(defaultTheme);

  const theme = useMemo(() => {
    const config = { ...baseConfig, ...customConfig };

    const baseTheme = baseConfig.default;

    const defaultSpacerSize =
      config[activeTheme]?.defaultSpacerSize || baseTheme.defaultSpacerSize;
    const spacerUnit = config[activeTheme]?.spacerUnit || baseTheme.spacerUnit;

    const spacing = (size = defaultSpacerSize) => size * spacerUnit;

    return {
      ...config[activeTheme],
      spacing
    };
  }, [activeTheme, customConfig]);

  const value = {
    theme,
    setTheme: setActiveTheme
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

ConfigProvider.propTypes = {
  config: PropTypes.shape({}),
  defaultTheme: PropTypes.string
};

ConfigProvider.defaultProps = {
  config: {},
  defaultTheme: 'default'
};

const withTheme = (Component) => (props) =>
  (
    <ConfigContext.Consumer>
      {(value) => <Component {...props} {...value} />}
    </ConfigContext.Consumer>
  );

function useTheme() {
  const ctx = useContext(ConfigContext);
  if (!ctx) {
    throw new Error(`useTheme() must be called within ConfigContext`);
  }
  return ctx;
}

export { ConfigProvider, withTheme, useTheme };
export default ConfigContext;
