module.exports = {
  // 打包时适配
  plugins: {

    'postcss-px-to-viewport': {
      // 根据vw适配 375是根据375的屏幕
      viewportWidth: 375,
    },
  },
};