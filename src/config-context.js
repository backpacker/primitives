import React, { useState } from 'react'

import defaultConfig from './config'
import { merge } from './utils/object'

const ConfigContext = React.createContext({});
const ConfigConsumer = ConfigContext.Consumer;

const ConfigProvider = ({ children, config: customConfig }) => {
  const [config, setConfig] = useState(merge(defaultConfig, customConfig))

  const setTheme = (newTheme = '') => {
    setConfig({
      ...config,
      activeTheme: newTheme
    })
  }

  const { activeTheme } = config;
  const value = {
    theme: config[activeTheme],
    setTheme
  }

  return (
    <ConfigContext.Provider value={value}>
      {children}
    </ConfigContext.Provider>
  )
}

export { ConfigProvider, ConfigConsumer }
export default ConfigContext
