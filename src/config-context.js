import React, { Component } from 'react';

import defaultConfig from './config';
import { merge } from './utils/object';

const ConfigContext = React.createContext();
const ConfigConsumer = ConfigContext.Consumer;

export default class ConfigProvider extends Component {
  constructor(props) {
    super(props);
    this.updateConfig = this.updateConfig.bind(this);

    this.state = {
      config: defaultConfig
    };
  }

  updateConfig(newConfig = {}) {
    this.setState((state) => {
      const newState = {
        ...state,
        config: merge(state.config, newConfig)
      };
      return newState;
    });
  }

  render() {
    const { children } = this.props;
    const { config } = this.state;

    const { colors, scheme } = config;

    const value = {
      config: {
        ...config,
        colorScheme: colors[scheme]
      },
      updateConfig: this.updateConfig
    };

    return (
      <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
    );
  }
}

export { ConfigProvider, ConfigConsumer };
