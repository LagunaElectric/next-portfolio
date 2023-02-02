// const path = require('path')

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  // "webpackFinal": async (config, { configType }) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     '@/*': path.resolve(__dirname, "../../*"),
  //   }
  //   return config
  // }
}